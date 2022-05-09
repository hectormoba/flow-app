import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

export default function HomeLayout({ children, mainClass }) {
  return(
    <div className="container">
      <Header />
        <main className={mainClass}>{children}</main>
      <Footer />
    </div>
  )
}