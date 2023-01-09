import Header from "./header"
import Footer from "./footer"
import ScrollTop from "./scrollTop"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}