import axios from "axios";

class StadiumDataService {
  getStadiumById(stadiumId) {
    return axios.get(`http://localhost:5000/stadium/${stadiumId}`);
  }
  createNewStadium(name) {
    return axios.post("http://localhost:5000/stadium", {
      name: name,
    });
  }
}

export default new StadiumDataService();
