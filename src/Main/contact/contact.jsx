import { useEffect } from 'react'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import './Contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
export const Contact = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <section data-aos="fade-up" data-aos-duration="2500" className="contact-section" id="contact">
      <h2 className="section__title">Contacto</h2>
      <main className="contact__container">
        <div className='container-content'>

          <div className="contact__information">
            <BsFillTelephoneInboundFill className="contact__icon" />
            <div className="contact-info__container">
              <h3 className="contact__title">Celular :</h3>
              <span className="contact__subtitle"> (+54) 1123014038</span>
            </div>
          </div>

          <div className="contact__information">
            <AiOutlineMail className="contact__icon" />
            <div className="contact-info__container">
              <h3 className="contact__title">Email :</h3>
              <span className="contact__subtitle">silva.santiago1185@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <ImLocation2 className="contact__icon" />
            <div className="contact-info__container">
              <h3 className="contact__title">Localizacion :</h3>
              <span className="contact__subtitle">Argentina - Buenos Aires</span>
            </div>
          </div>

            <div className='container-redes'>
              <a href="https://instagram.com/s.grinblat" target="_blank" rel="noopener noreferrer">
                <BsInstagram className='icons' />
              </a>
              <a href="http://www.twitter.com/SanGrinblat" target="_blank" rel="noopener noreferrer">
                <BsTwitter className='icons'/>
              </a>
              <a href="https://www.linkedin.com/in/santiago-silva59a5b6237" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className='icons' />
              </a>
              <a href="https://github.com/S-Grinblat" target="_blank" rel="noopener noreferrer">
              <BsGithub className='icons' />
              </a>
            </div>

        </div>
      </main>
    </section>
  )
}