/* eslint-disable */
import Api from "@/services/api";
export default {
    getRooms(credentials) {
        // console.log(credentials);
        return Api().get("getRooms", credentials);
    },
};