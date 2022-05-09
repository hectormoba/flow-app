import Link from 'next/link';

export default function HeaderNavigation({ styles , clickFunc }){

  return (
    <nav className={styles.menu__nav} onClick={ clickFunc ? clickFunc : null}>
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
  )
}