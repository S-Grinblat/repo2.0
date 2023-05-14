import './myInfo.css'
import img from '../../../imgs/yo.webp'
export const MyInfo = () => {
  return(
    <section className="my-info__section">
      <div className="my-info__container">
        <div className="my-info__content">

          <div className="my-info__data" id="Mi">
            <h1 className="my-info__title">Bienvenido!</h1>
            <picture className='container-img'>
              <img className='img__my-info' src={img}></img>
            </picture>
            <h3 className="my-info__subtitle">¡Hola! Soy Silva Santiago</h3>
            <p className="my-info__description">Un apasionado desarrollador frontend con experiencia en la creación de experiencias web interactivas y atractivas.</p>
            <h3 className="my-info__subtitle"> Sobre mi </h3>
            <p className="my-info__description">Mis habilidades principales incluyen: HTML5, CSS3 y JavaScript: Dominio en el desarrollo de interfaces web utilizando las últimas tecnologías. Experiencia en el uso de frameworks como React, Diseño responsivo, Optimización y rendimiento: Conocimiento en técnicas de optimización de carga y rendimiento para mejorar la experiencia del usuario.</p>
          </div>

        </div>
      </div>
    </section>
  )
} 