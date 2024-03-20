import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import styles from './ContactPage.module.css'

export default function ContactPage(){
    return (
        <>
            <Header title="CONTATE-ME" subtitle="ME DÊ UM OI!"/>
            <div className={ styles.container }>
                <ContactForm />
            </div>
        </>
    );
}