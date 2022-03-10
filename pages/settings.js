import Image from 'next/image';
import Link from 'next/link';
import ModalLayout from 'components/layouts/modal/ModalLayout';
import close from 'public/icons8-close-30.png';

export default function Settings(){
  return (
    <>
      <nav>
        <h2>Settings</h2>
        <Link href="/">
          <Image 
            layout="fixed"
            src={close}
          />
        </Link>
      </nav>
      <section>
        <form>
          <h3>Time</h3>
          <p>Select a time for a flowing season</p>
          <div>
            <input type="radio" id="one-hour" />
            <label for="one-hour">One hour</label>
          </div>
          <div>
            <input type="radio" id="two-hour"/>
            <label for="two-hour">Two hours</label>
          </div>
          <div>
            <input type="radio" id="three-hour"/>
            <label for="three-hour">Three hours</label>
          </div>
          <p>Select a duration for your short brake</p>
          <input type="number" max="5" min="1"/>
          <div>
            <p>You're going to start a flow of n hour/s with m possible short brakes. When you finish the flow you have m minuts for rest</p>
          </div>
        </form>
      </section>
    </>
  )
}

Settings.getLayout = function getLayout(page) {
  return (
    <ModalLayout>
      {page}
    </ModalLayout>
  )
}