/* eslint-disable */
import axios from "axios";

export default () => {
    return axios.create({
        baseURL: `http://192.168.211.70:8881/`,
    });
};