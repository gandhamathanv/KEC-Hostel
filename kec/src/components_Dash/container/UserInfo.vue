<template>
  <div class="app-body-main-content">
    <div class="card-body">
      <div>USER INFO</div>
      <br />
      <div class="form-group">
        <div class="title">Name</div>

        <input
          type="text"
          id="input"
          placeholder="First name"
          value="Aanandhene M"
          disabled
        />
      </div>
      <div class="form-group">
        <div class="title">Name</div>

        <input
          type="text"
          id="input"
          placeholder="First name"
          value="Aanandhene M"
        />
      </div>

      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
};
</script>
<style scoped>
/* .form-group {
  border: 1px white solid;
  border-radius: 10px;
  position: relative;
}
.title {
  position: absolute;
  top: -20px;
  padding: 5px;
  background-color: var(--c-grey-800);
}
#input {
  width: 100%;
  border-radius: 5px;
  background: inherit;
  color: aliceblue;
  padding: 5px;
}
#input[value] {
  padding-right: 3%;
  color: white;
}
#input[disabled] {
  text-align: right;
  background: #000;
} */

.form-group {
  display: flex;
  justify-content: space-evenly;
  border: 2px solid white;
  margin: 30px;
}
.title {
  padding: 10px;
  flex-grow: 1;
  text-align: center;
  border: 2px solid red;
  color: white;
}
#input {
  flex-grow: 1;
  padding: 10px;
  text-align: left;
  background-color: inherit;
  color: white;
}
#input[value] {
  padding-right: 3%;
}
#input[disabled] {
  text-align: center;
}
</style>
