/* eslint-disable */
import Api from "@/services/api";
export default {
  StudentData() {
    return Api().get("/export/StudentData");
  },
  StaffData() {
    return Api().get("/export/StaffData");
  },
  BookingData() {
    return Api().get("/export/BookingData");
  },
  RoomsData() {
    return Api().get("/export/RoomsData");
  },
};
