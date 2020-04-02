import React from 'react';
import HtmlComponent from '../HtmlComponent/HtmlComponent'
import Certification from '../Certification/Certification'
import {MDBBtn, MDBIcon, MDBInput ,MDBRow,MDBContainer,MDBCol,MDBBreadcrumb,MDBBreadcrumbItem,MDBCarousel,MDBCarouselInner, MDBCarouselItem, MDBView,MDBMask,MDBCarouselCaption } from 'mdbreact';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

var decodeHTML = function (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};

export default class ColumnOne extends React.Component  {

    state={
        collapseID: "collapse1"
      }
      
      toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));
    

     changePhoto(e) {
        const photo = document.querySelector("#main-photo");
        photo.src = e.target.src;
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
<MDBCol md="8">
<MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
</MDBCol>

</MDBRow>

<MDBRow>
    <MDBCol md="8">
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>In computer science, artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.[1] Colloquially, the term "artificial intelligence" is often used to describe machines (or computers) that mimic "cognitive" functions that humans associate with the human mind, such as "learning" and "problem solving".[2]

As machines become increasingly capable, tasks considered to require "intelligence" are often removed from the definition of AI, a phenomenon known as the AI effect.[3] A quip in Tesler's Theorem says "AI is whatever hasn't been done yet."[4] For instance, optical character recognition is frequently excluded from things considered to be AI[5] , having become a routine technology.[6] Modern machine capabilities generally classified as AI include successfully understanding human speech,[7] competing at the highest level in strategic game systems (such as chess and Go),[8] autonomously operating cars, intelligent routing in content delivery networks, and military simulations.

Artificial intelligence was founded as an academic discipline in 1955, and in the years since has experienced several waves of optimism,[9][10] followed by disappointment and the loss of funding (known as an "AI winter"),[11][12] followed by new approaches, success and renewed funding.[10][13] For most of its history, AI research has been divided into subfields that often fail to communicate with each other.[14] These sub-fields are based on technical considerations, such as particular goals (e.g. "robotics" or "machine learning"),[15] the use of particular tools ("logic" or artificial neural networks), or deep philosophical differences.[16][17][18] Subfields have also been based on social factors (particular institutions or the work of particular researchers).[14] </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      Contact us
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
          <form>
        
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1"  />
          </MDBBtn>
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