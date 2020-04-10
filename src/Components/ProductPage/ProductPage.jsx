import React, { Component } from 'react';
import './ProductPage.css';
import HtmlComponent from '../HtmlComponent/HtmlComponent'
import Certification from '../Certification/Certification'
import {MDBJumbotron,MDBCardTitle,MDBBtn, MDBIcon, MDBInput ,MDBRow,MDBContainer,MDBCol,MDBBreadcrumb,MDBBreadcrumbItem,MDBCarousel,MDBCarouselInner, MDBCarouselItem, MDBView,MDBMask,MDBCarouselCaption,MDBLink } from 'mdbreact';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


var decodeHTML = function (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};


class ProductPage extends Component {
    state = {
        product: [],
        collapseID: "collapse1",
        name: '',
        email: '',
        message: '',
        //productimages: [],
        //productcertifications: [],
        isLoaded: false,
        isLoaded2: false,
        alsoInterestedProductsIds: null,
        alsoInterestedProductsImages: null,
       
    }

    componentDidMount() {
        
        axios.get(`http://localhost:5000/products/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({ product: res.data  });
                this.setState({ isLoaded: true });
               // this.setState({ productimages: res.data.images });
               // this.setState({ productcertifications: res.data.certifications });
               
               
            })
            .catch(function (error) {
                console.log(error);
            });
            
           

            axios.get(`http://localhost:5000/${this.props.location.state.params.title}/products`)
            .then(res => {
                
               
                let alsoInterestedProducts = res.data;
                alsoInterestedProducts = alsoInterestedProducts.reduce((arr, el) => {
                  if (el._id !==this.props.match.params.id) {
                    arr[el._id] = el.images[0];
                    return arr;
                  }
                  return arr;
                }, []);
              let alsoInterestedProductsIds = Object.keys(alsoInterestedProducts);
              let alsoInterestedProductsImages = Object.values(alsoInterestedProducts);
              console.log(alsoInterestedProductsIds)
              this.setState({
                  alsoInterestedProductsIds: alsoInterestedProductsIds,
                  alsoInterestedProductsImages: alsoInterestedProductsImages,
                  isLoaded2: true
                  });
                })
                
            
            .catch(function (error) {
                console.log(error);
            });
        }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value, [event.target.email]: event.target.value, [event.target.message]: event.target.value });
     }

     handleSubmit = event => {
            event.preventDefault();
       
            const user = {
              name: this.state.name,
              email: this.state.email,
              message: this.state.message
           };
       
           axios.post(`http://localhost:5000/partners/submit`, { user })
             .then(res => {
               console.log(res);
               console.log(res.data);
             })
          }

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

  
        
    render() {
       
        if (this.state.isLoaded === false && typeof this.state.product.images === 'undefined' && typeof this.state.product.certifications === 'undefined' ) {
            return <div />
        }

        if (this.state.isLoaded2 === false &&  this.state.alsoInterestedProductsIds === null &&  this.state.alsoInterestedProductsImages === null ) {
            return <div />
        }

        return(
           
        <MDBContainer fluid> 
           
      
        <MDBRow >
        <MDBCol >
        <MDBBreadcrumb dark="true" color="blue lighten-4">
                <MDBLink to="/">Home <span style={{paddingLeft: "1rem"}}>/</span></MDBLink>
          
        <MDBLink to={`/${this.state.product.solution}/products`}>{this.state.product.solution}<span style={{paddingLeft: "1rem"}}>/</span></MDBLink>
              <MDBLink to="#" style={{color: "#000" , cursor: "default"}}><span>{this.state.product.title}</span></MDBLink>
              </MDBBreadcrumb>
        </MDBCol>
         </MDBRow>
        
        <MDBRow>
        <MDBCol lg="8">
       
        <MDBCarousel  
              activeItem={1}
              length= { this.state.product.images.length} 
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
              {this.state.product.images.map((image, index) =>
                <MDBCarouselItem key={index+1} itemId={index+1}>
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={'photo' + index}
                    />
                  <MDBMask overlay="black-light" />
                  </MDBView>
              
                </MDBCarouselItem>
                
              )}
              </MDBCarouselInner>
            </MDBCarousel>
    
        </MDBCol>
        
        <MDBCol lg="4"> 
        <MDBJumbotron  style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-3 px-3 my-0" style={{ height: "100%", backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                      <MDBCol justify-content-md-center="true" className="py-5">
                        <MDBCardTitle className="h1-responsive pt-5 mx-3 mt-5 mb-3 font-bold">{this.state.product.title}</MDBCardTitle>
                        <div className="mx-5 mb-3" id='col2-category'><p>{this.state.product.solution}</p></div>
                        <div className="mx-4 mb-5" id='col2-overview'><p>{this.state.product.description}</p></div>
                        <div className='mx-4 mb-5 info'><a href='#contactUs'><ion-icon name="information-outline"></ion-icon>Request Information</a></div>
                       
                        
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
              <HtmlComponent htmlText={decodeHTML(this.state.product.generalDetails)} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Certifications
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <MDBContainer fluid>
                <MDBRow>
              {this.state.product.certifications.map((certificate, index) => <MDBCol key={index+1}  sm="12" md="6" ><Certification key={index} certificate={certificate} /></MDBCol>)}
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
          <Card id="contactUs">
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Contact us
            </Accordion.Toggle>
            <Accordion.Collapse  eventKey="3">
              <Card.Body >
                  <form action="post" onSubmit={this.handleSubmit}>
                
                <div className="grey-text">
                  <MDBInput label="Your name" icon="user" name="name" group type="text" onChange={this.handleChange} validate error="wrong"
                    success="right" />
                  <MDBInput label="Your email" icon="envelope" name="email" group type="email" onChange={this.handleChange} validate error="wrong"
                    success="right" />
                 
                  <MDBInput label="Your message" icon="pencil"  name="message"  type="textarea" rows="2" onChange={this.handleChange} />
                </div>
                <div className="text-center">
                  
                  <MDBBtn type='submit' name="mail-outline" outline color="secondary">
                   Order Now
                    
                  </MDBBtn >
                </div>
              </form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
            </MDBCol>
        
            <MDBCol className="my-2" lg="4">
            <div><h2 id="alsoInterestedHeader"> You Might also Interested</h2></div>
            <MDBCarousel id="alsoInterested"
              activeItem={1}
              length= {this.state.alsoInterestedProductsImages.length} 
              showControls={false}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
              {this.state.alsoInterestedProductsImages.map((product, index) =>
                <MDBCarouselItem key={index+1} itemId={index+1}>
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={product}
                      alt={'photo' + index}
                    />
                  <MDBMask overlay="black-slight" />
                  </MDBView>
               
                </MDBCarouselItem>
                
              )}
              </MDBCarouselInner>
            </MDBCarousel>
            </MDBCol> 
        </MDBRow>
   </MDBContainer>);
  
        }
        }
        
    


export default ProductPage;