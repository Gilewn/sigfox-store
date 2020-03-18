import React from 'react';
import HtmlComponent from '../HtmlComponent/HtmlComponent'
import Certification from '../Certification/Certification'

var decodeHTML = function (html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};

export default class ColumnOne extends React.Component  {

    

     changePhoto(e) {
        const photo = document.querySelector("#main-photo");
        photo.src = e.target.src;
    }
render(){
    return <div className="col1">
        <div className="tabs">
            <div><a href="#general-text">General</a>
                <a href="#certification">Certification</a>
                <a href="#technical-details">Technical</a>
            </div>
        </div>
        <div className='image'>
            <div className="arrows"> <ion-icon id='left-arrow' name="chevron-back-outline"></ion-icon></div>
            <img id='main-photo' src={this.props.album[0]} alt="photo" />
            <div className="arrows2"> <ion-icon id='right-arrow' name="chevron-forward-outline"></ion-icon></div>

        </div>

        <div className="card-postal">
            {this.props.album.map((image, index) => <img onClick={this.changePhoto} key={index} src={image} alt={'photo' + index} />)}


        </div>
        <div id="general-text" className='general'>

            <HtmlComponent htmlText={decodeHTML(this.props.product.generalDetails)} />

        </div>

        <div id='certification' className="certification-header">
            <a>Certification</a>
        </div>
        <div className="certification-body">
            {this.props.certifications.map((certificate, index) => <Certification key={index} certificate={certificate} />)}
        </div>

        <div id='technical-details' className='technical-details-header' >
            <a>Technical Details</a>
        </div>
        <div className='technical-details-body'>
            <div className='technical-details-col1'>
                <div>Product casing</div>
                <div>Sigfox Connectivity</div>
                <div>Product electrical <br /> characteristics</div>
                <div>Embedded Software</div>
                <div>External antenna</div>
            </div>
            <div className='technical-details-col2'>
                <div>Dimensions (in mm): <br />Weight: </div>
                <div>RF:</div>
                <div>Power Supply: <br />Power Consumption:</div>
                <div>SDK:</div>
                <div>Available</div>
            </div>
        </div>

        <div className='also-interested-in'>

            <h2>You might also be interested in these products</h2>

        </div>

    </div>

}
}

