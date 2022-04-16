import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

export default function HomeLayout({ children }) {
  return(
    <div className="container">
      <Header />
        <main className="main">{children}</main>
      <Footer />
    </div>
  )
}