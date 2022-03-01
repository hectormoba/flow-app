import styles from './header.module.scss'
import "components/header/header.module.scss";
import Image from 'next/image';
import menu from 'public/icons8-menu-48.png'

export default function Header(){
  return(
    <header className={styles.header}>
      <Image
        className={styles.image}
        layout="fixed"
        height={32}
        width={32}
        src={menu}
      />
      <h1 className={`${styles.title} font-xl`}>flow</h1>
      <div></div>
    </header>
  )
}