import BlockPreview from '../components/block-preview'
import ChannelPreview from '../components/channel-preview'
import BlockSwitcher from '../components/block-switcher'
import Description from './description'
import { useState } from 'react'
import SecondaryBlockSwitcher from './secondary-block-switcher'

export default function MoreStories({ posts, month, desc, year }) {

  const [openItems, updateOpenItems] = useState();

  const onOpen = async (e, obj) => {
    console.log("index.js onOpenItem", obj)
    updateOpenItems(obj)
  }

  // const onOpen = (e, obj) =>{
  //   onOpenItem(e, obj)
  // }

  return (
    <>
    <section className="snap-start flex-shrink-0 w-full lg:w-96 md:w-96 p-5 pt-0 lg:pr-0 md:pr-0 z-10 overflow-y-auto overflow-x-visible h-screen hide-scroll-bar border-0">
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
      <div className="p-5 mb-5 relative block stick top-5 bg-gray-50 border-0 rounded z-30">
        <Description content={desc} />
      </div>
      <p className="fixed bottom-5 text-sm text-gray-300 z-0">{month} {year}</p>
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-x-16 lg:gap-x-16 gap-y-5 md:gap-y-5 mb-32 pt-5">
        {posts.map((post) => (
          <BlockSwitcher onOpen={onOpen} key={post.id} post={post} openItems={openItems} />
        ))}
      </div>
    </section>
    {openItems && <SecondaryBlockSwitcher key={openItems.id} onOpen={onOpen} post={openItems} />}
    </>
  )

}
