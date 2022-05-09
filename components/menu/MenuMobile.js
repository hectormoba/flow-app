import Image from 'next/image';
import Link from 'next/link';
import Close from 'public/icons8-close-30.png';
import styles from './menuMobile.module.scss';

export default function MenuMobile(props){
  const { toggle, closeToggleMenu } = props;
  
  return(
    <section className={toggle ? `${styles.menu}` : `${styles.menu} not-displayed` } >
    <div className={styles.menu__header}>
    <Image
          className="icon"
          layout="fixed"
          height={32}
          width={32}
          src={Close}
          onClick={closeToggleMenu}
        />
    </div>
      <nav className={styles.menu__nav} onClick={closeToggleMenu}>
        <ul className={styles.list}>
          <li className={styles.list__item} >
            <Link href="/works">
              <a className="link--nav font-l">How it works</a>
            </Link>
          </li>
          <li className={styles.list__item} >
            <Link href="/about">
              <a className="link--nav font-l">About flow</a>
            </Link>
          </li>
          <li className={styles.list__item} >
            <Link href="/flow">
              <a className="link--nav font-l">What means flow time</a>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}