import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav(){
    return (
        <nav className={ styles.nav }>
            <Link to="/">
            <img src="/images/rpLogoWhite.png" alt="Logo do site" />
            </Link>
            <Link to="/Projetos">
            <img src="/images/nav-btn.png" alt="Botão de navegação" />
            </Link>
        </nav>
    );
}