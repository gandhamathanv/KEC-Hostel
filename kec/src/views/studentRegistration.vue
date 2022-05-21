<template>
  <div class="body">
    <div class="container">
      <div class="registration-container">
        <header class="header">Registration Form</header>
        <form class="form" action="#">
          <div v-if="level == 1" class="form-first">
            <div class="details-personal">
              <span class="title">Students Details</span>

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
                  <label class="label">Roll Number</label>
                  <input
                    v-model="data.rollnumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Roll Number"
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
                  <label class="label">Department</label>
                  <!-- <input
                    class="input"
                    type="text"
                    placeholder="Enter your Department"
                    required
                  /> -->
                  <select class="input" v-model="data.department">
                    >
                    <option value="Department" disabled selected hidden>
                      Select your Department
                    </option>
                    <option value="cse">CSE</option>
                    <option value="ece">ECE</option>
                    <option value="Civil">CIVIL</option>
                    <option value="Mech">MECH</option>
                    <option value="eee">EEE</option>
                    <option value="eie">EIE</option>
                    <option value="ft">FT</option>
                    <option value="chemical">CHE</option>
                    <option value="auto">AUTO</option>
                  </select>
                </div>
                <div class="input-field">
                  <label class="label">Year of Studying</label>
                  <select class="input" v-model="data.year">
                    >
                    <option value="studying" disabled selected hidden>
                      Select your Year of Study
                    </option>
                    <option value="first">I</option>
                    <option value="second">II</option>
                    <option value="third">III</option>
                    <option value="fourth">IV</option>
                  </select>
                </div>
                <div class="input-field">
                  <label class="label">Class</label>
                  <select class="input" v-model="data.class">
                    >
                    <option value="studying" disabled selected hidden>
                      Select your class
                    </option>
                    <option value="first">A</option>
                    <option value="second">B</option>
                    <option value="third">C</option>
                    <option value="fourth">D</option>
                  </select>
                </div>

                <div class="input-field">
                  <label class="label">Gender</label>
                  <select class="input" v-model="data.gender">
                    <option value="gender" disabled selected hidden>
                      Select your Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div class="input-field">
                  <label class="label">Blood Group</label>
                  <input
                    v-model="data.bloodGroup"
                    class="input"
                    type="text"
                    placeholder="Enter your Blood Group"
                    required
                  />
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
                  <label class="label">Telegram Number</label>
                  <input
                    v-model="data.telegramNumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Telegram Number"
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
                  <label class="label">Aadhar Number </label>
                  <input
                    v-model="data.aadharNumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Aadhar Number"
                    required
                  />
                </div>
                <button @click="setLevel(2)" class="nextBtn">
                  <span class="btn-text">Next </span>
                  <i class="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-else-if="level == 2" class="form-second">
            <div class="details-address">
              <span class="title">Family Details</span>

              <div class="fields">
                <div class="input-field">
                  <label class="label">Father Name</label>
                  <input
                    v-model="data.fatherName"
                    class="input"
                    type="text"
                    placeholder="Enter your Father Name"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Father Mobile Number</label>
                  <input
                    v-model="data.fatherMobileNumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Father Mobile Number"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Father Occupation</label>
                  <input
                    v-model="data.fatherOccupation"
                    class="input"
                    type="text"
                    placeholder="Enter your Father's Occupation"
                    required
                  />
                </div>

                <div class="input-field">
                  <label class="label">Mother Name</label>
                  <input
                    v-model="data.motherName"
                    class="input"
                    type="text"
                    placeholder="Enter your Mother's Occupation"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Mother Mobile Number</label>
                  <input
                    v-model="data.motherMobileNumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Mother Mobile Number"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Mother Occupation</label>
                  <input
                    v-model="data.MotherOccupation"
                    class="input"
                    type="text"
                    placeholder="Enter your Mother's Occupation"
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
                <div class="input-field">
                  <label class="label">Pincode </label>
                  <input
                    v-model="data.Pincode"
                    class="input"
                    type="text"
                    placeholder="Enter your Pincode"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Local Guardian Name</label>
                  <input
                    v-model="data.localGuardian"
                    class="input"
                    type="text"
                    placeholder="Enter Local Guardian Name"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Local Guardian Phone Number</label>
                  <input
                    v-model="data.localGuardianPhoneNumber"
                    class="input"
                    type="text"
                    placeholder="Enter Local Guardian Phone Number "
                    required
                  />
                </div>
              </div>
              <div class="buttons">
                <button @click="setLevel(1)" class="submit">
                  <span class="submit">back </span>
                  <i class="uil uil-navigator"></i>
                </button>
                <button @click="setLevel(3)" class="submit">
                  <span class="submit">Next </span>
                  <i class="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </div>
          <div v-else-if="level == 3" class="form-second">
            <div class="details-address">
              <span class="title">Bank Details</span>

              <div class="fields">
                <div class="input-field">
                  <label class="label">Account Number</label>
                  <input
                    v-model="data.accountNumber"
                    class="input"
                    type="text"
                    placeholder="Enter your Account Number"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">IFSC Code</label>
                  <input
                    v-model="data.IFSCcode"
                    class="input"
                    type="text"
                    placeholder="Enter IFSC Code"
                    required
                  />
                </div>

                <div class="input-field">
                  <label class="label">Bank Name</label>
                  <input
                    v-model="data.bankName"
                    class="input"
                    type="text"
                    placeholder="Enter the Bank Name"
                    required
                  />
                </div>
                <div class="input-field">
                  <label class="label">Branch Name</label>
                  <input
                    v-model="data.branch"
                    class="input"
                    type="text"
                    placeholder="Enter the Branch Name"
                    required
                  />
                </div>
              </div>
              <div class="buttons">
                <button @click="setLevel(3)" class="submit">
                  <span class="submit">back </span>
                  <i class="uil uil-navigator"></i>
                </button>
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
  name: "MainPage",
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
