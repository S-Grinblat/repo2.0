import {useState} from 'react'
import './Header.css'
import {GiHamburgerMenu} from 'react-icons/Gi'
import {FaUserCircle} from 'react-icons/fa'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {BsBookHalf} from 'react-icons/bs'
import {BsFillPhoneVibrateFill} from 'react-icons/bs'
export const Header = () => {

  const [active, setActive] = useState('navBarMenu')

  const showNavBar = () => {
    setActive('navBarMenu showNavBar')
  }

  const removeNavBar = () => {
    setActive('navBarMenu')
  }

  const [noBg, addBg] = useState('navBarTwo')

  const addBgColor = () => {
    if(window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_Bg')
    } else {
      addBg('navBarTwo')
    }
  }
  window.addEventListener('scroll', addBgColor)

  return(
    <header className="header" id="header">
      <nav className="nav">
        <div className={noBg} id="nav-menu">
          <GiHamburgerMenu onClick={showNavBar} className="nav__menu-logo" id="home" />
        </div>

        <div className={active} id="container-menu">
          <div className="menu">
            <div className='container__iconsLinks'>
              <FaUserCircle className='icon'/>
              <a onClick={removeNavBar} href='#Mi' className="buttons__menu">Sobre Mi</a>
            </div>
            <div className='container__iconsLinks'>
              <BsBookHalf className='icon'/>
              <a onClick={removeNavBar} href='#portfolio' className="buttons__menu">Proyectos</a>
            </div>
            <div className='container__iconsLinks'>
              <BsJournalBookmarkFill className='icon'/> 
              <a onClick={removeNavBar} href='#about' className="buttons__menu">Curriculum</a>
            </div>
            <div className='container__iconsLinks'>
              <BsFillPhoneVibrateFill className='icon'/>
              <a onClick={removeNavBar} href='#contact' className="buttons__menu">Contact</a>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}