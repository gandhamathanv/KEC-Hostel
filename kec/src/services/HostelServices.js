/* eslint-disable */
import Api from "@/services/api";
export default {
    getHostels(credentials) {
        console.log(credentials);
        return Api().post("getHostels", credentials);
    },
    getRooms(credentials) {
        console.log(credentials);
        return Api().post("getRooms", credentials);
    },
};