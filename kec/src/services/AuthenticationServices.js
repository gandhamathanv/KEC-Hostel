/* eslint-disable */
import Api from "@/services/api";

export default {
    register(Credentials) {
        return Api().post("register", Credentials);
    },

    login(Credentials) {
        return Api().post("login", Credentials);
    },
    staffLogin(Credentials) {
        return Api().post("staffLogin", Credentials);
    },
};