import phone from '../../../icons-logos/phone-call.svg'
import message from '../../../icons-logos/message.svg'
import location from '../../../icons-logos/location.svg'
import instagram from '../../../icons-logos/instagramActive.svg'
import twitter from '../../../icons-logos/twitter.svg'
import linkedin from '../../../icons-logos/linkedin.svg'
import gitHub from '../../../icons-logos/github.svg'
import './Contact.css'
export const Contact = () => {
  return(
    <section className="contact-section" id="contact">
      <h2 className="section__title">Contacto</h2>
      <main className="contact__container">
        <div className='container-content'>

          <div className="contact__information">
            <img className="contact__icon" src={phone} alt="phone"></img>
            <div className="contact-info__container">
              <h3 className="contact__title">Celular :</h3>
              <span className="contact__subtitle"> (+54) 1123014038</span>
            </div>
          </div>

          <div className="contact__information">
            <img className="contact__icon" src={message} alt="message"></img>
            <div className="contact-info__container">
              <h3 className="contact__title">Email :</h3>
              <span className="contact__subtitle">silva.santiago1185@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <img className="contact__icon" src={location} alt="location"></img>
            <div className="contact-info__container">
              <h3 className="contact__title">Localizacion :</h3>
              <span className="contact__subtitle">Argentina - Buenos Aires</span>
            </div>
          </div>

          <div className='container-redes'>
              <a href="https://instagram.com/s.grinblat" target="_blank" rel="noopener noreferrer">
                <img src={instagram} className='icon'></img>
              </a>
              <a href="http://www.twitter.com/SanGrinblat" target="_blank" rel="noopener noreferrer">
                <img src={twitter} className='icon'></img>
              </a>
              <a href="https://www.linkedin.com/in/santiago-silva59a5b6237" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} className='icon'></img>
              </a>
              <a href="https://github.com/S-Grinblat" target="_blank" rel="noopener noreferrer">
                <img src={gitHub} className='icon'></img>
              </a>
            </div>

        </div>
      </main>
    </section>
  )
}