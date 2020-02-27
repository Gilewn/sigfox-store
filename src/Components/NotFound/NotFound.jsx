import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../NotFound/404-page-large.png';

import classes from './NotFound.css';



class NotFound extends React.Component{
    render(){
        return <div className={classes.NotFound}>
         
            <Link to="/">
            <img src={PageNotFound} alt="error" />
            </Link>
          
          </div>
    }
}
export default NotFound;