import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
function HtmlComponent(props){
  
    const html = props.htmlText;
    return <div>{ ReactHtmlParser(html) }</div>;
  
}

export default HtmlComponent;