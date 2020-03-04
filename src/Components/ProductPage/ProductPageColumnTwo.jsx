import React from 'react';
import logo from "../Navbar/en_sigfox.png";
import axios from 'axios';

export default class ColumnTwo extends React.Component {

  state = {
    name: '',
    lastname: '',
    email: '',
    message: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, [event.target.lastname]: event.target.value, [event.target.email]: event.target.value, [event.target.message]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      message: this.state.message


    };

    axios.post(`http://localhost:5000/partners`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
    
    
    render() {
   return <div className="col2">
       <div className='col2-infoBox'>
    <div id='col2-product'><h3>{this.props.product.title}</h3> </div>
            <div id='col2-category'><p>{this.props.product.solution}</p></div>
            <div id='col2-overview'><p>{this.props.product.description}</p></div>
            <div className='info'><a href='#contactUs'><ion-icon name="information-outline"></ion-icon>Request for information</a></div>
        </div>  

      <div id='contactUs' className='col2-contactForm'>
        <div className='header'> Request information</div>
        <div className='logo'>
          <div className='sigfox-logo'><img src={logo} alt="Sigfox-Hellas" /></div>
          <div className='sigfox-logo-contact-text'>Get directly in touch with <br /> Sigfox Hellas</div>
        </div>
        <div className='contact-form'>
          <form action="post" onSubmit={this.handleSubmit}>
            <div className='inputs'>
              <input type="text" placeholder='Name' name="name" onChange={this.handleChange} />
              <input type="text" placeholder='Lastname' name="lastname" onChange={this.handleChange} />
              <input type="email" placeholder='Email' name="email" onChange={this.handleChange} />
              <textarea name="message" id="message" cols="30" rows="5" placeholder="Type your request" message="message" onChange={this.handleChange}></textarea>
            </div>
            <div className='submit-button'>
              <button id='button' type='submit'><ion-icon id='message-icon' name="mail-outline"></ion-icon>Send</button>
            </div>
          </form>
        </div>
        <div className='contact-form-footer'><p>By clicking on SEND, you consent to the communication of your data to the company for which you raise a request (Terms of use).  </p></div>
      </div>
    </div>
  }
}
