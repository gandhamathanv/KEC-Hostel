/* eslint-disable */
import Api from "@/services/api";

export default {
  StudentRegister(Credentials) {
    return Api().post("StudentDataRegister", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
  StaffRegister(Credentials) {
    return Api().post("StaffDataRegister", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },

  studentLogin(Credentials) {
    return Api().post("studentLogin", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
  staffLogin(Credentials) {
    return Api().post("staffLogin", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
  changePassword(Credentials) {
    return Api().post("changePassword", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
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
