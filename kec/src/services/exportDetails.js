/* eslint-disable */
import Api from "@/services/api";
export default {
  StudentData() {
    return Api().get("/export/StudentData", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  StaffData() {
    return Api().get("/export/StaffData", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  BookingData() {
    return Api().get("/export/BookingData", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  RoomsData() {
    return Api().get("/export/RoomsData", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};
