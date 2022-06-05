/* eslint-disable */
import Api from "@/services/api";
const token = localStorage.getItem("jwt");
export default {
  getHostels(credentials) {
    console.log(credentials);
    return Api().post("getHostels", Credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getRooms(credentials) {
    console.log(credentials);
    return Api().post("getRooms", Credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getMenu(credentials) {
    console.log(credentials);
    return Api().post("getMenu", {
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
    return Api().post("getPermissions", Credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  setPermissions(credentials) {
    return Api().patch("setPermissions", Credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  closePermissions(credentials) {
    return Api().patch("closePermissions", Credentials, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};
