import React from 'react'
import './styles.css'

const contactForm = () => {
    return(
        <div className="form-wrapper">
           <div className="form-title">
                <h3>Contact Me</h3>
                <p>Do you have any questions? Please do not hesitate to contact me directly. I will get back to you within a matter of hours!</p>
           </div>
               <form className="form">
                   <div className="formName forminputs">
                        <label for="form-name">Your Name:</label><br/>
                        <input type="text" id="form-name" name="form-name"/>
                   </div>
                    
                   <div className="formEmail forminputs">
                        <label for="form-email">Your Email:</label><br/>
                        <input type="text" id="form-email" name="form-email"/>
                   </div>   

                   <div className="formSubject forminputs ff">
                        <label for="form-subject">Subject:</label><br/>
                        <input type="text" id="form-subject" name="form-subject"/>
                   </div>    

                   <div className="formMessage forminputs ff">
                        <label for="form-message">Message:</label><br/>
                        <input type="text" id="form-message" name="form-message"/>
                   </div>     
               </form>   
        </div>
    )
}

export default contactForm;