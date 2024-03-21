import styles from "./AboutMe.module.css";

export default function Box({ title, children }){
    return (
        <div className={ styles.box }>
            <h1>{ title }</h1>
            { children }
        </div>
    );
}

function Skills() {

function GridElemt({ imgId, imgAlt }){
    return (
        <div className={ styles.skills}>
            <img src={ imgId } alt={ imgAlt } />
            <span>{ imgAlt }</span>
        </div>
    );
}

  return (
    <div className={styles.skillGrid}>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"HTML 5"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"CSS 3"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"JavaScript"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"ReactJS"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"NodeJS"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"Figma"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"Chrome"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"VSCode"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"Git"}/>
        <GridElemt imgId={"/images/HTML5.png"} imgAlt={"NPM"}/>
    </div>
  );
}

export function AboutMeArea() {
  return (
    <div className={ styles.abmeArea }>
        <Box title={"Sobre mim"}>
            <p>Salve! Prazer, me chamo <strong>Bruno</strong>. Tenho 17 anos atualmente e sou estudante do curso de Informática para Internet do <strong>IF - Campus</strong> Guanambi. Sou apaixonado por tecnologia e tenho um vicio em estar sempre aprendendo novas tecnologias. Nesse momento estou aprendendo a utilizar o <strong>React JS</strong> como Framework principal.</p>
        </Box>

        <Box title={"Minhas habilidades"}>
            <Skills />
        </Box>
    </div>
  );
}
