/* eslint-disable */
import Api from "@/services/api";

export default {
    getDash() {
        return Api().get("getStaffDash");
    },
};