import styles from './Nav.module.css'

export default function Nav(){
    return (
        <nav className={ styles.nav }>
            <a href="#"><img src="/images/rpLogoWhite.png" alt="Logo do site" /></a>
            <a href="#"><img src="/images/nav-btn.png" alt="Botão de navegação" /></a>
        </nav>
    );
}