/* eslint-disable */
import Api from "@/services/api";

export default {
    getDash(token) {
        console.log("hello");
        return Api().get("getStaffDash", {
            headers: {
                Authorization: "Bearer " + token, //the token is a variable which holds the token
            },
        });
    },
};