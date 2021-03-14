import Header from '../components/header'
import Layout from '../components/layout'
import Container from '../components/container'
import Body from '../components/body'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import { BLOG_NAME, BLOG_TAGLINE } from '../lib/constants'

export default function Archive({ allPosts }) {
	return (
		<>
      <Layout>
        <Head>
          <title>{BLOG_NAME} - {BLOG_TAGLINE}</title>
        </Head>
        <Header />
        <Container>
					<Body>
						<h2 className="text-xl md:text-2xl lg:text-3xl font-bold">archive</h2>
						<ul >
							{allPosts.map((post, i) => (
								<li className="my-4" key={i}>
									<Link as={`/posts/${post.slug}`} href="/posts/[slug]">
										<a className="hover:underline">{post.title}</a>
									</Link>
								</li>
							))}
						</ul>
					</Body>	
        </Container>
      </Layout>
    </>
	)
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
	'slug',
	'date'
  ])
  
  return {
    props: { allPosts },
  }
}