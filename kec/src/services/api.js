/* eslint-disable */
import axios from "axios";

export default () => {
    return axios.create({
        baseURL: `http://192.168.137.1:8881/`,
    });
};