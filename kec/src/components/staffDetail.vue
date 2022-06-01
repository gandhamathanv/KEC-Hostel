<template>
  <div>
    <section>
      <div class="rt-container">
        <div class="col-rt-12">
          <div class="Scriptcontent">
            <!-- Student Profile -->
            <div class="student-profile py-4">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="card shadow-sm2">
                      <div class="card-header border-0">
                        <h3 class="mb-0">STAFF INFORMATION</h3>
                      </div>
                      <div class="buttons">
                        <button class="submit">
                          <span class="submit">Update </span>
                        </button>
                        <button class="submit">
                          <span class="submit">Delete </span>
                        </button>
                      </div>
                      <div class="card-body pt-0">
                        <table class="table table-bordered" border="0">
                          <tr v-if="user.name">
                            <th width="20%">Name</th>
                            <td width="2%">:</td>
                            <td>{{ user.name }}</td>
                          </tr>
                          <tr v-if="user.rollnumber">
                            <th width="20%">Roll Number</th>
                            <td width="2%">:</td>
                            <td>{{ user.rollnumber }}</td>
                          </tr>
                          <tr v-if="user.class">
                            <th width="20%">class</th>
                            <td width="2%">:</td>
                            <td>{{ user.class }}</td>
                          </tr>
                          <tr v-if="user.year">
                            <th width="20%">year</th>
                            <td width="2%">:</td>
                            <td>{{ user.year }}</td>
                          </tr>
                          <tr v-if="user.department">
                            <th width="20%">department</th>
                            <td width="2%">:</td>
                            <td>{{ user.department }}</td>
                          </tr>
                          <tr v-if="user.DOB">
                            <th width="20%">DOB</th>
                            <td width="2%">:</td>
                            <td>{{ user.DOB }}</td>
                          </tr>
                          <tr v-if="user.bloodGroup">
                            <th width="20%">bloodGroup</th>
                            <td width="2%">:</td>
                            <td>{{ user.bloodGroup }}</td>
                          </tr>
                          <tr v-if="user.roomNumber">
                            <th width="20%">roomNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.roomNumber }}</td>
                          </tr>
                          <tr v-if="user.hostelName">
                            <th width="20%">hostelName</th>
                            <td width="2%">:</td>
                            <td>{{ user.hostelName }}</td>
                          </tr>
                          <tr v-if="user.gender">
                            <th width="20%">gender</th>
                            <td width="2%">:</td>
                            <td>{{ user.gender }}</td>
                          </tr>
                          <tr v-if="user.phoneNumber">
                            <th width="20%">phoneNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.phoneNumber }}</td>
                          </tr>
                          <tr v-if="user.whatsappNumber">
                            <th width="20%">whatsappNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.whatsappNumber }}</td>
                          </tr>
                          <tr v-if="user.telegramNumber">
                            <th width="20%">telegramNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.telegramNumber }}</td>
                          </tr>
                          <tr v-if="user.collegeMailID">
                            <th width="20%">collegeMailID</th>
                            <td width="2%">:</td>
                            <td>{{ user.collegeMailID }}</td>
                          </tr>
                          <tr v-if="user.personalMailID">
                            <th width="20%">personalMailID</th>
                            <td width="2%">:</td>
                            <td>{{ user.personalMailID }}</td>
                          </tr>
                          <tr v-if="user.aadharNumber">
                            <th width="20%">aadharNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.aadharNumber }}</td>
                          </tr>
                          <tr v-if="user.fatherName">
                            <th width="20%">fatherName</th>
                            <td width="2%">:</td>
                            <td>{{ user.fatherName }}</td>
                          </tr>
                          <tr v-if="user.fatherMobileNumber">
                            <th width="20%">fatherMobileNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.fatherMobileNumber }}</td>
                          </tr>
                          <tr v-if="user.fatherOccupation">
                            <th width="20%">fatherOccupation</th>
                            <td width="2%">:</td>
                            <td>{{ user.fatherOccupation }}</td>
                          </tr>
                          <tr v-if="user.motherName">
                            <th width="20%">motherName</th>
                            <td width="2%">:</td>
                            <td>{{ user.motherName }}</td>
                          </tr>
                          <tr v-if="user.motherMobileNumber">
                            <th width="20%">motherMobileNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.motherMobileNumber }}</td>
                          </tr>
                          <tr v-if="user.MotherOccupation">
                            <th width="20%">MotherOccupation</th>
                            <td width="2%">:</td>
                            <td>{{ user.MotherOccupation }}</td>
                          </tr>
                          <tr v-if="user.address">
                            <th width="20%">address</th>
                            <td width="2%">:</td>
                            <td>
                              {{ user.address }}
                            </td>
                          </tr>
                          <tr v-if="user.district">
                            <th width="20%">district</th>
                            <td width="2%">:</td>
                            <td>{{ user.district }}</td>
                          </tr>
                          <tr v-if="user.state">
                            <th width="20%">state</th>
                            <td width="2%">:</td>
                            <td>{{ user.state }}</td>
                          </tr>
                          <tr v-if="user.localGuardian">
                            <th width="20%">localGuardian</th>
                            <td width="2%">:</td>
                            <td>{{ user.localGuardian }}</td>
                          </tr>
                          <tr v-if="user.localGuardianPhoneNumber">
                            <th width="20%">localGuardianPhoneNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.localGuardianPhoneNumber }}</td>
                          </tr>
                          <tr v-if="user.accountNumber">
                            <th width="20%">accountNumber</th>
                            <td width="2%">:</td>
                            <td>{{ user.accountNumber }}</td>
                          </tr>
                          <tr v-if="user.bankName">
                            <th width="20%">bankName</th>
                            <td width="2%">:</td>
                            <td>{{ user.bankName }}</td>
                          </tr>
                          <tr v-if="user.branch">
                            <th width="20%">branch</th>
                            <td width="2%">:</td>
                            <td>{{ user.branch }}</td>
                          </tr>
                          <tr v-if="user.IFSCcode">
                            <th width="20%">IFSCcode</th>
                            <td width="2%">:</td>
                            <td>{{ user.IFSCcode }}</td>
                          </tr>
                          <tr v-if="user.dateOfEntry">
                            <th width="20%">dateOfEntry</th>
                            <td width="2%">:</td>
                            <td>{{ user.dateOfEntry }}</td>
                          </tr>
                          <tr v-if="user.dateOfVacation">
                            <th width="20%">dateOfVacation</th>
                            <td width="2%">:</td>
                            <td>{{ user.dateOfVacation }}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- partial -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import getDetails from "@/services/getDetails";
export default {
  data() {
    return {
      user: {
        name: "Jeevitha",
        staffID: "12345",
        designation: "Assistant Professor",
        year: 2,

        hostelName: "Amaravathi",
        roomNumber: "AMR067",
        hostelResponsibility: "Deputy Warden",
        department: "CSE",
        gender: "female",
        bloodGroup: "O+ve",

        phoneNumber: 1234567890,
        whatsappNumber: 23456789056,
        collegeMailID: "jeevithacse@kongu.edu",
        personalMailID: "jeevitha@gmail.com",
        aadharNumber: 23456789067,
      },
    };
  },
  async created() {
    const { data } = await getDetails.getStaff({
      staffID: this.$route.params.staffID,
    });
    this.user = data.data;
  },
};
</script>
<style scoped lang="scss">
.rt-heading {
  margin-top: 80px;
  text-align: center;
  font-family: system-ui;
}

.profile_img {
  border-radius: 100%;
  border: 15px solid rgb(197, 193, 193);
  width: 200px;
  height: 200px;
}

.card {
  width: 400px;
  height: auto;
  position: relative;
  border-radius: 20px;
  background-color: aliceblue;
  box-shadow: 2px 10px 10px gray;
  text-align: center;
  margin-left: 70px;
  font-family: system-ui;
  font-weight: bold;
  padding: 34px;
}

.table {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border: 2px solid rgb(194, 186, 186);
}

.shadow-sm2 {
  width: 80%;
  align-items: center;
  text-align: left;
}

table {
  border-collapse: collapse;
}

td,
th + th {
  border-left: 1px solid rgb(107, 109, 106);
}

tr + tr {
  border-top: 1px solid rgb(126, 124, 128);
}

td,
th {
  padding: 10px;
}

tr + tr > td,
tr + tr > th {
  border-top: 1px solid rgb(103, 102, 104);
}

.row {
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  padding: 10px;
}
.submit {
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 140px;
  width: 100%;
  border: none;

  color: #fff;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  background-color: #4da6e2;

  margin-right: 14px;
}

@media (max-width: 790px) {
  .row {
    display: grid;
    grid-template-columns: 1fr;
  }
  .profile_img {
    width: 100px;
    height: 200px;
  }
  .card {
    width: 350px;
    height: auto;
    position: relative;
    margin-left: 20px;
    font-family: system-ui;
    font-weight: bold;
    padding: 15px;
  }
}
</style>
