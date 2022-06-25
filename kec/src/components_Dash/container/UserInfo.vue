<template>
  <div class="app-body-main-content">
    <div class="card-body">
      <form>
        <div>USER INFO</div>
        <br />
        <div class="outer">
          <div class="form-group focused">
            <fieldset class="fieldset">
              <legend>Name</legend>

              <input
                type="text"
                id="input"
                placeholder="First name"
                value="Aanandhene M"
                disabled
              />
            </fieldset>
          </div>
        </div>
        <br />
        <div class="outer">
          <div class="form-group focused">
            <fieldset class="fieldset">
              <legend>Roll Number</legend>

              <input
                type="text"
                id="input"
                placeholder="First name"
                value="20CSR003"
                disabled
              />
            </fieldset>
          </div>
        </div>
        <br />

        <div class="outer">
          <div class="form-group focused">
            <fieldset class="fieldset">
              <legend>Class</legend>

              <input
                type="text"
                id="input"
                placeholder="First name"
                value="A"
                disabled
              />
            </fieldset>
          </div>
        </div>
        <br />

        <div class="outer">
          <div class="form-group focused">
            <fieldset class="fieldset">
              <legend>Year</legend>

              <input
                type="text"
                id="input"
                placeholder="First name"
                value="2"
                disabled
              />
            </fieldset>
          </div>
        </div>
        <br />

        <div class="outer">
          <div class="form-group focused">
            <fieldset class="fieldset">
              <legend>Department</legend>

              <input
                type="text"
                id="input"
                placeholder="First name"
                value="CSE"
                disabled
              />
            </fieldset>
          </div>
        </div>
        <br />
        <div class="outer">
          <div class="form-group focused">
            <fieldset class="fieldset">
              <legend>Personal Mail Id</legend>

              <input
                type="text"
                id="input"
                placeholder="First name"
                value="aanandhene@gmail.com"
                disabled
              />
            </fieldset>
          </div>
        </div>
        <br />

        <div class="outer">
          <div class="form-group focused">
            <fieldset class="fieldset">
              <legend>College Mail Id</legend>

              <input
                type="text"
                id="input"
                placeholder="First name"
                value="aanandhenem.20cse@kongu.edu"
                disabled
              />
            </fieldset>
          </div>
        </div>
        <br />

        <div class="outer">
          <div class="form-group focused">
            <fieldset class="fieldset">
              <legend>Phone Number</legend>

              <input
                type="text"
                id="input"
                placeholder="First name"
                value="6369675002"
                disabled
              />
            </fieldset>
          </div>
        </div>
        <br />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
};
</script>
<style scoped>
.firstname {
  text-align: right;
}
.outer {
  width: 80%;
}
#input {
  width: 100%;
  border-radius: 100px;
}
#input[value] {
  text-align: right;
  background-color: rgb(27, 26, 26);
  color: white;
}
.fieldset {
  border-radius: 50px;
}
</style>
