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
                    <ContactItem icon = { <BsEnvelope /> } user =  'eom3108@gmail.com'/>
                    <ContactItem icon = { <FaGithub /> } user =  'Github'  link = 'https://github.com/edgarizagni31/' />
                    <ContactItem icon = { <FaInstagram /> } user =  'Instagram'  link = 'https://www.instagram.com/edgarochoa31/'  />
                    <ContactItem icon = { <FaLinkedinIn /> } user =  'Linkedin' link = 'https://www.linkedin.com/in/edgar-ochoa-0197581b4/' />
                </article>
            </div>
        </section>
    )
}
