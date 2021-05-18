import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import Body from '../components/body'
import SimplePost from '../components/simple-post'
import InstagramFeed from '../components/instagramFeed'
import { BLOG_NAME, BLOG_TAGLINE } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'

export default function Index({ posts, instaPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME} - {BLOG_TAGLINE}</title>
        </Head>
        <Header />
        <Container>
          <Body>
            {posts && posts.length > 0 && posts.map(post => (
              <SimplePost post={post} key={post.title} />
            ))}
            <div className="text-center">
              <Link href="/archive">see more</Link>
            </div>
          </Body>
          <InstagramFeed posts={instaPosts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch(process.env.IG_TOKEN_URL);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  const token = data.Token;
  const instaRes = await fetch(`https://graph.instagram.com/me/media?fields=media_url,caption,permalink&access_token=${token}`);
  const instaData = await instaRes.json();
  const instaPosts = instaData.data || [];

  const allPosts = getAllPosts([
    'title',
    'content',
    'date'
  ])

  const posts = allPosts.slice(0, 3);
  for (let i = 0; i < posts.length; i++) {
    const content = await markdownToHtml(posts[i].content || '')
    posts[i].content = content;
  }

  return {
    props: { posts, instaPosts },
  }
}
