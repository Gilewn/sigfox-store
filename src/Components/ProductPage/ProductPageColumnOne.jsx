import React from 'react';
import HtmlComponent from '../HtmlComponent/HtmlComponent'
import Certification from '../Certification/Certification'
import {MDBJumbotron,MDBCardTitle,MDBBtn, MDBIcon, MDBInput ,MDBRow,MDBContainer,MDBCol,MDBBreadcrumb,MDBBreadcrumbItem,MDBCarousel,MDBCarouselInner, MDBCarouselItem, MDBView,MDBMask,MDBCarouselCaption } from 'mdbreact';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

var decodeHTML = function (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};


export default class ColumnOne extends React.Component  {

    state={
        collapseID: "collapse1",
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
              }
              };

      
                  
      
      toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));


        setActiveFirstCarouselIndicator=()=>{
        var liFirst=document.querySelector('#indicator0');

        liFirst.setAttribute("className","active");
        };

     changePhoto(e) {
        var idPhoto = e.target.id;
        console.log(idPhoto);
        const photo=document.querySelector("#carousel-item"+idPhoto);
        photo.setAttribute("class","carousel-item active")
    }
render(){
    return<MDBContainer fluid>
    
<MDBRow>
<MDBCol >
<MDBBreadcrumb dark color="blue lighten-4">
        <MDBBreadcrumbItem > <a href="#">Home</a></MDBBreadcrumbItem>
        <MDBBreadcrumbItem ><a href="#">Smart-Cities</a></MDBBreadcrumbItem>
        <MDBBreadcrumbItem active >Product</MDBBreadcrumbItem>
      </MDBBreadcrumb>
</MDBCol>
 </MDBRow>
<MDBRow>
<MDBCol lg="8">
<MDBCarousel id="myCarousel"
      activeItem={0}
      length={this.props.album.length}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
        <ol  class="carousel-indicators">
        {this.props.album.map((image, index) =>
          <li onClick={this.changePhoto} id={index} data-target="#myCarousel" data-slide-to={index}></li>) }
          
        </ol>
      <MDBCarouselInner>
      {this.props.album.map((image, index) =>
      <MDBCarouselItem id={"carousel-item"+index} itemId={index}>
        
      <MDBView>
        <img
          className="d-block w-100"
          src={image}
          alt={'photo' + index}
        />


      <MDBMask overlay="black-slight" />
      </MDBView>
      </MDBCarouselItem>
    
      )}  
      </MDBCarouselInner>
    </MDBCarousel>
</MDBCol>

<MDBCol lg="4"> 
<MDBJumbotron  style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-6 px-6 my-0" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol justify-content-md-center className="py-5">
                <MDBCardTitle className="h1-responsive pt-6 m-6 font-bold">{this.props.product.title}</MDBCardTitle>
                <div className="mx-6 mb-6" id='col2-category'><p>{this.props.product.solution}</p></div>
                <div className="mx-6 mb-6" id='col2-overview'><p>{this.props.product.description}</p></div>
                {/* <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p> */}
                
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
</MDBCol>

</MDBRow>

<MDBRow>
    <MDBCol lg="8">
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Description
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body> 
      <HtmlComponent htmlText={decodeHTML(this.props.product.generalDetails)} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Certifications
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <MDBContainer fluid="md">
        <MDBRow>
      {this.props.certifications.map((certificate, index) => <MDBCol  sm="12" md="6" ><Certification key={index} certificate={certificate} /></MDBCol>)}
      </MDBRow>
      </MDBContainer>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      Technical Details
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      Contact us
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
          <form action="post" onSubmit={this.handleSubmit}>
        
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" onChange={this.handleChange} validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" onChange={this.handleChange} validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" onChange={this.handleChange} success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil" onChange={this.handleChange} />
        </div>
        <div className="text-center">
          <MDBBtn  name="mail-outline" outline color="secondary">
            Send
            
          </MDBBtn >
        </div>
      </form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </MDBCol>

    <MDBCol id="contact-form" md="4">
      
    </MDBCol> 
</MDBRow>
{/* <Carousel>
{this.props.album.map((image, index) => 
  <div>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      key={index} 
      alt={'photo' + index}
    />
    <Carousel.Caption>
      
      </Carousel.Caption>
  </Carousel.Item>
  
  </div>
)}
</Carousel> */}


</MDBContainer>

        {/* <Row >
        <Col><div className='image'>
            <div className="arrows"> <ion-icon id='left-arrow' name="chevron-back-outline"></ion-icon></div>
            <img id='main-photo' src={this.props.album[0]} alt="photo" />
            <div className="arrows2"> <ion-icon id='right-arrow' name="chevron-forward-outline"></ion-icon></div>
        </div>
        </Col>
        </Row>
        <Row>
        <div className="card-postal">
            {this.props.album.map((image, index) => <img onClick={this.changePhoto} key={index} src={image} alt={'photo' + index} />)}
        </div>
        </Row>
        <Row>
        <div id="general-text" className='general'>
            <HtmlComponent htmlText={decodeHTML(this.props.product.generalDetails)} />
        </div>
        </Row>
        <Row>
        <div id='certification' className="certification-header">
            <a>Certification</a>
        </div>
        </Row>
        <Row>
        <div className="certification-body">
            {this.props.certifications.map((certificate, index) => <Certification key={index} certificate={certificate} />)}
        </div>
        </Row>
        <Row>
        <div id='technical-details' className='technical-details-header' >
            <a>Technical Details</a>
        </div>
        </Row>
        <Row>
        <div className='technical-details-body'>
            <Row>
            <div className='technical-details-col1'>
                <div>Product casing</div>
                <div>Sigfox Connectivity</div>
                <div>Product electrical <br /> characteristics</div>
                <div>Embedded Software</div>
                <div>External antenna</div>
            </div>
            </Row>
            <Row>
            <div className='technical-details-col2'>
                <div>Dimensions (in mm): <br />Weight: </div>
                <div>RF:</div>
                <div>Power Supply: <br />Power Consumption:</div>
                <div>SDK:</div>
                <div>Available</div>
            </div>
            </Row>
        </div>
        </Row>
        <Row>
        <div className='also-interested-in'>
            <h2>You might also be interested in these products</h2>
        </div>
        </Row> */}
    
   

}
}