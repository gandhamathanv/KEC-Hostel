/* eslint-disable */
import Api from "@/services/api";

export default {
    getDash(token) {
        return Api().get("getStaffDash", {
            headers: {
                Authorization: "Bearer " + token, //the token is a variable which holds the token
            },
        });
    },
};