import Header from '../components/header'
import Layout from '../components/layout'
import Container from '../components/container'
import Head from 'next/head'
import { BLOG_NAME, BLOG_TAGLINE } from '../lib/constants'

export default function About() {
	return (
		<>
      <Layout>
        <Head>
          <title>{BLOG_NAME} - {BLOG_TAGLINE}</title>
        </Head>
        <Header />
        <Container>
					<div className="mb-12 mt-24 max-w-2xl mx-auto">
						all about hh lifts
					</div>
        </Container>
      </Layout>
    </>
	)
}