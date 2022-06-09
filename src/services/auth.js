import api from "./api";

export default class Auth {
  login(fetchData) {
    return api.post("/users", fetchData);
  }
}
