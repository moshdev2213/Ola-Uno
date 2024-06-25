import axios from "axios";
import BaseService from "./BaseService";

class BulbService {
  constructor() {
    BaseService.getBaseURL();
    this.TRIGGER_BULB_A = "triggerBulbA";
    this.TRIGGER_BULB_B = "triggerBulbB";
    this.GET_HTML = "get-html";
    this.GET_STATUS = "get-status";
    this.SAY_HELLO = "say-hello";
  }

  triggerBulbA() {
    return axios.get(this.TRIGGER_BULB_A);
  }

  triggerBulbB() {
    return axios.get(this.TRIGGER_BULB_B);
  }

  getHtml() {
    return axios.get(this.GET_HTML);
  }

  getStatus() {
    return axios.get(this.GET_STATUS);
  }

  sayHello() {
    return axios.get(this.SAY_HELLO);
  }
}

export default new BulbService();
