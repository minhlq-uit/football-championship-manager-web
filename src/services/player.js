import axios from "axios";

class PlayerDataService {
  createNewPlayer(name, birth, type, clubId) {
    return axios.post("http://localhost:5000/player", {
      playerName: name,
      dayOfBirth: birth,
      nationality: type,
      clubId,
    });
  }
  getPlayerByClubId(clubId) {
    return axios.get(`http://localhost:5000/player/${clubId}`);
  }
  getPlayerById(playerId) {
    return axios.get(`http://localhost:5000/player/details/${playerId}`);
  }
  getAllPlayer() {
    return axios.get('http://localhost:5000/player');
  }
}

export default new PlayerDataService();
