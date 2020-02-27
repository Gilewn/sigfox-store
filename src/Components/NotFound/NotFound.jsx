import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../NotFound/404-page-large.png';



class NotFound extends React.Component{
    render(){
        return <div>
         
            <Link to="/">
            <img src={PageNotFound} alt="error" />
            <p style={{textAlign:"center" }}>
            </p>
            </Link>
          
          </div>
    }
}
export default NotFound;