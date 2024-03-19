import Header from "../../components/Header";
import AboutMeArea from "../../components/AboutMe";
import ImageRow from "../../components/ProjectRow";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import styles from './HomePage.module.css'


export default function HomePage(){
    return(
        <>
            <Header title={"BRUNO RODRIGUES"} subtitle={"FRONTEND DEV"}/>
            <AboutMeArea />
            <ImageRow />
                <div className={ styles.projectsBtn }>
                <Button text="Todos os projetos"/>
                <Button text="Contate-me"/>
                </div>
            <Footer />
        </>
    );
}