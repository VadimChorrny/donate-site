import axios from "axios";
import { SERVER_URL } from "../constants/url";
axios.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const URL = `${SERVER_URL}/Table`;

export default class tableService {
    static createTable(model) {
        return axios.post(URL + "/Create", model);
    }

    static getTableById(id) {
        return axios.get(URL + "/" + id);
    }
}
