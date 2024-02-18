import "./portfolio.css"
import PIC1 from "../../assets/p1.png"
import PIC2 from "../../assets/p2.png"

const data = [
  {
    id: 1,
    image: PIC1,
    title: 'Mern Task App',
    github: 'https://github.com/Shyboy443/testmern',
    demo: 'https://marn-task-app.onrender.com',
  },
  {
    id: 2,
    image: PIC2,
    title: 'Inventory Management System',
    github: 'https://github.com',
    demo: 'https://github.com',
  },

]

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key={id} className="portfolio__item">
            <div className='portfolio__item-image'>
            <img src={image} alt="Task App" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
    
          </article>
          )
        })
      }
       
      </div>
    </section>
  )
}

export default Portfolio