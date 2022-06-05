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
  getBookingList() {
    return Api().get("getBookingList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getHostelList() {
    return Api().get("getHostelList", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },

  getRoomsList(credentials) {
    return Api().get("getRoomsList/" + credentials.hostelName, {
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
  getBooking(credentials) {
    return Api().get("getBookingInfo/" + credentials.rollnumber, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getRooms(credentials) {
    return Api().get(
      "getRoomInfo/" + credentials.hostelName + "/" + credentials.roomNumber,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  },
  getHostel(credentials) {
    return Api().get("getHostelInfo/" + credentials.hostelName, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};
