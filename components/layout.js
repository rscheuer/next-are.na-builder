import Meta from '../components/meta'
import MoreBlocks from '../components/more-blocks'
import Description from './description'
import { getAllPosts, getChannelContents, getChannelInfo } from '../lib/api'
import { useState } from 'react'

export default function Layout({ preview, children, allPosts, blocks, metadata, desc, lastEdit }) {

  const morePosts = blocks;
  const editDate = new Date(lastEdit)
  const year = editDate.getFullYear()
  const month = editDate.getMonth();

  const [activeBlock, setActiveBlock] = useState()

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>
            <div className="flex overflow-x-scroll min-w-full hide-scroll-bar snap snap-x snap-mandatory">
                {children}
            </div>
        </main>
      </div>
    </>
  )
}
