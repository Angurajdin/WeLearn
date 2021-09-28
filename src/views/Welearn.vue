<template>
  <p class="about">
        WE LEARN is the top emerging platform <br />to provide learning
        resources for the user with<br />
        most relevant and latest content
      </p>
      <p class="note">
        Be a user of our website to access all our resources free
      </p>
      <div class="register">
        <input
          v-model="search"
          class="search email"
          type="text"
          style="width: 20rem"
          placeholder="       Enter your email"
          required
        />
        <q-btn type="submit" no-caps flat class="get" label="Start learning" />
      </div>
      <img class="book" src="../assets/book.png" /> 
      <div class="course">

        
      </div>
</template>

<script>
export default {

}
</script>

<style>
.search {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 1px 1px 3px #00000029;
  border: none;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  color: white;
  margin-left: 300px;
  height: 36px;
  margin-right: 100px;
}
input:focus {
  outline: none;
}
.searchbutton {
  height: 30px;
  position: fixed;
  right: 410px;
  background-color: #e71f63;
  border: none;
  border-radius: 0px 7px 7px 0px;
  padding-right: 20px;
  padding-left: 20px;
}
.book{
  position: fixed;
  top: 194px;
  right: 70px;
}
.about {
  position: fixed;
  top: 230px;
  left: 100px;
  text-align: left;
  font: normal normal 450 28px/40px Segoe UI;
  letter-spacing: 0.78px;
  color: #ffffff;
}
::placeholder {
  color: white;
  opacity: 60%;
}
.register {
  position: fixed;
  left: -13rem;
  top: 30rem;
  
}
.note {
  position: fixed;
  top: 445px;
  left: 95px;
  width: 427px;
  height: 21px;
  text-align: left;
  font: normal normal 15px/18px Segoe UI;
  letter-spacing: 0.48px;
  color: #ffffff;
}
.get {
  position: fixed;
  left: 390px;
  height: 50px;
  width: 180px;
  border-radius: 0px 10px 10px 0px;
  color: white;
  background-color: #e71f63;
  text-transform: uppercase;
}
.course {
  background-size: cover;
  margin: 10px 25px;
}
.email{
  height:50px;
}
</style>