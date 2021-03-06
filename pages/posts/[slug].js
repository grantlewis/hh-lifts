import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import SimplePost from '../../components/simple-post'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Body from '../../components/body'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { BLOG_NAME, HOME_OG_IMAGE_URL } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Header />
      <Container>
        <Body>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>
                    {post.title} - {BLOG_NAME}
                  </title>
                  <meta property="og:image" content={HOME_OG_IMAGE_URL} />
                </Head>
                <SimplePost post={post} />
              </article>
            </>
          )}
        </Body>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
