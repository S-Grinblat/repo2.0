import './footer.css'
export const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__section">

        <div className="footer__container">
          <div className='footer-content__container'>
            <h1 className="footer__title">Santiago</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#Mi" className="footer__link">Inicio</a>
            </li>

            <li>
              <a href="#about" className="footer__link">Curriculum</a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">Proyectos</a>
            </li>

            <li>
              <a href="#contact" className="footer__link">Contacto</a>
            </li>
          </ul>

        </div>
        <p className="footer__copy">&#169; right reserved</p>

      </div>
    </footer>
  )
}