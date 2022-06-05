<template>
  <div>
    <div class="loader"></div>
    <br />
    <div>Loading....</div>
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
.loader {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: 10px solid rgb(231, 107, 6);
  border-top-color: #002147;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  margin-bottom: auto;
  background: transparent;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
}
</style>
