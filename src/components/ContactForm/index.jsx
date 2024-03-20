import styles from './ContactForma.module.css'
import Button from '../../components/Button'

export default function ContactForm(){
    return(
        <>
            <form action="">
                <h2>Entre em contato</h2>
                <div className={ styles.row }>
                    <div className={ styles.area }>
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="nome" placeholder="Seu nome"/>
                    </div>
                    <div className={ styles.area }>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="mail" placeholder='Seu email'/>
                    </div>
                </div>
                <div className={ styles.row }>
                    <div className={ styles.area }>
                        <label htmlFor="msg">Mensagem</label>
                        <input type="text" name="msg" id="mesage" placeholder='Deixe sua mensagem' className={ styles.msg } />
                    </div>
                </div>
                <div className={ styles.btnDiv }>
                    <Button text={"Enviar"}/>
                </div>  
            </form>
        </>
    )
}