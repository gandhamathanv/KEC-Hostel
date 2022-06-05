/* eslint-disable */
import Api from "@/services/api";
export default {
  getHostels(credentials) {
    console.log(credentials);
    return Api().post("getHostels", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
  getRooms(credentials) {
    console.log(credentials);
    return Api().post("getRooms", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
  getMenu(credentials) {
    console.log(credentials);
    return Api().post("getMenu", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
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
    return Api().post("getPermissions", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
  setPermissions(credentials) {
    return Api().patch("setPermissions", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
  closePermissions(credentials) {
    return Api().patch("closePermissions", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
};
