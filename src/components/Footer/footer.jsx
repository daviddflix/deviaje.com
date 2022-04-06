import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import s from './footer.module.css'


export function Footer(){
    return(
      <div className={s.container}>
         <div className={s.containerIcons}>
         <IoLogoWhatsapp className={s.icons}/>
          <BsFacebook className={s.icons}/>
          <FaInstagramSquare className={s.icons}/>
         </div>
        <div className={s.containerText}>
        <div className={s.text}>
            <h2>Report abuse</h2>
             <p>If you believe that the website is violating your rights, file a compliant by filling out this form</p>
        </div>
         <div className={s.text}>
        <h2>How to contact our support</h2>
         <p>To find out more about the platform features, contact us via email deviaje@gmail.com.ar</p>
        </div>
        <div className={s.text}>
            <h2>Accounting docs</h2>
            <p>To get the supporting documentation and proof of payment, send your request to deviajeaccounting@gmail.com.ar</p>
        </div>
        </div>
      </div>
    )
}