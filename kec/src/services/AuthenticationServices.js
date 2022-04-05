/* eslint-disable */
import Api from "@/services/api";

export default {
    register(Credentials) {
        return Api().post("register", Credentials);
    },

    studentLogin(Credentials) {
        return Api().post("studentLogin", Credentials);
    },
    staffLogin(Credentials) {
        return Api().post("staffLogin", Credentials);
    },
    changePassword(Credentials) {
        return Api().post("changePassword", Credentials);
    },
};