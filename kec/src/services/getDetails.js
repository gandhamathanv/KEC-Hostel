/* eslint-disable */
import Api from "@/services/api";
const token = localStorage.getItem("jwt");
export default {
  getStudentList() {
    return Api().get("getStudentsList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getStaffList() {
    return Api().get("getStaffList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getBooking() {
    return Api().get("getBookingList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getHostel() {
    return Api().get("getHostelList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },

  getRooms() {
    return Api().get("getRoomsList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getStudent(credentials) {
    return Api().get("getStudentInfo/" + credentials.rollnumber, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getStaff(credentials) {
    return Api().get("getStaffInfo/" + credentials.staffID, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};
