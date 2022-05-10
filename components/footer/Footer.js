import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer(){
  return(
    <footer className={styles.footer}>
     <div className={styles.options_wrapper}>
       <Link href="/settings">
        <a className={styles.footer__link}>Settings</a>
       </Link>
       <p>Make it with Next.js</p>
     </div>
    </footer>
  )
}