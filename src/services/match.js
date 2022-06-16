import axios from "axios";

class MatchDataService {
  createNewMatch(matchName, timeStart, date, stadiumId) {
    return axios.post("http://localhost:5000/match/create", {
      matchName,
      timeStart,
      date,
      stadiumId
    });
  }
  getMatchByMatchName(matchName) {
    return axios.get(`http://localhost:5000/match/by-name/${matchName}`);
  }
}

export default new MatchDataService();
