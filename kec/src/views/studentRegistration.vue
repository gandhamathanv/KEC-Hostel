<template>
  <div class="body">
    <div class="container">
      <header class="header">Registration Form</header>
      <form class="form" action="#">
        <div v-if="level == 1" class="form-first">
          <div v-if="level == 1" class="details-personal">
            <span class="title">Students Details</span>

            <div class="fields">
              <div class="input-field">
                <label class="label">Full Name</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div class="input-field">
                <label class="label">Roll Number</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Roll Number"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Date of Birth</label>
                <input
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
                <select class="input">
                  <option value="Department" disabled selected hidden>
                    Select your Department
                  </option>
                  <option value="cse">CSE</option>
                  <option value="ece">ECE</option>
                  <option value="Civil">Civil</option>
                  <option value="Mech">Mech</option>
                  <option value="eee">EEE</option>
                  <option value="eie">EIE</option>
                  <option value="ft">Food Tech</option>
                  <option value="chemical">Chemical</option>
                </select>
              </div>
              <div class="input-field">
                <label class="label">Year of Studying</label>
                <select class="input">
                  <option value="studying" disabled selected hidden>
                    Select your Year of Study
                  </option>
                  <option value="first">1</option>
                  <option value="second">2</option>
                  <option value="third">3</option>
                  <option value="fourth">4</option>
                </select>
              </div>
              <div class="input-field">
                <label class="label">Class</label>
                <select class="input">
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
                <select class="input">
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
                  class="input"
                  type="text"
                  placeholder="Enter your Blood Group"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Phone Number</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Whatsapp Number</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Whatsapp Number"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Telegram Number</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Telegram Number"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Personal Mail ID</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Mail ID"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">College Mail ID</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Kongu Mail ID"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Aadhar Number </label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Aadhar Number"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Aadhar Number </label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Aadhar Number"
                  required
                />
              </div>
              <button class="nextBtn">
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
                  class="input"
                  type="text"
                  placeholder="Enter your Father Name"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Father Mobile Number</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Father Mobile Number"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Father Occupation</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Father's Occupation"
                  required
                />
              </div>

              <div class="input-field">
                <label class="label">Mother Name</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Mother's Occupation"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Mother Mobile Number</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Mother Mobile Number"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Mother Occupation</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Mother's Occupation"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Address</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Full Address"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">District</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your District"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">State</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your State"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Pincode </label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Pincode"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Local Guardian Name</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter Local Guardian Name"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Local Guardian Phone Number</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter Local Guardian Phone Number "
                  required
                />
              </div>
            </div>
            <div class="buttons">
              <div class="backBtn">
                <span class="btn-text">Back </span>
                <i class="uil uil-navigator"></i>
              </div>
              <button class="submit">
                <span class="submit">Next </span>
                <i class="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </div>
        <div v-else class="form-second">
          <div class="details-address">
            <span class="title">Bank Details</span>

            <div class="fields">
              <div class="input-field">
                <label class="label">Account Number</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your Account Number"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">IFSC Code</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter IFSC Code"
                  required
                />
              </div>

              <div class="input-field">
                <label class="label">Bank Name</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter the Bank Name"
                  required
                />
              </div>
              <div class="input-field">
                <label class="label">Branch Name</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Enter the Branch Name"
                  required
                />
              </div>
            </div>
            <div class="buttons">
              <div class="backBtn">
                <span class="btn-text">Back </span>
                <i class="uil uil-navigator"></i>
              </div>
              <button class="submit">
                <span class="submit">Submit </span>
                <i class="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      data: {
        level1: {},
        level2: {},
        level3: {},
      },
      level: 2,
    };
  },
  methods: {
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
  /* background-color: #f2f2f2; */
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
</style>
