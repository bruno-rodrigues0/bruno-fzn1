import Nav from '../Nav';
import styles from './Header.module.css'

export default function Header({ title, subtitle }){
    return (
        <>
        <header className={ styles.header }> 
            <Nav />
            
            <div className={ styles.title }>
                <h1 className={ styles.h1 }>
                    { title }
                </h1>
                <h2 className={ styles.h2 }>{ subtitle }</h2>
            </div>
        </header>
        </>
    );
}