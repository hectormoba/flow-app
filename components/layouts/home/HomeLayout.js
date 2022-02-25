import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

export default function HomeLayout({ children }) {
  return(
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}