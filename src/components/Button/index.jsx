import styles from './Button.module.css'

export default function Button({ text }){
    return(
        <button className={ styles.button } onClick={() => {
            window.scrollTo(0, 0)
        }}>
            <p> <span>-&gt; </span>{ text }</p>
        </button>
    );

}