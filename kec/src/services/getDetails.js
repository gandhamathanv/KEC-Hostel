/* eslint-disable */
import Api from "@/services/api";
export default {
    getStudentList() {
        return Api().get("getStudentsList");
    },
    getStaff(credentials) {
        return Api().get("getStaffList");
    },
    getBooking(credentials) {
        return Api().get("getBookingList");
    },
    getHostel(credentials) {
        return Api().get("getHostelList");
    },

    getRooms(credentials) {
        return Api().get("getRoomsList");
    },
    getStudent(credentials) {
        console.log(credentials);
        return Api().get("getStudentInfo", credentials);
    },
};