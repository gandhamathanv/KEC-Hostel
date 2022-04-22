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
    getMenu(credentials) {
        console.log(credentials);
        return Api().post("getMenu", credentials);
    },
    getNoti() {
        return Api().get("getNotification");
    },
    getPermissions(credentials) {
        return Api().post("getPermissions", credentials);
    },
    setPermissions(credentials) {
        return Api().patch("setPermissions", credentials);
    },
    closePermissions(credentials) {
        return Api().patch("closePermissions", credentials);
    },
};