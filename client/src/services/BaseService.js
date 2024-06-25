import axios from "axios";

class BaseService{
    constructor() {
        axios.defaults.baseURL = "http://localhost:8079/"
    }
    getBaseURL() {
        return this.baseURL;
    }
}
export default BaseService = new BaseService()