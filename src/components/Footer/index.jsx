import styles from './Footer.module.css'

function Navigator(){
    return(
        <ul className={ styles.ul }>
            <li>Projetos</li>
            <li>Sobre</li>
            <li>Contato</li>
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