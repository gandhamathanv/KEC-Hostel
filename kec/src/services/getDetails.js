/* eslint-disable */
import Api from "@/services/api";
const token = localStorage.getItem("jwt");
export default {
  getStudentList() {
    return Api().get("getStudentsList", {
      headers: {
        Authorization: "Bearer " + token,
      },
      Credentials,
    });
  },
  getStaffList(credentials) {
    return Api().get("getStaffList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getBooking(credentials) {
    return Api().get("getBookingList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getHostel(credentials) {
    return Api().get("getHostelList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },

  getRooms(credentials) {
    return Api().get("getRoomsList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getStudent(credentials) {
    console.log(credentials);
    return Api().get("getStudentInfo/" + credentials.rollnumber, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getStaff(credentials) {
    console.log(credentials);
    return Api().get("getStaffInfo/" + credentials.staffID, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};
