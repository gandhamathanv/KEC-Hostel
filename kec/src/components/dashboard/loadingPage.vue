<template>
  <div>
    <div class="loading" delay-hide="50000"></div>
  </div>
</template>
<script>
export default {
  name: "loadingPage",
  data() {
    return {};
  },
};
</script>
<style scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(218, 99, 13);
  z-index: 99;
}
.loading:after {
  content: "";
  width: 50px;
  height: 50px;
  position: absolute;
  top: -30px;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  border: 6px solid #f2f2f2;
  border-top: 6px dotted #f2f2f2;
  border-bottom: 6px dotted #f2f2f2;
  border-radius: 50%;
  animation: loading 2s infinite;
}
.loading:before {
  font-family: "Lobster", cursive;
  font-size: 20px;
  letter-spacing: 1px;
  color: white;
  content: "Loading...";
  position: absolute;
  top: 57%;
  text-align: center;
  right: 0;
  left: 0;
  margin: auto;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(360deg);
  }
}
</style>
