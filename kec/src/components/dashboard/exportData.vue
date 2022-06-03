<template>
  <div class="container">
    <div>
      <div class="buttons">
        <!-- :data="json_data" -->
        <export-excel
          class="submit"
          :fetch="StudentGetData"
          :fields="json_student_fields"
          worksheet="My Worksheet"
          name="filename.xls"
          @click="getData"
        >
          Download Excel (you can customize this with html code!)
        </export-excel>
        <export-excel
          class="submit"
          :fetch="StaffGetData"
          :fields="json_staff_fields"
          worksheet="My Worksheet"
          name="filename.xls"
          @click="getData"
        >
          Download Excel (you can customize this with html code!)
        </export-excel>
        <export-excel
          class="submit"
          :fetch="BookingGetData"
          :fields="json_booking_fields"
          worksheet="My Worksheet"
          name="filename.xls"
          @click="getData"
        >
          Download Excel (you can customize this with html code!)
        </export-excel>
        <export-excel
          class="submit"
          :fetch="RoomsGetData"
          :fields="json_rooms_field"
          worksheet="My Worksheet"
          name="filename.xls"
          @click="getData"
        >
          Download Excel (you can customize this with html code!)
        </export-excel>
      </div>
    </div>
  </div>
</template>

<script>
import exportDetails from "@/services/exportDetails";
export default {
  name: "exportData",
  data() {
    return {
      json_student_fields: {
        Name: "name",
        "Roll Number": "rollnumber",
        Class: "class",
        Year: "year",
        Department: "department",
        DOB: "DOB",
        "Blood Group": "bloodGroup",
        "hostel Name": "hostelName",
        "Room Number": "roomNumber",
        Gender: "gender",
        "Phone Number": "phoneNumber",
        "Whatsapp Number": "whatsappNumber",
        "Telegram Number": "telegramNumber",
        "College Mail ID": "collegeMailID",
        "Personal Mail ID": "personalMailID",
        "Aadhar Number": "aadharNumber",
        "Father Name": "fatherName",
        "Father Mobile Number": "fatherMobileNumber",
        "Father Occupation": "fatherOccupation",
        "Mother Name": "motherName",
        "Mother Mobile Number": "motherMobileNumber",
        "Mother Occupation": "MotherOccupation",
        Address: "address",
        District: "district",
        State: "state",
        "Local Guardian": "localGuardian",
        "Local Guardian Phone Number": "localGuardianPhoneNumber",
        "Account Number": "bankName",
        "Bank Name": "accountNumber",
        Branch: "branch",
        "IFSC Code": "IFSCcode",
        "Date Of Entry": "dateOfEntry",
        "Date Of Vacation": "dateOfVacation",
      },
      json_staff_field: {
        Name: "name",
        "Staff ID": "staffID",
        Designation: "designation",

        "Hostel Name": "hostelName",
        "Room Number": "roomNumber",
        "Hostel Responsibility": "hostelResponsibility",
        Department: "department",
        Gender: "gender",
        "Blood Group": "bloodGroup",

        "Phone Number": "phoneNumber",
        "Whatsapp Number": "whatsappNumber",
        "College Mail ID": "collegeMailID",
        "Personal Mail ID": "personalMailID",
        "Aadhar Number": "aadharNumber",
      },
      json_booking_field: {
        "Roll Number": "rollnumber",
        "Student Name": "studentName",

        Department: "department",
        Year: "year",
        "Amount paid": "amountpaid",
        "Booked Date": "bookedDate",
      },
      json_rooms_field: {
        "Room Number": "roomNumber",

        Capacity: "capacity",
        Availability: "availability",
        Floor: "floor",
        "Attached Bathroom": "attachedBathroom",
        "Hostel Name": "hostelName",
      },
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
    };
  },
  methods: {
    async StudentGetData() {
      const { data } = await exportDetails.StudentData();
      return data.data;
    },
    async StaffGetData() {
      const { data } = await exportDetails.StaffData();
      return data.data;
    },
    async BookingGetData() {
      const { data } = await exportDetails.BookingData();
      return data.data;
    },
    async RoomsGetData() {
      const { data } = await exportDetails.RoomsData();
      return data.data;
    },
  },
};
</script>

<style scoped>
.submit {
  /* display: flex; */
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 200px;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  margin: 25px 0;
  cursor: pointer;

  background-color: #e36f11;
  transition: all 0.3s linear;
}
</style>
