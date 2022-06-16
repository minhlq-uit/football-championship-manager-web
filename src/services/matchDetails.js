import axios from "axios";

class MatchDetailsDataService {
    createNewMatchDetail(club1Goal, club2Goal, club1Id, club2Id, matchId ) {
    return axios.post("http://localhost:5000/match-detail/create", {
        club1Goal,
        club2Goal,
        club1Id,
        club2Id,
        matchId
    });
  }
  getMatchDetailById(matchId ) {
    return axios.get(`http://localhost:5000/match-detail/matchDetailId=${matchId}`);
  }
}

export default new MatchDetailsDataService();
