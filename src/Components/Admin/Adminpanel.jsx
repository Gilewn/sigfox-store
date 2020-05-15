<<<<<<< HEAD
import React from 'react';

import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser } from 'react-admin';

const dataProvider = jsonServerProvider('http://localhost:5000');

const Adminpanel = () => (
        <Admin dataProvider={dataProvider}>
           <Resource name="products" list={ListGuesser} />
        </Admin>
)
export default Adminpanel;
=======

import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils,Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {SolutionList,SolutionEdit} from './solutions';
import authProvider from './authProvider'
import MyLoginPage  from '../MyLoginPage/MyLoginPage'

const httpClient = (url, options = {}) => {
    if (!options.headers) {

        options.headers = new Headers({ Accept: 'application/json' });
        console.log(options)
    }
    const accessToken= localStorage.getItem('accessToken');
    console.log(accessToken)
    options.headers.set('Authorization', `Bearer ${accessToken}`);
    console.log(options)
    return fetchUtils.fetchJson(url, options);

};





const dataProvider = simpleRestProvider('http://localhost:5000/admins',httpClient);



const AdminPanel = () => <Admin  dataProvider={dataProvider} loginPage={MyLoginPage} authProvider={authProvider} >
    
       <Resource name="solutions" list={SolutionList}  edit={SolutionEdit} />
 </Admin>;

export default AdminPanel;
>>>>>>> 5cdd47e1587b400c3d7688bb46bee771b6a22cbb
