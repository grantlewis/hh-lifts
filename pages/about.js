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
              hh has been lifting since high school. 
              lifting is where her physical and mental strength are 
              developed and she wants to share the ability to grow 
              both with the world.
            </p>
          </Body>
        </Container>
      </Layout>
    </>
	)
}