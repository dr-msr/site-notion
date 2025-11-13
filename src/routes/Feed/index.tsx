import { useState } from "react"

import SearchInput from "./SearchInput"
import { FeedHeader } from "./FeedHeader"
import Footer from "./Footer"
import MobileProfileCard from "./MobileProfileCard"
import ProfileCard from "./ProfileCard"
import ServiceCard from "./ServiceCard"
import ContactCard from "./ContactCard"
import PostList from "./PostList"
import PinnedPosts from "./PostList/PinnedPosts"

const HEADER_HEIGHT = 73

type Props = {}

const Feed: React.FC<Props> = () => {
  const [q, setQ] = useState("")

  return (
    <div className="grid grid-cols-12 py-8 gap-6 max-md:block max-md:py-2">
      <div className="mid col-span-12 lg:col-span-9">
        <MobileProfileCard />
        <div className="search-mobile block lg:hidden">
          <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <PinnedPosts q={q} />
        <FeedHeader />
        <PostList q={q} />
        <div className="footer pb-8 lg:hidden">
          <Footer />
        </div>
      </div>
      <div
        className="rt hidden lg:block lg:col-span-3 overflow-y-auto overflow-x-hidden sticky scrollbar-none"
        style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)`, top: `${HEADER_HEIGHT - 10}px` }}
      >
        <ProfileCard />
        <div className="search-desktop hidden lg:block">
          <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        {/* <ServiceCard /> */}
        <ContactCard />
        <div className="footer pt-4">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Feed
