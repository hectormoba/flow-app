import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import CountDown from 'public/countdown.mp3';
import Bip from 'public/bip.mp3'

export default function HomeLayout({ children }) {
  return(
    <>
      <Header />
        <main className="main">{children}</main>
        <audio id="countdown" src={CountDown} />
        <audio id="bip" src={Bip} />
      <Footer />
    </>
  )
}