import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { fetchUtils, Admin, Resource } from "react-admin";

import { SolutionList, SolutionEdit } from "./solutions";
import authProvider from "./authProvider";
import MyLogoutButton from "../Admin/MylogoutButton";
import dataProvider from "./dataProvider"




const AdminPanel = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider} 
    logoutButton={MyLogoutButton}
  >
    <Resource name="solutions" list={SolutionList} edit={SolutionEdit} />
  </Admin>
);

export default AdminPanel;
