import axios from "axios";

const API_URL = "http://localhost:5000/admins/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          
          localStorage.setItem("admin", JSON.stringify(response.data));
          console.log(localStorage  )
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("admin");
    console.log("logout")
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('admin'));;
  }
}

export default new AuthService();