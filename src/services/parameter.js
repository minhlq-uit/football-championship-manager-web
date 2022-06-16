import axios from "axios";

class PrameterService {
  getAllParameters() {
    return axios.get("http://localhost:5000/parameter");
  }
  getParameterById(parameterId) {
    return axios.get(`http://localhost:5000/parameter/parameterId=${parameterId}`);
  }
  updateParameter(parameterId, nameParameter, value) {
    return axios.put(`http://localhost:5000/parameter/update/parameterId=${parameterId}`, {
      nameParameter,
      value
    });
  }
}

export default new PrameterService();
