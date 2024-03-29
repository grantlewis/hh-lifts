import Header from '../components/header'
import Layout from '../components/layout'
import Container from '../components/container'
import Body from '../components/body'
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
          <Body>
            <p>
              hh started lifting in high school. 
              lifting is her source of confidence and joy. 
              she wants to share this.
            </p>
          </Body>
        </Container>
      </Layout>
    </>
	)
}