import axios from "axios";

class API {
  baseUrl = "";

  constructor() {
    this.baseUrl = "https://apibeta.centralapp.com/api/v2/static";
  }

  getHeaders() {
    const token = window.localStorage.getItem("token");
    if (token) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }
    return {};
  }

  get(endpoint) {
    return axios({
      method: "get",
      url: `${this.baseUrl}/${endpoint}`,
      headers: this.getHeaders(),
    });
  }
}

export default new API();
