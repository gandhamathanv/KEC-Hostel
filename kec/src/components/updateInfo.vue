<template>
  <div>
    <h2>Students Information</h2>
    <section class="fullinfo-box">
      <fieldset class="fieldset-box">
        <td class="label">Name:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Roll Number:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Class:</td>
        <td>
          <input class="para-tag" type="text" id="fname" name="fname" />
        </td>
      </fieldset>

      <fieldset class="fieldset-box">
        <td class="label">Year of Studying:</td>
        <td>
          <input class="para-tag" type="text" id="fname" name="fname" />
        </td>
      </fieldset>

      <fieldset class="fieldset-box">
        <td class="label">Department:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Date of Birth:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Students Phone Number:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Students Mail Id:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Hostel Name:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Hostel Room Number:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Parents Name:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Parents Mobile Number:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
      <fieldset class="fieldset-box">
        <td class="label">Address:</td>
        <td><input class="para-tag" type="text" id="fname" name="fname" /></td>
      </fieldset>
    </section>
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
body {
  margin: 0;
  padding: 0;
  height: 800px;
}

h1 {
  text-align: center;

  color: white;
}
h2 {
  text-align: center;
  text-decoration: underline;
  color: black;
}

.fieldset-box {
  width: 400px;
  border: 5px solid white;
  text-align: center;

  background-color: rgb(204, 218, 248);
  color: rgb(10, 26, 59);

  border-radius: 25px;
  font-family: serif;

  margin-left: auto;
  display: inline-block;
  margin-right: auto;
}

.para-tag {
  background-color: white;
  padding: 15px;
  float: right;
  left: 20px;

  border: none;
  color: #292c2f;
}
</style>
