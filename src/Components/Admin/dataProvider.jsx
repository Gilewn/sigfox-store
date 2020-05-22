import { fetchUtils, Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const accessToken = localStorage.getItem("accessToken");

  options.headers.set("Authorization", `Bearer ${accessToken}`);

  return fetchUtils.fetchJson(url, options);
};

 

const dataProvider = {
  getList:    (resource, params) => {
    const request = new Request(
      `http://localhost:5000/admins/solutions`,
      {
        method: "POST",
        
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    );
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getOne:     (resource, params) => Promise,
  getMany:    (resource, params) => Promise,
  getManyReference: (resource, params) => Promise,
  create:     (resource, params) => Promise,
  update:     (resource, params) => Promise,
  updateMany: (resource, params) => Promise,
  delete:     (resource, params) => Promise,
  deleteMany: (resource, params) => Promise,
}

/*const s = (solutionId, solutionTitle, solutionImage) => {
  const request = new Request(
    `http://localhost:5000/admins/UpdateSolution/${solutionId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        new_title: solutionTitle,
        new_image: solutionImage,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  );
  return fetch(request)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};*/

export default dataProvider;
