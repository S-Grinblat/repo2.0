import {useEffect} from 'react'
import p1 from '../../../imgs/proyecto-1.webp'
import p2 from '../../../imgs/proyecto-2.webp'
import p4 from '../../../imgs/proyecto-4.webp'
import p6 from '../../../imgs/proyecto-6.webp'
import p7 from '../../../imgs/proyecto-7.webp'
import p8 from '../../../imgs/proyecto-8.webp'
import p9 from '../../../imgs/proyecto-9.webp'
import p10 from '../../../imgs/proyecto-10.webp'
import './project.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
export const Projects = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <section data-aos="fade-down" data-aos-duration="2500" className="portfolio__section" id="portfolio">
      <h2 className="section-portfolio__title">Proyectos</h2>
      <p className="text-content">Desplaza los proyectos para ver mas... </p>

      <div className='portfolios__container'>

        <div className="portfolio__project">

          <div className="portfolio__content">

            <picture className="slider">
              <img src={p1} alt="imagen del proyecto" className="portfolio__img"></img>
            </picture>

            <article className="portfolio__data">
            <h4 className="portfolio__title">Batabit cripto monedas</h4>
            <p className="portfolio__description">Se trata de una página donde se pueden conocer y Comprar cripto monedas, además encontrar suscripciones en las cuales se obtienen beneficios como profesionales de la industria, que te ayudarán a comprar y entender el nuevo mercado mundial.</p>

            <a href="https://teal-puppy-d845a4.netlify.app" className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">Leer Mas
              <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
              </svg>
            </a>

            </article>
          </div>

          <div className="portfolio__content">

          <picture className="slider">
            <img src={p2} alt="imagen del proyecto" className="portfolio__img"></img>
          </picture>

          <article className="portfolio__data">
          <h4 className="portfolio__title">casa de pastas</h4>
          <p className="portfolio__description">Un comercio dedicado  exclusivamente a crear y elaborar pastas, cada una de estás con detalles que la hacen únicas. Dentro de la misma, los clientes podrán acceder a la lista de ingredientes con las que fueron elaboradas.</p>

          <a href="https://aquamarine-tulumba-068a4a.netlify.app" className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">Leer Mas
            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
              <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
            </svg>
          </a>

          </article>
          </div>

          <div className="portfolio__content">

            <picture className="slider">
              <img src={p4} alt="imagen del proyecto" className="portfolio__img"></img>
            </picture>

            <article className="portfolio__data">
            <h4 className="portfolio__title">Calculadora</h4>
            <p className="portfolio__description">Prototipo de calculadora simple, los colores se utilizan para diferenciar entré operadores y formatos de resultados. Funciona con todos tipos de cálculos matemáticos.</p>

            <a href="https://dancing-toffee-be839c.netlify.app" className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">Leer Mas
              <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
              </svg>
            </a>

            </article>
          </div>

          <div className="portfolio__content">

            <picture className="slider">
              <img src={p6} alt="imagen del proyecto" className="portfolio__img"></img>
            </picture>

            <article className="portfolio__data">
              <h4 className="portfolio__title">Sneakers</h4>
              <p className="portfolio__description">Sneakers es una ecomers simple, minimalista para poder realizar pedidos en base al producto seleccionado, sumando las cantidades del mismo.</p>

              <a href="https://strong-croissant-997625.netlify.app/" className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">Leer Mas
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                  <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
              </a>

            </article>
          </div>

          <div className="portfolio__content">

            <picture className="slider">
              <img src={p7} alt="imagen del proyecto" className="portfolio__img"></img>
            </picture>

            <article className="portfolio__data">
            <h4 className="portfolio__title">Turismo Espacial</h4>
            <p className="portfolio__description">Turismo Espacial es una página donde se obtienen detalles de los satélites y planetas del sistema solar. En dónde también podemos conocer la tecnología actual para movernos entre las estrellas y sus tripulantes.</p>

            <a href="https://bejewelled-mermaid-66b5b6.netlify.app" className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">Leer Mas
              <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
              </svg>
            </a>

            </article>
          </div>

          <div className="portfolio__content">

            <picture className="slider">
              <img src={p8} alt="imagen del proyecto" className="portfolio__img"></img>
            </picture>

            <article className="portfolio__data">
              <h4 className="portfolio__title">Weather APP</h4>
              <p className="portfolio__description">Es una aplicación del clima en tiempo real,donde se muestran más de 200.000 ciudades en todo mundo, siendo Temperatura, Humedad y Sensación Térmica los mayores factores.</p>

              <a href="https://silly-khapse-6fa790.netlify.app/" className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">Leer Mas
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                  <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
              </a>

            </article>
          </div>

          <div className="portfolio__content">

            <picture className="slider">
              <img src={p9} alt="imagen del proyecto" className="portfolio__img"></img>
            </picture>

            <article className="portfolio__data">
              <h4 className="portfolio__title">Password Generator</h4>
              <p className="portfolio__description">En Password Generator, podes crear contraseñas SEGURAS de distintos tipos de caracteres, con un minimo de 2 y hasta un total de 20, podras usar estas contraseñas para todas tus apps</p>

              <a href="https://papaya-sable-b001a4.netlify.app" className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">Leer Mas
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                  <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
              </a>

            </article>
          </div>

          <div className="portfolio__content">

            <picture className="slider">
              <img src={p10} alt="imagen del proyecto" className="portfolio__img"></img>
            </picture>

            <article className="portfolio__data">
              <h4 className="portfolio__title">Airlines</h4>
              <p className="portfolio__description">Una pagina de Viaje y turismo, en distintas regiones del planeta, con esta Aerolinea , podras viajar a donde quieras en el momento que quieras. Viajes seguros, con personal Profesional Y a muy bajo Costo</p>

              <a href="https://dapper-lamington-931cc1.netlify.app" className="button button--flex button--small portfolio__button" target="_blank" rel="noopener noreferrer">Leer Mas
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                  <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
              </a>

            </article>
          </div>

        </div>

      </div>
    </section>
  )
}