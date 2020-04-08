import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter color="unique-color" className="font-small pt-4">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Sigfox Hellas</h5>
            <h6>Address</h6>
            <p>
              Andrea Syngrou Avenue 226,
              <br /> Kalithea ZIP: 176 72
              <br /> Attica,
              <br /> Greece
            </p>
            <h6>Contact Us</h6>
            <p>
              <i className="fa fa-fw fa-phone"></i>
              <a href="tel:+30 213 031 8290">+30 213 031 8290</a>
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Usefull Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/products">All Products</a>
              </li>
              <li className="list-unstyled">
                <a href="https://sigfox.gr/" target="_blank">
                  Sigfox Hellas
                </a>
              </li>
            </ul>
            <h5>Social</h5>
            <div className="Footer-Social">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://sigfox.gr/">Sigfox.gr</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
