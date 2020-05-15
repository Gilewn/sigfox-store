
import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils,Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json; charset=utf-8' });
        
    }
    // add your own headers here
   options.headers.set('X-Custom-Header', 'foobar');
   options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
   console.log(options.headers);
    return fetchUtils.fetchJson(url, options);
}


const dataProvider = simpleRestProvider('http://localhost:5000',fetchJson);

console.log(dataProvider);


const AdminPanel = () => <Admin dataProvider={dataProvider}>
        <Resource name="products" list={ListGuesser} />
 </Admin>;

export default AdminPanel;