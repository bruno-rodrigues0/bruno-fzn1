import styles from './Footer.module.css'
import autor from '../../json/db.json'

function Navigator(){
    return(
        <ul className={ styles.ul }>
            <a href="../../Projects."><li>Projetos</li></a>
            <a href="#"><li>Sobre</li></a>
            <a href="#"><li>Contato</li></a>
        </ul>
    );
}

function Contact(){
    return(
        <div className={ styles.contato }>
            <span>{ autor.email }</span><br />
            <span>{ autor.tel }</span>
        </div>
    );
}

export default function Footer(){
    return (
        <footer className={ styles.footer }>
            <Navigator />   
            <Contact />
            <a href="#"><img src="/images/rpLogoWhite.png" alt="Logo do site" /></a>
        </footer>
    );
}