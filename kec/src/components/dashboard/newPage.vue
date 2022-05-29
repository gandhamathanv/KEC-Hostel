<template>
  <div class="container">
    <div class="dash">
      <figure class="box">
        <div class="box-title">
          <h2 class="box-rollno">20CSR003</h2>
        </div>
        <div class="box-title">
          <h6 class="box-name">AANANDHENE</h6>
        </div>
        <div class="box-dept">
          <div class="box-deptname">
            <h6 class="box-name">CSE</h6>
          </div>
          <div class="box-deptname">
            <h6 class="box-name">AMARAVATHI</h6>
          </div>
          <div class="box-deptname">
            <h6 class="box-name">II</h6>
          </div>
        </div>

        <a class="box-details" href="#">
          <span>Detail -></span>
        </a>
      </figure>
    </div>
    <div class="dash">
      <figure class="box">
        <div class="box-title">
          <h2 class="box-rollno">20CSR003</h2>
        </div>
        <div class="box-title">
          <h6 class="box-name">AANANDHENE</h6>
        </div>
        <div class="box-dept">
          <div class="box-deptname">
            <h6 class="box-name">CSE</h6>
          </div>
          <div class="box-deptname">
            <h6 class="box-name">AMARAVATHI</h6>
          </div>
          <div class="box-deptname">
            <h6 class="box-name">II</h6>
          </div>
        </div>

        <a class="box-details" href="/product?id={%ID%}">
          <span>Detail -></span>
        </a>
      </figure>
    </div>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

h1 {
  font-family: "Megrim", sans-serif;
  font-size: 6rem;
  color: white;
  transform: skewY(-5deg);
  text-align: center;
  position: relative;
  word-spacing: 3px;
}

.container {
  width: 95rem;
  margin: 0 auto;
}

.box {
  background: white;
  box-shadow: 0 2rem 6rem 1rem rgba(0, 0, 0, 0.15);
  margin-bottom: 5rem;
  transform: skewX(-20deg);
  display: flex;
  transition: all 0.5s;
}

.box-title {
  background: linear-gradient(to bottom, #9be15d, #00e3ae);
  margin-right: auto;
  display: flex;
  align-items: center;
  padding: 0 3rem;
}

.box-rollno {
  color: white;
  font-size: 2.25rem;
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
  font-size: 1.8rem;
  transform: skewX(20deg);
  padding: 1.75rem;
}

.box-details:link,
.box-details:visited {
  flex: 0 0 auto;
  background-color: #79e17b;
  color: white;
  font-size: 1.6rem;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  padding: 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.box-details:hover,
.box-details:active {
  background-color: #9be15d;
}

.box-details span {
  transform: skewX(20deg);
}
</style>
