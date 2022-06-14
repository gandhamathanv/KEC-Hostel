/* eslint-disable */
import Api from "@/services/api";
const token = localStorage.getItem("jwt");
export default {
    StudentRegister(Credentials) {
        return Api().post("StudentDataRegister", Credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    StaffRegister(Credentials) {
        return Api().post("StaffDataRegister", Credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },

    studentLogin(Credentials) {
        return Api().post("studentLogin", Credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    staffLogin(Credentials) {
        return Api().post("staffLogin", Credentials, {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    changePassword(Credentials) {
        return Api().post("changePassword", Credentials, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
    getData(token) {
        return Api().get("getData", {
            //   withCredentials: true,
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    },
};