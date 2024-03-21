import styles from "./ProjectRow.module.css";
import dbproj from "../../json/projetos.json";
import { Link } from 'react-router-dom'

export function ProjectCard({ titulo, tec, img, link }) {
  tec = [...tec]
  return (   
        <Link to={ link } target="_blank"
          className={ styles.projeto } 
          style={{ backgroundImage: `url("${ img }")` }}>

          <h3>{ titulo }</h3>
          <span>Tecnologias utilizadas: </span><br />

          <ul>
            { tec.map(item => {
              return <li><span>{ item }</span></li>
            }) }
          </ul>
          
        </Link>
  );
}

export default function ImageRow() {
  return (
    <div className={ styles.row }>
      {dbproj.slice(0, 3).map((projetos) => (
        <ProjectCard 
          titulo={ projetos.title } 
          tec={ projetos.tecnologies } 
          img={ projetos.url } 
          link={ projetos.link }/>
      ))}
    </div>
  );
}
