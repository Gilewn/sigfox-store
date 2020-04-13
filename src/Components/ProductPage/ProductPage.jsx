import React, { Component } from "react";
import HtmlComponent from "../HtmlComponent/HtmlComponent";
import Certification from "../Certification/Certification";
import {
  MDBJumbotron,
  MDBCardTitle,
  MDBBtn,
  MDBInput,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBBreadcrumb,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBLink,
} from "mdbreact";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound"
import "./ProductPage.css";

let decodeHTML = function (html) {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

class ProductPage extends Component {
  state = {
    product: [],
    collapseID: "collapse1",
    name: "",
    email: "",
    message: "",
    isLoaded: "",
    alsoInterestedProducts: null,
   
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo(0, 0);
      axios
        .get(`http://localhost:5000/products/${this.props.match.params.id}`)
        .then((res) => {
          let alsoInterestedProducts = res.data;
          let product;
          alsoInterestedProducts = alsoInterestedProducts.filter((el) => {
            if (el._id !== this.props.match.params.id) {
              return el;
            } else {
              product = el;
            }
          });

          this.setState({
            product: product,
            alsoInterestedProducts: alsoInterestedProducts,
            isLoaded: true,
          });
        })

        .catch(error => this.setState({isLoaded:false}))
    }
  }

 
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:5000/products/${this.props.match.params.id}`)
      .then((res) => {
       
        let alsoInterestedProducts = res.data;
        let product;
        alsoInterestedProducts = alsoInterestedProducts.filter((el) => {
          if (el._id !== this.props.match.params.id) {
            return el;
          } else {
            product = el;
          }
        });

        this.setState({
          product: product,
          alsoInterestedProducts: alsoInterestedProducts,
          isLoaded: true,
        });
      }
      )

      .catch(error => this.setState({isLoaded:false}))
        
       
      

      

  }

  RequestInfo = (event) => {
    let contactUsCollapse = document.querySelector("#contactUs-collapse");
    let contactUsHeader = document.querySelector("#contactUs .card-header");
    let contactUs = document.querySelector("#contactUs");

    if (contactUsCollapse.className === "collapse") {
      contactUs.scrollIntoView({
        behavior: "smooth",
      });

      contactUsHeader.click();
    }
  };

 
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.message]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post(`http://localhost:5000/partners/submit`, { user })
      .then((res) => {
        let successMessage = document.querySelector("#success");
        let displaySuccess = () => {
          successMessage.style.display = "block";
        };
        let hideSuccess = () => {
          successMessage.style.display = "none";
          window.location.replace(`http://localhost:3000/${this.props.match.params.id}`);
        };
        setTimeout(displaySuccess, 600);
        setTimeout(hideSuccess,2500);
       
       
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
       
       let errorMessage = document.querySelector("#error");
       let displayError = () => {
        errorMessage.style.display = "block";
      };
      let hideError = () => {
        errorMessage.style.display = "none";
        window.location.reload(false);
      };
      setTimeout(displayError, 600);
      setTimeout(hideError, 2500);
      window.location.replace(`http://localhost:3000/${this.props.match.params.id}`);
        console.log(error);
      });
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  setActiveFirstCarouselIndicator = () => {
    let liFirst = document.querySelector("#indicator0");

    liFirst.setAttribute("className", "active");
  };

  changePhoto(e) {
    let idPhoto = e.target.id;
    const photo = document.querySelector("#carousel-item" + idPhoto);
    photo.setAttribute("class", "carousel-item active");
  }

  render() {
    if (
      this.state.isLoaded === "" &&
      typeof this.state.product.images === "undefined" && 
      typeof this.state.product.certifications === "undefined" &&
      this.state.alsoInterestedProducts === null
    ) {
      return <div />;
    }else if( this.state.isLoaded === false ){return <NotFound />}else{

    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb dark="true" color="blue lighten-4">
              <MDBLink to="/">
                Home <span style={{ paddingLeft: "1rem" }}>/</span>
              </MDBLink>
              <MDBLink to={`/${this.state.product.solution}/products`}>
                {this.state.product.solution}
                <span style={{ paddingLeft: "1rem" }}>/</span>
              </MDBLink>
              <MDBLink to="#" style={{ color: "#000", cursor: "default" }}>
                <span>{this.state.product.title}</span>
              </MDBLink>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCarousel
              activeItem={1}
              length={this.state.product.images.length}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                {this.state.product.images.map((image, index) => (
                  <MDBCarouselItem key={index + 1} itemId={index + 1}>
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={"photo" + index}
                      />
                      <MDBMask overlay="black-light" />
                    </MDBView>
                  </MDBCarouselItem>
                ))}
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBCol>
          <MDBCol lg="4">
            <MDBJumbotron style={{ padding: 0 }}>
              <MDBCol
                className="text-white text-center py-3 px-3 my-0"
                style={{
                  height: "100%",
                  backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                }}
              >
                <MDBCol justify-content-md-center="true" className="py-5">
                  <MDBCardTitle className="h1-responsive pt-5 mx-3 mt-5 mb-3 font-bold">
                    {this.state.product.title}
                  </MDBCardTitle>
                  <div className="mx-5 mb-3" id="col2-category">
                    <p>{this.state.product.solution}</p>
                  </div>
                  <div className="mx-4 mb-5" id="col2-overview">
                    <p>{this.state.product.description}</p>
                  </div>
                  <div className="mx-4 mb-5 info">
                    <a href="#contactUs" onClick={this.RequestInfo}>
                      <ion-icon name="information-outline"></ion-icon>
                      Request Information
                    </a>
                  </div>
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
                    <HtmlComponent
                      htmlText={decodeHTML(this.state.product.generalDetails)}
                    />
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
                        {this.state.product.certifications.map(
                          (certificate, index) => (
                            <MDBCol key={index + 1} sm="12" md="6">
                              <Certification
                                key={index}
                                certificate={certificate}
                              />
                            </MDBCol>
                          )
                        )}
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
                  <Card.Body></Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card id="contactUs">
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Contact us
                </Accordion.Toggle>
                <Accordion.Collapse id="contactUs-collapse" eventKey="3">
                  <Card.Body>
                    <form action="post" onSubmit={this.handleSubmit}>
                      <div className="grey-text">
                        <MDBInput
                          label="Your name"
                          icon="user"
                          name="name"
                          group
                          type="text"
                          onChange={this.handleChange}
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Your email"
                          icon="envelope"
                          name="email"
                          group
                          type="email"
                          onChange={this.handleChange}
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          label="Your message"
                          icon="pencil"
                          name="message"
                          type="textarea"
                          rows="2"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div id="completion-message">
                        <div style={{ display: "none" }} id="success">
                          <ion-icon
                            id="success-icon"
                            name="checkmark-circle-sharp"
                          ></ion-icon>
                          <span>Email Sent!</span>
                        </div>
                        <div style={{ display: "none" }} id="error">
                          <ion-icon
                            id="error-icon"
                            name="close-circle"
                          ></ion-icon>
                          <span>There was an error.Please try again</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <MDBBtn
                         
                          id="send-message"
                          type="submit"
                          name="mail-outline"
                          outline
                          color="secondary"
                        >
                          Order Now
                        </MDBBtn>
                      </div>
                    </form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </MDBCol>
          <MDBCol className="my-2" lg="4">
            <div>
              <h2 id="alsoInterestedHeader"> You Might also Interested</h2>
            </div>
            <MDBCarousel
              id="alsoInterested"
              activeItem={1}
              length={this.state.alsoInterestedProducts.length}
              showControls={false}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                {this.state.alsoInterestedProducts.map((product, index) => (
                  <Link key={index + 1} to={{ pathname: `/${product._id}` }}>
                    <MDBCarouselItem key={index + 1} itemId={index + 1}>
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={product.images[0]}
                          alt={"photo" + index}
                        />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                    </MDBCarouselItem>
                  </Link>
                ))}
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }}
}

export default ProductPage;
