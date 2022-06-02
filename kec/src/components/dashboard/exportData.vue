<template>
  <div>
    <div class="buttons">
      <button class="submit">
        <span class="submit">Submit </span>
      </button>
    </div>
    <div class="buttons">
      <button class="submit">
        <span class="submit">Submit </span>
      </button>
    </div>
    <div class="buttons">
      <button class="submit">
        <span class="submit">Submit </span>
      </button>
    </div>
    <div class="buttons">
      <button class="submit">
        <span class="submit">Submit </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "exportData",
  data() {
    return {};
  },
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
