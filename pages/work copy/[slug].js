import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getBlockById, getChannelContents } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              {/* <p>{post.title}</p> */}
              <PostHeader
                title={post.title}
                coverImage={post.image.large.url}
                // date={post.date}
                // author={post.author}
              />
              {/* <PostBody content={post.content} /> */}
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {

  const block = await getBlockById(params.slug)

  return {
    props: {
      post: {
        ...block,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getChannelContents(process.env.ARENA_CHANNEL.toString());

  const paths = posts.map(post => ({
     params: {
        slug: post.id.toString(),
     },
  }))
  return {
     paths,
     fallback: false
  }
}