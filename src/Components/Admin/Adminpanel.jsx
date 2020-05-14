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