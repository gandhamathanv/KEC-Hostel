/* eslint-disable */
import axios from "axios";

export default () => {
    return axios.create({
        baseURL: `http://10.1.18.57:8881/`,
    });
};
