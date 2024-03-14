import styles from "./ProjectRow.module.css";
import dbproj from "../../json/projetos.json";

function ProjectCard({ titulo, tec }) {
  return (
    <div className={styles.projeto}>
      <h3>{ titulo }</h3>
      <span>{ tec }</span>
    </div>
  );
}

export default function ImageRow() {
  return (
    <div className={styles.row}>
      {dbproj.slice(0, 3).map((projetos) => (
        <ProjectCard titulo={projetos.title} tec={projetos.tecnologies} />
      ))}
    </div>
  );
}
