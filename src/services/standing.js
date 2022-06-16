import axios from "axios";

class StandingDataService {
  getStanding() {
    return axios.get("http://localhost:5000/standing");
  }
  createNewClubToStanding(clubId) {
    return axios.post("http://localhost:5000/standing", {
      clubId: clubId,
    });
  }
  updateStandingAfterMatch(club1Id, club2Id, club1Goal, club2Goal) {
    return axios.post("http://localhost:5000/standing/update-standing", {
      club1Id,
      club2Id,
      club1Goal,
      club2Goal,
    });
  }
}

export default new StandingDataService();
