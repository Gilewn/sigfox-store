import React from 'react';



function ColumnOne(props){
   
    function changePhoto(e){
        const photo=document.querySelector("#main-photo");
        photo.src=e.target.src;
      }
    
    return   <div className="col1">
        <div className="tabs">
        <div><a href="#general-text">General</a>
             <a href="#certification">Certification</a>
             <a href="#technical-details">Technical</a>
        </div>
        </div>
        <div className='image'>
        <div className="arrows"> <ion-icon id='left-arrow' name="chevron-back-outline"></ion-icon></div>
        <img id='main-photo' src={props.images}    alt="photo"/>
        <div className="arrows2"> <ion-icon id='right-arrow' name="chevron-forward-outline"></ion-icon></div>

        </div>
    
    <div className="card-postal">
    
       
        
    </div>
    <div id="general-text" className='general'>
        <p>
       <strong> Smilio A « Multiservices » </strong> is a system of 5 connected buttons that enable real-time interaction with your audiences.<br></br>  
       <br/>
<strong>Its design and features allow its integration in a wide range of use cases:  </strong>
<ul>
  <li> Collection of customer feedback “on the spot”, evaluation of clients/employees’ satisfaction </li>
  <li> Alerts, reports (dysfunctions, dissatisfaction, security, etc.)</li>
  <li> Triggering of any type of actions (on-demand services)</li>
  <li> Clocking after intervention, proof of presence</li>
   </ul>
   <br/>
<strong>Unique benefits</strong>
<ul>
<li> Dual mode Sigfox / LoRaWAN™ wireless technology. No Wi-Fi, 3G, or Ethernet. No infrastructure work required to install it. </li>
<li> Remote configuration via Downlink. </li>
<li> “Proof of Presence” Technology: integrated magnetic sensor for staff time-stamping. </li>
<li> Up to 6-years battery</li>
<li> Indoor or outdoor installation. </li>
<li> Robust and firmly secured (vertical or horizontal fixations). </li>
<li> Buttons without moving parts + antibacterial treatment = record hygiene and durability. </li>
<li> Inopportune voting filtration technology. </li>
<li> CE certification. Data and operations security. </li>
<li> Customization: number of buttons, colors, special treatments against bacteria, UV-light, scratches.</li> 
</ul>
<br/>
<strong>Technical specifications</strong>
<ul>
   <li>Material: antistatic and anti-UV ABS polymer</li>
  <li> Box color: white</li>
  <li>Dimensions: 100 x 100 x 45 mm</li>
  <li>Weight: 200 g without batteries</li>
  <li>3 LED lights for the confirmation of votes</li>
  <li>Battery types: 3,6 V AA Lithium Thionyle Chloride</li>
  <li>Hermetic (IP65) and resistant to extreme temperatures (-40°C to +60°C).</li>
  <li>Designed and made in France</li>
   </ul>
        </p>
    </div>
    
    <div id='certification'className="certification-header">
        <a>Certification</a>
    </div>
    <div className="certification-body">
        <div className='certification-container'>
            <div className='certification-title'>Sigfox Ready</div>
            <div className='certification-image'><img src="https://storage.sbg.cloud.ovh.net/v1/AUTH_669d7dfced0b44518cb186841d7cbd75/dev_medias/build/4059ai1jja2n6mj/jja2n6hh-Sigfox_Ready_Logo_RGB-cropped-cropped.jpg" alt="sigfox-ready"/></div>
            <div className='certification-descriprion'>Class 0 <br/><br/>

End Product Certificate <br/> P_0056_99E6_01 </div>
        </div>
        <div className='certification-ce'><img src="https://www.architas.gr/images/CE.png" alt="CE"/></div>
    </div>

    <div id='technical-details' className='technical-details-header' >
    <a>Technical Details</a>
    </div>
    <div className='technical-details-body'>
        <div className='technical-details-col1'>
            <div>Product casing</div>
            <div>Sigfox Connectivity</div>
            <div>Product electrical <br/> characteristics</div>
            <div>Embedded Software</div>
            <div>External antenna</div>
        </div>
        <div className='technical-details-col2'>
            <div>Dimensions (in mm): <br/>Weight: </div>
            <div>RF:</div>
            <div>Power Supply: <br/>Power Consumption:</div>
            <div>SDK:</div>
            <div>Available</div>
        </div>
    </div>

    <div className='also-interested-in'>

        <h2>You might also be interested in these products</h2>
       
    </div>

    </div>  
    
}
export default ColumnOne;