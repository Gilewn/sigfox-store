import React from 'react';
import logo from "../Navbar/en_sigfox.png";

function ColumnTwo(){
   

   return <div className="col2">
       <div className='col2-infoBox'>
            <div id='col2-product'><h3>SimplePack 3.0 Plus Full RC1</h3> </div>
            <div id='col2-category'><p>Internet Of Things</p></div>
            <div id='col2-overview'><p>Multipurpose device enabling 50+ use cases in all the verticals - track, trace, guard assets, monitor machine hours, monitor overturn, monitor temperature and much more.</p></div>
            <div className='info'><a href='#contactUs'><ion-icon name="information-outline"></ion-icon>Request for information</a></div>
            
        </div>  

        <div id='contactUs'className='col2-contactForm'>
            <div className='header'> Request information</div>
            <div className='logo'>
                <div className='sigfox-logo'><img src={logo} alt="Sigfox-Hellas"/></div>
                <div className='sigfox-logo-contact-text'>Get directly in touch with <br/> Sigfox Hellas</div>
            </div>
            <div className='contact-form'>
                <form action="post">
                <div className='inputs'>   
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Lastname'/>
                <input type="email" placeholder='Email'/>
                <textarea name="message" id="message" cols="30" rows="5" placeholder="Type your request"></textarea>
                </div>
                <div className='submit-button'>
                 <button id='button'type='submit'><ion-icon id='message-icon' name="mail-outline"></ion-icon>Send</button>
                </div>
                </form>
            </div>
            <div className='contact-form-footer'><p>By clicking on SEND, you consent to the communication of your data to the company for which you raise a request (Terms of use).  </p></div>
        </div>
   </div>
}

export default ColumnTwo;