import axios from "axios";

class ClubDataService {
  getAllClub() {
    return axios.get("http://localhost:5000/club");
  }
  createNewClub(name, stadiumId) {
    return axios.post("http://localhost:5000/club", {
      fullName: name,
      stadiumId: stadiumId,
    });
  }
}

export default new ClubDataService();
