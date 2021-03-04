import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import Body from '../components/body'
import PostTitle from '../components/post-title'
import PostBody from '../components/post-body'
import { BLOG_NAME, BLOG_TAGLINE } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'

export default function Index({ post }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME} - {BLOG_TAGLINE}</title>
        </Head>
        <Header />
        <Container>
          <Body>
            {post && (
              <>
                <PostTitle>{post.title}</PostTitle>
                <PostBody content={post.content} />
              </>
            )}
            <div className="text-center">
              <Link href="/archive">see more</Link>
            </div>
          </Body>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'content'
  ])

  const post = allPosts[0];
  const content = await markdownToHtml(post.content || '')
  post.content = content;
  

  return {
    props: { post },
  }
}
