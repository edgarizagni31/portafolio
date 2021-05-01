import React from 'react'
import { FormItem } from '../components/FormItem'

import '../styles/contact.css';

export const Contact = () => {
    return (
        <section className = 'contact'>
            <div>
                <h2 className = 'contact__title'>!hablemos!</h2>   
                <form className = 'contact__form' >
                    <FormItem id = 'name' title = 'Nombre' />
                    <FormItem id = 'email' title = 'Email' />
                    <FormItem id = 'subject'  title = 'Asunto'/>
                    <FormItem id = 'message' title = 'Mensaje' />
                    <button className = 'contact__btn' >Enviar Mensaje</button>
                </form>    
            </div>
        </section>
    )
}
