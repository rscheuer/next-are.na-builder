import MoreBlocks from '../components/more-blocks'
import Layout from '../components/layout'
import { getAllPosts, getChannelContents, getChannelInfo } from '../lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'

import { useContext, useState } from 'react';
import ClickContext from '../contexts/click';
import { configureStore } from '@reduxjs/toolkit'

export default function Index({ allPosts, blocks, metadata, desc, lastEdit }) {
  // const heroPost = blocks[0]
  const morePosts = blocks
  const cool = metadata
  const [clickAmount, increment] = useContext(ClickContext);

  const editDate = new Date(lastEdit)
  const year = editDate.getFullYear()
  const month = editDate.getMonth();

  const config = {
    demo: "demo"
  }
  const data = `ipsum`;

  // console.log(blocks)



  const onCloseItem = (e, obj) => {

  }

  return (
    <>
      <Layout>
        <Head>
          <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
        </Head>
        {blocks.length > 0 && <MoreBlocks posts={morePosts} year={year} month={month} desc={desc} />}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const blocks = getChannelContents(process.env.ARENA_CHANNEL.toString());
  const metadata = await getChannelInfo(process.env.ARENA_CHANNEL.toString());

  const content = await markdownToHtml(metadata[0].cDesc)

  const lastEdit = await metadata[0].cUpdated;


  return {
    props: { 
      // allPosts,
      blocks: await blocks,
      metadata: await metadata,
      desc: await content,
      lastEdit: await lastEdit,
    },
    revalidate: 6,
  }
}
