
import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils,Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {SolutionList,SolutionEdit} from './solutions';
import authProvider from './authProvider'
import MyLoginPage  from '../MyLoginPage/MyLoginPage'
import MyLogoutButton from '../Admin/MylogoutButton';


const httpClient = (url, options = {}) => {
    if (!options.headers) {

        options.headers = new Headers({ Accept: 'application/json' });
        
    }
    const accessToken= localStorage.getItem('accessToken');
    
    options.headers.set('Authorization', `Bearer ${accessToken}`);
    
    return fetchUtils.fetchJson(url, options);

};





const dataProvider = simpleRestProvider('http://localhost:5000/admins',httpClient);



const AdminPanel = () => <Admin  dataProvider={dataProvider} loginPage={MyLoginPage}  logoutButton={MyLogoutButton} authProvider={authProvider}>
    
       <Resource name="solutions" list={SolutionList}  edit={SolutionEdit} />
 </Admin>;

export default AdminPanel;
