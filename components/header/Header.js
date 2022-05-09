import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowWide } from 'lib/clock/useWindowWide';
import { width } from 'lib/clock/data';
import MenuMobile from 'components/menu/menuMobile';
import HeaderNavigation from 'components/navigation/HeaderNavigation';
import menu from 'public/icons8-menu-48.png'
import help from 'public/icons8-help-48.png'
import styles from './header.module.scss'

export default function Header(){
  const [toggle, setToggle] = useState(false);
  const wide = useWindowWide(width.desktop);

  const handleClickMenu = () => {
    setToggle(!toggle);
  }

  const navBar = !wide ? 
    (
      <Image
        className={`${styles.image} icon`}
        layout="fixed"
        height={32}
        width={32}
        src={help}
      />
    ) : (
      <HeaderNavigation styles={styles} />
    )

  return(
    <>
    <header className={styles.header}>
      <div className={!wide ? "" : styles.header__desktop } >
        <Image
            className="icon"
            layout="fixed"
            height={32}
            width={32}
            src={menu}
            onClick={handleClickMenu}
        />
      </div>
      <Link href="/">
        <h1 className={`${styles.title} font-xl`}>flow</h1>
      </Link>
      <div>
       {navBar}
      </div>
    </header>
    <MenuMobile 
      closeToggleMenu={handleClickMenu}
      toggle={toggle}
    />
    </>
  )
}