import Header from "../../components/Header";
import AboutMeArea from "../../components/AboutMe";
import ImageRow from "../../components/ProjectRow";
import Button from "../../components/Button";
import { Link } from 'react-router-dom'

import styles from './HomePage.module.css'


export default function HomePage(){
    return(
        <>
            <Header title={"BRUNO RODRIGUES"} subtitle={"FRONTEND DEV"}/>
            <AboutMeArea />
            <ImageRow />
            <div className={ styles.projectsBtn }>
                <Link to="/Projetos">
                    <Button text="Todos os projetos"/>
                </Link>
                <Link to="/Contato">
                    <Button text="Contate-me"/>
                </Link>
            </div>
        </>
    );
}