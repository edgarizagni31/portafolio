import { ContactItem  } from '../components/ContactItem';
import  { BsEnvelope } from 'react-icons/bs';
import { FaGithub,FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import '../styles/contact.css';

export const Contact = () => {
    return (
        <section className = 'contact'>
            <div>
                <h2 className = 'contact__title'>!hablemos!</h2>   
                <article className = 'contact__contacts'> 
                    <ContactItem icon = { <BsEnvelope /> } user =  'eom3108@gmail.com' />
                    <ContactItem icon = { <FaGithub /> } user =  '@edgarizagni31' />
                    <ContactItem icon = { <FaInstagram /> } user =  'edgarochoa' />
                    <ContactItem icon = { <FaLinkedinIn /> } user =  'edgarochoa' />
                </article>
            </div>
        </section>
    )
}
