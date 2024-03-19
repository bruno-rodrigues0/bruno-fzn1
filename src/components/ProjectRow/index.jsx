import styles from "./ProjectRow.module.css";
import dbproj from "../../json/projetos.json";

export function ProjectCard({ titulo, tec, img }) {
  tec = [...tec]
  return (   
        <div 
          className={styles.projeto} 
          style={{ backgroundImage: `url("${ img }")` }}>

          <h3>{ titulo }</h3>
          <span>Tecnologias utilizadas: </span><br />

          <ul>
            { tec.map(item => {
              return <li><span>{ item }</span></li>
            }) }
          </ul>
          
        </div>
  );
}

export default function ImageRow() {
  return (
    <div className={styles.row}>
      {dbproj.map((projetos) => (
        <ProjectCard 
          titulo={projetos.title} 
          tec={projetos.tecnologies} 
          img={projetos.url} />
      ))}
    </div>
  );
}
