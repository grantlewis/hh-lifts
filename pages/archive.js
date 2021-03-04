import Header from '../components/header'
import Layout from '../components/layout'
import Container from '../components/container'
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
					<div className="mb-12 mt-24 max-w-2xl mx-auto">
						<h2 className="text-xl md:text-2xl lg:text-3xl font-bold">archive</h2>
						<ul >
							{allPosts.map(post => (
								<li className="my-4">
									<Link as={`/posts/${post.slug}`} href="/posts/[slug]">
										<a className="hover:underline">{post.title}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>			
        </Container>
      </Layout>
    </>
	)
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
		'slug'
  ])
  
  return {
    props: { allPosts },
  }
}