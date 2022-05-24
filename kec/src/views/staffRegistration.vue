<template>
  <div class="body">
    <div class="container">
      <div class="registration-container">
        <header class="header">Registration Form</header>
        <form class="form" action="#">
          <div v-if="level == 1" class="form-first">
            <div class="details-personal">
              <span class="title">Staff Details</span>

              <div class="fields">
                <div class="input-field">
                  <label class="label">Full Name</label>
                  <input
                    v-model="data.name"
                    class="input"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Date of Birth</label>
                  <input
                    v-model="data.DOB"
                    class="input"
                    type="date"
                    placeholder="Enter your Date of Birth"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Gender</label>
                  <select class="input">
                    <option value="gender" disabled selected hidden>
                      Select your Gender
                    </option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHERS">Others</option>
                  </select>
                </div>

                <div class="input-field">
                  <label class="label">Designation</label>
                  <input
                    v-model="data.rollnumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Designation"
                    required
                  />
                </div>

                <div class="input-field">
                  <label class="label">Department</label>

                  <select class="input">
                    <option value="Department" disabled selected hidden>
                      Select your Department
                    </option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="MECH">MECH</option>
                    <option value="EEE">EEE</option>
                    <option value="EIE">EIE</option>
                    <option value="FT">FT</option>
                    <option value="CHEMICAL">CHE</option>
                    <option value="AUTO">AUTO</option>
                    <option value="NIL">NIL</option>
                  </select>
                </div>
                <div class="input-field">
                  <label class="label">Hostel Responsibility</label>
                  <select class="input">
                    >
                    <option
                      value="Hostel Responsibility"
                      disabled
                      selected
                      hidden
                    >
                      Select your Responsibility
                    </option>
                    <option value="CSE">Associate Warden</option>
                    <option value="ECE">Deputy Warden</option>
                    <option value="CIVIL">Warden</option>
                    <option value="MECH">Staff</option>
                  </select>
                </div>

                <div class="input-field">
                  <label class="label">Blood Group</label>
                  <select class="input">
                    <option value="gender" disabled selected hidden>
                      Select your Blood Group
                    </option>
                    <option value="A Positive">A Positive</option>
                    <option value="A Negative">A Negative</option>
                    <option value="AB Negative">AB Negative</option>
                    <option value="AB Positive">AB Positive</option>
                    <option value="B Negative">B Negative</option>
                    <option value="B Positive">B Positive</option>
                    <option value="O Positive">O Positive</option>
                  </select>
                </div>
                <div class="input-field">
                  <label class="label">Phone Number</label>
                  <input
                    v-model="data.phoneNumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Phone Number"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Whatsapp Number</label>
                  <input
                    v-model="data.whatsappNumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Whatsapp Number"
                    required
                  />
                </div>

                <div class="input-field">
                  <label class="label">Personal Mail ID</label>
                  <input
                    v-model="data.personalMailID"
                    class="input"
                    type="text"
                    placeholder="Enter your Mail ID"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">College Mail ID</label>
                  <input
                    v-model="data.collegeMailID"
                    class="input"
                    type="text"
                    placeholder="Enter your Kongu Mail ID"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Aadhar Number </label>
                  <input
                    v-model="data.aadharNumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Aadhar Number"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Address</label>
                  <input
                    v-model="data.address"
                    class="input"
                    type="text"
                    placeholder="Enter your Full Address"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">District</label>
                  <input
                    v-model="data.district"
                    class="input"
                    type="text"
                    placeholder="Enter your District"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">State</label>
                  <input
                    v-model="data.state"
                    class="input"
                    type="text"
                    placeholder="Enter your State"
                    required
                  />
                </div>
              </div>
              <div class="buttons">
                <button @click.prevent="submit()" class="submit">
                  <span class="submit">Submit </span>
                  <i class="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- <div v-else class="authentication-cointainer">
            <header class="header">Aunthecation form</header>
            <div class="registration-form">
              
              <h1 class="otph1">ENTER OTP</h1>
              <div class="userInput">
                <input
                  class="otpinput"
                  type="text"
                  id="ist"
                  maxlength="1"
                  onkeyup="clickEvent(this,'sec')"
                />
                <input
                  class="otpinput"
                  type="text"
                  id="sec"
                  maxlength="1"
                  onkeyup="clickEvent(this,'third')"
                />
                <input
                  class="otpinput"
                  type="text"
                  id="third"
                  maxlength="1"
                  onkeyup="clickEvent(this,'fourth')"
                />
                <input
                  class="otpinput"
                  type="text"
                  id="fourth"
                  maxlength="1"
                  onkeyup="clickEvent(this,'fifth')"
                />
                <input
                  class="otpinput"
                  type="text"
                  id="fifth"
                  maxlength="1"
                  onkeyup="clickEvent(this,'sixth')"
                />
                <input class="otpinput" type="text" id="fifth" maxlength="1" />
              </div>
              <button class="otpbtn">CONFIRM</button>
            </div>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationServices";

export default {
  name: "staffRegistration",
  data() {
    return {
      data: {
        name: "g",
        rollnumber: "",
        class: 2,
        year: 2,
        department: "",
        DOB: null,
        bloodGroup: "",
        gender: "",
        phoneNumber: 9878323973,
        whatsappNumber: 9789323973,
        telegramNumber: 9876543210,
        collegeMailID: "",
        personalMailID: "",
        aadharNumber: 424618765987,
        fatherName: "",
        fatherMobileNumber: 8979897654,
        fatherOccupation: "",
        motherName: "",
        motherMobileNumber: 8769876787,
        MotherOccupation: "",
        address: "",
        district: "",
        state: "",
        localGuardian: "",
        localGuardianPhoneNumber: 9878978978,
        accountNumber: 9876543213456,
        bankName: "",
        branch: "",
        IFSCcode: "",
      },

      level: 1,
    };
  },
  methods: {
    async submit() {
      console.log(this.data);
      const res = await AuthenticationService.StudentRegister(this.data);
      if (res.data.status == "success") {
        console.log("success");
      }
      if (res.data.status == "failed") {
        console.log("failed");
      }
    },
    setLevel(level) {
      this.level = level;
    },
    toggleFacility() {
      this.toggleFacilityButton = !this.toggleFacilityButton;
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(218, 90, 5);
}
.container {
  position: relative;
  max-width: 900px;
  width: 100%;
  border-radius: 6px;
  padding: 30px;
  margin: 0 15px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(225, 98, 7, 0.1);
}
.container .header {
  position: relative;

  font-size: 20px;
  font-weight: 600;
  color: rgb(19, 19, 18);
}
.container .header::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 3px;
  width: 27px;
  border-radius: 8px;
  background-color: #f1760c;
}
.container .form {
  position: relative;
  margin-top: 16px;
  min-height: 490px;

  overflow: hidden;
}
.container .form .form-first {
  /* position: absolute; */
  /*-----------------*/
  background-color: #fff;
  transition: 0.3s ease;
}
.container .form .form-first .form-second {
  /* opacity: 0;
        pointer-events: none; */
  transition: translateX(100%);
}
/* form.secActive .form.form-second {
        opacity: 1;
        pointer-events: none;
        transition: translateX(100%);
      }
      form.secActive .form.form-first {
        opacity: 0;
        pointer-events: none;
        transition: translateX(-100%);
      } */

.container .form .title {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 550;
  margin: 6px 0;
  color: #333;
}
.container .form .fields {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.form .fields .input-field {
  display: flex;
  width: calc(100% / 3 - 15px);
  /* background-color: rgb(247, 141, 12); */

  flex-direction: column;
  margin: 4px 0;
}
.input-field .label {
  font-size: 14px; /*size */
  font-weight: 520;
  color: #2e2e2e;
}
.input-field .input {
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 0 15px;
  height: 42px;
  margin: 8px 0;
}
.input-field .input:is(:focus, :valid) {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
}
.input-field .input[type="date"] {
  color: #333;
}
.input-field .input[type="date"]:valid {
  color: #333;
}
/*-------------------*/
.container .form button,
.backBtn {
  display: flex;
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
.container .form button .container .form .backBtn {
  font-size: 14px;
  font-weight: 400;
}
.form button:hover {
  background-color: #1e1d1c;
}
.form button i,
.form .backBtn i {
  margin: 0 6px;
}
.form .backBtn i {
  transform: rotate(180deg);
}
.form .buttons {
  display: flex;
  align-items: center;
}
.form .buttons button,
.backBtn {
  margin-right: 14px;
}
@media (max-width: 750px) {
  .container .form {
    overflow-y: scroll;
  }
  .container .form::-webkit-scrollbar {
    display: none;
  }
  .form .fields .input-field {
    width: calc(100% / 3 - 15px);
  }
}
@media (max-width: 550px) {
  .form .fields .input-field {
    width: 100%;
  }
}
/* authentication form */
.container {
  display: flex;
  flex-flow: column;
  height: 100%;
  align-items: space-around;
  justify-content: center;
}

.userInput {
  display: flex;
  justify-content: center;
}

.otpinput {
  margin: 10px;
  height: 35px;
  width: 65px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-family: arimo;
  font-size: 1.2rem;
  background: #cdd0d1;
}

.otph1 {
  text-align: center;
  font-family: arimo;
  color: rgb(3, 48, 3);
}

.otpbtn {
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
