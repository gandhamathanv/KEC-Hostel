/* eslint-disable */
console.log("haii");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { sequelize } = require("./models");
// const sequel = require('./models');
const config = require("./config/config");
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

const data = () => {
  console.log(sequelize);
  const { models } = sequelize;
  console.log(models);
  models.foodmenu.bulkCreate([
    {
      day: "MONDAY",
      breakfast: "Idly,sambar,chuttny",
      lunch: "Veg biriyani,vadai,payasam",
      eveningSnacks: "sundal,cake",
      dinner: "poori,curd rice",
    },
    {
      day: "TUESDAY",
      breakfast: "Idly,sambar,chuttny",
      lunch: "Veg biriyani,vadai,payasam",
      eveningSnacks: "sundal,cake",
      dinner: "poori,curd rice",
    },
    {
      day: "WEDNESDAY",
      breakfast: "Idly,sambar,chuttny",
      lunch: "Veg biriyani,vadai,payasam",
      eveningSnacks: "sundal,cake",
      dinner: "poori,curd rice",
    },
    {
      day: "THURSDAY",
      breakfast: "Idly,sambar,chuttny",
      lunch: "Veg biriyani,vadai,payasam",
      eveningSnacks: "sundal,cake",
      dinner: "poori,curd rice",
    },
    {
      day: "FRIDAY",
      breakfast: "Idly,sambar,chuttny",
      lunch: "Veg biriyani,vadai,payasam",
      eveningSnacks: "sundal,cake",
      dinner: "poori,curd rice",
    },
    {
      day: "SATURDAY",
      breakfast: "Idly,sambar,chuttny",
      lunch: "Veg biriyani,vadai,payasam",
      eveningSnacks: "sundal,cake",
      dinner: "poori,curd rice",
    },
    {
      day: "SUNDAY",
      breakfast: "Idly,sambar,chuttny",
      lunch: "Veg biriyani,vadai,payasam",
      eveningSnacks: "sundal,cake",
      dinner: "poori,curd rice",
    },
  ]);
  models.hostelfor.bulkCreate([
    {
      hostelName: "AMARAVATHI",
      gender: "FEMALE",
      year: 2,
    },
    {
      hostelName: "KAVERI",
      gender: "FEMALE",
      year: 1,
    },
    {
      hostelName: "KAVERI",
      gender: "FEMALE",
      year: 3,
    },
    {
      hostelName: "BHAVANI",
      gender: "FEMALE",
      year: 4,
    },
    {
      hostelName: "DHEERAN",
      gender: "MALE",
      year: 1,
    },
    {
      hostelName: "VALLUVAR",
      gender: "MALE",
      year: 3,
    },
    {
      hostelName: "PONNAR",
      gender: "MALE",
      year: 1,
    },
    {
      hostelName: "SANKAR",
      gender: "MALE",
      year: 4,
    },
    {
      hostelName: "ELANGO",
      gender: "MALE",
      year: 2,
    },
    {
      hostelName: "KAMBAN",
      gender: "MALE",
      year: 4,
    },
    {
      hostelName: "BHARATHI",
      gender: "MALE",
      year: 2,
    },
  ]);
  models.hostelinfo.bulkCreate([
    {
      hostelName: "AMARAVATHI",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab,tv room",
    },
    {
      hostelName: "KAVERI",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab,beauty parlour",
    },
    {
      hostelName: "BHAVANI",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab,tv room",
    },
    {
      hostelName: "VALLUVAR",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab,tv room",
    },
    {
      hostelName: "PONNAR",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab",
    },
    {
      hostelName: "ELANGO",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab,tv room",
    },
    {
      hostelName: "KAMBAN",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab",
    },
    {
      hostelName: "BHARATHI",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab",
    },
    {
      hostelName: "DHEERAN",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab,tv room",
    },
    {
      hostelName: "SANKAR",
      floor: 4,
      rooms: 120,
      capacity: 360,
      availability: 360,
      facility: "gym,indoor games,computer lab,tv room",
    },
  ]);
  models.hostelpermission.bulkCreate([
    {
      hostelName: "AMARAVATHI",
    },
    {
      hostelName: "BHAVANI",
    },
    {
      hostelName: "KAVERI",
    },
    {
      hostelName: "PONNAR",
    },
    {
      hostelName: "SANKAR",
    },
    {
      hostelName: "VALLUVAR",
    },
    {
      hostelName: "DHEERAN",
    },
    {
      hostelName: "KAMBAN",
    },
    {
      hostelName: "ELANGO",
    },
    {
      hostelName: "BHARATHI",
    },
  ]);
  models.hostelrooms.bulkCreate([
    {
      roomNumber: "AMR001",
      capacity: 3,
      availability: 3,
      floor: 0,
      attachedBathroom: true,
    },
  ]);
  models.notification.bulkCreate([
    {
      by: "PRINCIPAL",
      message: "regarding holiday",
      date: "",
    },
    {
      by: "ASSOCIATE WARDEN",
      message: "regarding holiday",
      date: "",
    },
    {
      by: "WARDEN",
      message: "regarding holiday",
      date: "",
    },
    {
      by: "DEPUTY WARDEN",
      message: "regarding holiday",
      date: "",
    },
  ]);
  models.permission.bulkCreate([
    {
      responsibility: "ASSISTANT WARDEN",
      level: 2,
    },
    {
      responsibility: "DEPUTY WARDEN",
      level: 1,
    },
    {
      responsibility: "ASSOCIATE WARDEN",
      bookingPermission: true,
      changePermissions: true,
      studentRegistration: true,
      level: 1,
    },
    {
      responsibility: "WARDEN",
      level: 2,
    },
    {
      responsibility: "PRINCIPAL",
      bookingPermission: true,
      changePermissions: true,
      studentRegistration: true,
      level: 1,
    },
  ]);
  models.staffInfo.bulkCreate([
    {
      name: "Jeevitha",
      staffID: "34567",
      designation: "staff",
      hostelResponsibility: "DEPUTY WARDEN",
      department: "cse",
      gender: "Female",
      bloodGroup: "O+ve",
      phoneNumber: 6369678903,
      whatsappNumber: 9790234234,
      collegeMailID: "jeevithacse@kongu.edu",
      personalMailID: "jeevitha@gmail.com",
      aadharNumber: 123456785674,
    },
    {
      name: "Kanimozhili Selvi",
      staffID: "37567",
      designation: "staff",
      hostelResponsibility: "WARDEN",
      department: "cse",
      gender: "Female",
      bloodGroup: "O+ve",
      phoneNumber: 6369678903,
      whatsappNumber: 9730234234,
      collegeMailID: "kanimozhiliselvicse@kongu.edu",
      personalMailID: "kanimozhiliselvi@gmail.com",
      aadharNumber: 123486785674,
    },
  ]);
  models.staffLogin.bulkCreate([
    {
      mailID: "jeevithacse@kongu.edu",
      password: "jeevitha",
    },
    {
      mailID: "kanimozhiliselvicse@kongu.edu",
      password: "selvi",
    },
  ]);
  models.studentInfo.bulkCreate([
    {
      name: "AANANDHENE",
      rollnumber: "20CSR003",
      class: "A",
      year: 2,
      department: "cse",
      DOB: "",
      bloodGroup: "O+ve",
      gender: "Female",
      phoneNumber: 6369675002,
      whatsappNumber: 6369675002,
      telegramNumber: 6369675002,
      collegeMailID: "aanandhenem.20cse@kongu.edu",
      personalMailID: "aanandhene@gmail.com",
      aadharNumber: 123456789012,
      fatherName: "Murugesan",
      fatherMobileNumber: "9790321321",
      fatherOccupation: "Business",
      motherName: "Rajeswari",
      motherMobileNumber: 9790317384,
      MotherOccupation: "Housewife",
      address: "No:1/3, near annai theatre stop , pasupathi nagare, pugalur",
      district: "Karur",
      state: "Tamil Nadu",
      localGaurdian: "Senthil",
      localGuardialPhoneNumber: 9790312321,
      accountNumber: 123456789012,
      bankName: "Sbi",
      branch: "Pugalur",
      IFSCcode: "C3457890",
    },
  ]);
};
require("./routes")(app);
sequelize
  .sync()
  // .then(() => data())

  .then(() => {
    app.listen(config.PORT || 3000);
    console.log(`server started on port ${config.PORT}`);
  });
