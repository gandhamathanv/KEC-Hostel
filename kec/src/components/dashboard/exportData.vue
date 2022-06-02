<template>
  <div class="container">
    <div>
      <div class="buttons">
        <export-excel
          class="submit"
          :data="json_data"
          :fields="json_fields"
          worksheet="My Worksheet"
          name="filename.xls"
        >
          Download Excel (you can customize this with html code!)
        </export-excel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exportData",
  data() {
    return {
      json_fields: {
        "Name": name,
        "Roll Number":rollnumber,
        "Class": class,
        "Year": year,
        "Department":department,
        "DOB": DOB,
        "Blood Group": bloodGroup,
        "hostel Name": hostelName,
        "Room Number": roomNumber,
        "Gender": gender,
        "Phone Number": phoneNumber,
        "Whatsapp Number":whatsappNumber ,
        "Telegram Number": telegramNumber,
        "College Mail ID": collegeMailID,
        "Personal Mail ID": personalMailID,
        "Aadhar Number":aadharNumber ,
        "Father Name":fatherName ,
        "Father Mobile Number":fatherMobileNumber ,
        "Father Occupation":fatherOccupation ,
        "Mother Name":motherName,
        "Mother Mobile Number":motherMobileNumber,
        "Mother Occupation":MotherOccupation ,
        "Address":address ,
        "District":district ,
         "State":state,
        "Local Guardian":localGuardian ,
        "Local Guardian Phone Number":localGuardianPhoneNumber,
        "Account Number":bankName ,
        "Bank Name":accountNumber ,
        "Branch": branch,
          "IFSC Code": IFSCcode,
            "Date Of Entry": dateOfEntry,
            "Date Of Vacation": dateOfVacation,

        // Telephone: "phone.mobile",
        // "Telephone 2": {
        //   field: "phone.landline",
        //   callback: (value) => {
        //     return `Landline Phone - ${value}`;
        //   },
        // },
      },
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010",
          },
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244",
          },
        },
      ],
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
  methods: {},
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
