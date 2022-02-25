import Image from 'next/image';
import menu from 'public/icons8-menu-48.png'

export default function Header(){
  return(
    <header className="header">
      <Image src={menu}/>
      <h1>flow</h1>
    </header>
  )
}