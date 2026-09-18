import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { FilePath, joinSegments, pathToRoot, resolveRelative, slugifyFilePath } from "../util/path"
import { byDateAndAlphabetical } from "./PageList"
import { Date, getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"
import style from "./styles/_featuredNote.scss"
import { classNames } from "../util/lang"

interface Options {
  title?: string
  filter: (f: QuartzPluginData) => boolean
}

const defaultOptions: Options = {
  filter: () => true,
}

// Quartz's stock Description plugin can collapse to a bare "..." when the
// source text starts with leading whitespace (e.g. every page here, since
// the body always starts on its own line). Build our own excerpt from the
// raw text instead of relying on `frontmatter.description`.
function excerpt(text: string | undefined, len = 160): string {
  if (!text) return ""
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= len) return clean
  return clean.slice(0, len).trimEnd() + "…"
}

// Picks the note to feature: any page with `pinned: true` in its frontmatter wins;
// otherwise falls back to the most recently modified page (same ordering as RecentNotes).
function pickFeatured(
  allFiles: QuartzPluginData[],
  cfg: GlobalConfiguration,
  filter: (f: QuartzPluginData) => boolean,
): QuartzPluginData | undefined {
  const candidates = allFiles.filter(filter)
  const pinned = candidates.find((f) => f.frontmatter?.pinned === true)
  if (pinned) return pinned

  const dated = candidates.filter((f) => f.dates)
  return [...dated].sort(byDateAndAlphabetical(cfg))[0]
}

export default ((userOpts?: Partial<Options>) => {
  const FeaturedNote: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    const featured = pickFeatured(allFiles, cfg, opts.filter)
    if (!featured) return <></>

    const title = featured.frontmatter?.title ?? "Untitled"
    const desc = (featured.frontmatter?.description as string | undefined) ?? excerpt(featured.text)
    const banner = featured.frontmatter?.banner as string | undefined
    const bannerSrc = banner
      ? joinSegments(pathToRoot(fileData.slug!), slugifyFilePath(banner as FilePath))
      : undefined

    return (
      <div class={classNames(displayClass, "featured-note")}>
        <h3>{opts.title ?? "Latest"}</h3>
        <a
          href={resolveRelative(fileData.slug!, featured.slug!)}
          class="internal featured-note-card"
        >
          {bannerSrc && <img src={bannerSrc} alt={title} class="featured-note-banner" />}
          <div class="featured-note-body">
            <h4>{title}</h4>
            {featured.dates && (
              <p class="meta">
                <Date date={getDate(cfg, featured)!} locale={cfg.locale} />
              </p>
            )}
            {desc && <p class="featured-note-desc">{desc}</p>}
          </div>
        </a>
      </div>
    )
  }

  FeaturedNote.css = style
  return FeaturedNote
}) satisfies QuartzComponentConstructor
