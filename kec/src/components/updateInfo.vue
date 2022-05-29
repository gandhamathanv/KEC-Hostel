<template>
  <div>
    <div class="loading">
      <span>Loading</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "updateInfo",
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "montserrat", sans-serif;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.loading {
  margin: auto;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 10px solid #706fd3;
  position: relative;
  top: 50px;
  animation: a1 2s linear infinite;
}

.loading::before,
.loading::after {
  content: "";
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: -10px;
  box-sizing: border-box;
  border-radius: 50%;
}

.loading::before {
  border-top: 10px solid #40407a;
  transform: rotate(120deg);
}
.loading::after {
  border-top: 10px solid #474787;
  transform: rotate(240deg);
}

.loading span {
  position: absolute;
  width: 200px;
  height: 200px;
  color: rgb(23, 21, 21);
  text-align: center;
  line-height: 200px;
  animation: a2 2s linear infinite;
  z-index: 4;
}

@keyframes a1 {
  to {
    transform: rotate(360deg);
  }
}

@keyframes a2 {
  to {
    transform: rotate(-360deg);
  }
}
</style>
