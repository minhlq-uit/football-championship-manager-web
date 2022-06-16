import axios from "axios";

class GoalDataService {
//   getAllClub() {
//     return axios.get("http://localhost:5000/club");
//   }
  createNewGoal(typeGoal, goalTime, playerId, matchId) {
    return axios.post("http://localhost:5000/goal/create", {
        typeGoal,
        goalTime,
        playerId,
    });
  }
  getGoalByPlayerId(playerId) {
    return axios.get(`http://localhost:5000/goal/player-id/${playerId}`);
  }
}

export default new GoalDataService();
