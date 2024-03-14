import Nav from '../Nav';
import styles from './Header.module.css'

export default function Header(){
    return (
        <>
        <header className={ styles.header }> 
            <Nav />
            
            <div className={ styles.title }>
                <h1 className={ styles.h1 }>
                    BRUNO RODRIGUES
                </h1>
                <h2 className={ styles.h2 }>FRONTEND DEV</h2>
            </div>
        </header>
        </>
    );
}