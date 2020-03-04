import React from 'react';
import HtmlComponent from '../HtmlComponent/HtmlComponent'

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

function Certification(props){
return <div className='certification-container'>
<div className='certification-title'>{props.certificate.title}</div>
        <div className='certification-image'><img src={props.certificate.image} alt=""/></div>
        <div className='certification-descriprion'>{props.certificate.class} <br/><br/>

        <HtmlComponent htmlText={decodeHTML(props.certificate.description)}/>
</div>
    </div>
}

export default Certification;
