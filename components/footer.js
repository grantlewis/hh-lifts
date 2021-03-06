import { useEffect } from 'react';
import Container from './container'

export default function Footer({ token }) {

  useEffect(() => {
    const feed = new Instafeed({ 
      accessToken: token
    });
    feed.fun();
  }, []);

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div id="instafeed"></div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://ig.instant-tokens.com/users/ad648578-886b-4844-8945-8582c8f3e5de/instagram/17841446408356692/token?userSecret=e2j46nqfhzqnwxwtf3miz');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { token: data.Token }
  }
} 