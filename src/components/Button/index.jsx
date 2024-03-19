import styles from './Button.module.css'

export default function Button({ text }){
    return(
        <a href="Projects.jsx">
            <button className={ styles.button }>
                <p> <span>-&gt; </span>{ text }</p>
            </button>
        </a>
    );

}