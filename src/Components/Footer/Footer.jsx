import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="unique-color" className="font-small pt-4">
            <MDBContainer fluid className="text-center">
                <MDBRow>
                    <MDBCol md="6" className="text-md-left pl-5">
                        <h5 className="title">Footer Header</h5>
                        <p>
                            Footer Content
                        </p>
                    </MDBCol>
                    <MDBCol md="6" className="text-md-right pr-5">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://sigfox.gr/">Sigfox.gr</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;