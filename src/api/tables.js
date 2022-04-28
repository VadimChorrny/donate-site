import axios from "axios";
import { SERVER_URL } from "../constants/url";

const URL = `${SERVER_URL}/Table`;

export default class tableService {
    static createTable(model) {
        console.log(model);
        return axios.post(URL, model);
    }
}
