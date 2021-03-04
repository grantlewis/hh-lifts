import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen text-hh-gray">
        <Alert />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
