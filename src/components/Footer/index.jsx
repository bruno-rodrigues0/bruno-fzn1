import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Navigator(){
    return(
        <ul className={ styles.ul }>
            <Link to="/Projetos" className={ styles.link }>
                <li>Projetos</li>
            </Link>
            <Link to="/Sobre" className={ styles.link }>
                <li>Sobre</li>
            </Link>
            <Link to="/Contato" className={ styles.link }>
                <li>Contato</li>
            </Link>
        </ul>
    );
}

function Contact(){
    return(
        <div className={ styles.contato }>
            <span>brunorodriguesmtv0@gmail.com</span><br />
            <span>+55 (38) 997375691</span>
        </div>
    );
}

export default function Footer(){
    return (
        <footer className={ styles.footer }>
            <div className={ styles.container }>
                <Navigator />
                <Contact />
                <img src="/images/rpLogoWhite.png" alt="Logo do site" />
            </div>
        </footer>
    );
}