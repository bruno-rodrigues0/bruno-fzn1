import styles from './ProjectRow.module.css'
import dbproj from '../../json/projetos.json'

function ProjectCard(){
    
    return (
        dbproj.map(projetos => 
        <div className={ styles.projeto }>
            <h3>{ projetos.title }</h3>
            <span>{ projetos.tecnologies }</span>
        </div>
        )
    );
}

export default function ImageRow(){
    return (
        <div className={ styles.row }>   
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}