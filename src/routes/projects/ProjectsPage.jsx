import Header from "../../components/Header";
import ImageRow from "../../components/ProjectRow"
import styles from './ProjectPage.module.css'
import Button from "../../components/Button"
import { Link } from 'react-router-dom'

export default function ProjectsPage(){
    return(
        <>
        <Header title={"MEUS PROJETOS"} subtitle={"FEITOS COM MUITA DEDICAÇÃO :D"}/>

        <div className={ styles.container }>
            <ImageRow />
            <ImageRow />
        </div>
        <div className={ styles.btnDiv }>
            <Link to={'/Contato'}>
                <Button text={"Contate-me"}/>
            </Link>
        </div>
        </>
    );
}