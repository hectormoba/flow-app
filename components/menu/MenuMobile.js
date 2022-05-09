import Image from 'next/image';
import HeaderNavigation from 'components/navigation/HeaderNavigation';
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
      <HeaderNavigation styles={styles} clickFunc={closeToggleMenu} />
    </section>
  )
}