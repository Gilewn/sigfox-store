import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { fetchUtils, Admin, Resource,EditGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { SolutionList, SolutionEdit,SolutionCreate } from "./solutions";
import authProvider from "./authProvider";
import MyLogoutButton from "../Admin/MylogoutButton";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const accessToken = localStorage.getItem("accessToken");

  options.headers.set("Authorization", `Bearer ${accessToken}`);

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "http://localhost:5000/admins",
  httpClient
);

const AdminPanel = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    logoutButton={MyLogoutButton}
  >
    <Resource name="solutions" list={SolutionList} edit={SolutionEdit} create = {SolutionCreate} />
  </Admin>
);

export default AdminPanel;
