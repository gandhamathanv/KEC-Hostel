<template>
  <div>
    <!-- <div class="col-div-4-1">
      <div class="box-1">
        <div class="content-box-1 box-14">
          <p class="head-1">
            <span><h1>Notification</h1></span>
          </p>

          <br />
          <div class="left">
            <p class="number1">Add Notifications:</p>
            <a class="btn" href="#"></a>
          </div>
          <div class="noof">
            <p class="number1">Number of Notifications:</p>
            <div class="buttons-query">
              <button class="info2">5</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container">
      <p class="user"><b>Dr.K.Kannan </b></p>
      <br />
      <p class="msg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        aliquid facilis officia dolores incidunt laudantium similique hic
        eligendi.
      </p>
      <span class="time-right">Just now</span>
    </div>
    <div class="container">
      <p class="user"><b>K.Kanimozhili</b></p>
      <br />
      <p class="msg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        aliquid facilis officia dolores incidunt laudantium similique hic
        eligendi.
      </p>
      <span class="time-right">11:00am</span>
    </div>
    <div class="container">
      <p class="user"><b>Dr.K.Kannan</b></p>
      <br />
      <p class="msg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        aliquid facilis officia dolores incidunt laudantium similique hic
        eligendi.
      </p>
      <span class="time-right">12:00 am</span>
    </div>
    <div class="container">
      <p class="user"><b>Dr.K.Kannan</b></p>
      <br />
      <p class="msg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        aliquid facilis officia dolores incidunt laudantium similique hic
        eligendi.
      </p>
      <span class="time-right">1:00pm</span>
    </div>
    <div class="container">
      <p class="user"><b>S.Jeevitha</b></p>
      <br />
      <p class="msg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        aliquid facilis officia dolores incidunt laudantium similique hic
        eligendi.
      </p>
      <span class="time-right">1:00pm</span>
    </div>
    <div class="container">
      <p class="user"><b>Dr.K.Kannan</b></p>
      <br />
      <p class="msg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        aliquid facilis officia dolores incidunt laudantium similique hic
        eligendi.
      </p>
      <span class="time-right">Just now</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "notificationList",
  data() {
    return {};
  },
};
</script>
<style scoped>
.col-div-4-1 {
  display: flex;
  flex-direction: column;
  /* overflow-x: hidden; */
  content: " ";
  position: relative;
  align-items: center;
}

.box-1 {
  width: 480px;
  height: auto;
  background-color: white;
  margin: 10px;
  position: relative;
  box-shadow: 2px 5px 10px rgb(255, 254, 254);
  border-radius: 20px;
}

.content-box-1 {
  position: relative;
  align-items: center;
}

.head-1 {
  font-family: system-ui;
  font-weight: bold;
  /* padding-top: 10px; */
  color: rgb(0, 0, 0);
  font-size: 20px;
  /* background-color: #dff0fc;
  border-radius: 10px;
  height:40px;
   */
}

.buttons-query {
  border: none;
  width: 60px;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */

  padding: 2px 28px;
  cursor: pointer;
  width: 400px;
}

.info2 {
  background-color: #c0d9ec;
  box-shadow: 2px 5px 10px #ddd;
  border-radius: 20px;
  border: none;
  width: 120px;
  height: 40px;
  /* position: relative; */
  right: 150px;
  bottom: 20px;
}
.btn {
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: white;
  color: #3c4043;
  display: inline-flex;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  transition: 0.5s;

  /* position:relative;
 left:-120px; */
}
.btn::before {
  background-image: url(https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32px;
  content: "";
  min-width: 56px;

  display: block;
}
/* messagebox */
.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

.container img.right {
  float: right;
  margin-left: 20px;
  margin-right: 0;
}
.time-right {
  float: right;
  color: rgb(103, 99, 99);
}
.user,
.msg {
  float: left;
}
</style>
