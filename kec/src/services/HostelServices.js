/* eslint-disable */
import Api from "@/services/api";
const token = localStorage.getItem("jwt");
export default {
    getHostels(credentials) {
        console.log(credentials);
        return Api().post("getHostels", credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    getRooms(credentials) {
        console.log(credentials);
        return Api().post("getRooms", credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    getMenu(credentials) {
        console.log(credentials);
        return Api().post("getMenu", credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    getNoti() {
        return Api().get("getNotification", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    getPermissions(credentials) {
        return Api().post("getPermissions", credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    setPermissions(credentials) {
        return Api().patch("setPermissions", credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    closePermissions(credentials) {
        return Api().patch("closePermissions", credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    bookRoom(credentials) {
        console.log("readys");
        return Api().put("bookRoom", credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
};