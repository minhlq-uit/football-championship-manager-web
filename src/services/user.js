import axios from "axios";

class UserDataService {
  login(email, password) {
    return axios.post(
      "http://localhost:5000/user/sign-in",
      {
        email: email,
        password: password,
      }
    );
  }
  registration(email, password) {
    return axios.post(
      "http://localhost:5000/user",
      {
        email,
        password,
      },
    );
  }
  logout() {
    return axios.get("/api/v2/logout");
  }
}

export default new UserDataService();
