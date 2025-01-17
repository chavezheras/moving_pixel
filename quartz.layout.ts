import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.OnlyFor(
      { titles: ["My Net of Notes"] },
      Component.RecentNotes({showTags:false, showDate: true, title:"Recent notes", limit:7})
    )
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/chavezheras"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["twitter", "twitter_bookmarks", "a-note-about-my-notes", "contact", "publications", "learn-more-about-my-work", "reference-letters" ,"study-with-me", "public-speaking", "consulting", "contact", "about-me-(bio)", "press-queries", "research-interests"])
        return !omit.has(node.name.toLowerCase())
      },
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["twitter", "twitter_bookmarks", "a-note-about-my-notes", "contact", "book-giveaway", "book", "learn-more-about-my-work", "study-with-me", "public-speaking", "consulting", "contact", "press-queries", "my-work"])
        return !omit.has(node.name.toLowerCase())
      },
    })),
  ],
  right: [],
}
