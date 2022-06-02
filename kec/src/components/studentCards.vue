<template>
  <div class="dash">
    <figure v-for="el in data" :key="el" class="box">
      <div class="box-title">
        <h2 class="box-rollno">{{ el.name }}</h2>
      </div>
      <div class="box-title">
        <h6 class="box-name">{{ el.rollnumber }}</h6>
      </div>
      <div class="box-dept">
        <div class="box-deptname">
          <h6 class="box-name">{{ el.department }}</h6>
        </div>
        <div class="box-deptname">
          <h6 class="box-name">{{ el.hostelName }}</h6>
        </div>
        <div class="box-deptname">
          <h6 class="box-name">{{ el.year }}</h6>
        </div>
        <div class="box-deptname">
          <h6 class="box-name">{{ el.gender }}</h6>
        </div>

        <a @click="showDetails(el.rollnumber)" class="box-details" href="#">
          <span>Detail -></span>
        </a>
      </div>
    </figure>
  </div>
</template>
<script>
export default {
  name: "studentCards",
  data() {
    return {};
  },
  props: {
    data: Object,
    showDetails: Function,
  },
};
</script>
<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.dash {
  width: 70rem;
  margin: 0 auto;
}

.box {
  background: white;
  box-shadow: 0 2rem 6rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
  transform: skewX(-20deg);
  display: flex;
  transition: all 0.5s;
  justify-content: space-between;
  height: 70px;
}

.box-title {
  background: linear-gradient(to bottom, #eb9604, #e63007);

  display: flex;
  align-items: center;
  padding: 0 3rem;
}

.box-rollno {
  color: white;
  font-size: 1.2rem;
  transform: skewX(20deg);
}

.box-dept {
  display: flex;
}

.box-deptname {
  align-self: stretch;
  border-right: 1px solid #ddd;
  display: flex;
  align-items: center;
}

.box-deptname:last-child {
  border: none;
}

.box-name {
  font-weight: 400;
  font-size: 1.2rem;
  transform: skewX(20deg);
  padding: 1.75rem;
}

.box-details:link,
.box-details:visited {
  flex: 0 0 auto;
  background: linear-gradient(to bottom, #d89608, #e63007);
  color: white;
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 2.5rem;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.box-details {
  height: 70px;
}

.box-details:hover,
.box-details:active {
  background-color: #9be15d;
}

.box-details span {
  transform: skewX(20deg);
}
</style>
