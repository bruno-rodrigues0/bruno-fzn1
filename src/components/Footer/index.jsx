import styles from './Footer.module.css'

function Navigator(){
    return(
        <ul className={ styles.ul }>
            <a href="#"><li>Projetos</li></a>
            <a href="#"><li>Sobre</li></a>
            <a href="#"><li>Contato</li></a>
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
            <Navigator />   
            <Contact />
            <a href="#"><img src="/images/rpLogoWhite.png" alt="Logo do site" /></a>
        </footer>
    );
}