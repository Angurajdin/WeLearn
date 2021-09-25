<template>
  <div class="bg">
    <br />
    <div class="container">
      <div class="q-pa-md">
        <div
          class="q-gutter-y-md"
          narrow-indicator
          text-h3
          style="max-width: 100rem"
        >
          <q-tabs v-model="tab" class="text-white">
            <q-btn flat to="/" class="logo" label="We learn" />
            <q-route-tab to="/Explore" label="Explore" />
            <q-route-tab to="/Seminar" label="Seminar" />
            <q-route-tab to="/Discussion" label="Discussion" />

            <input
              v-model="search"
              class="search"
              type="text"
              placeholder="         type here"
            />
            <q-btn
              type="submit"
              flat
              no-caps
              class="searchbutton"
              label="Search"
            />
            <q-btn flat style="color: #ffffff" label="Login" />
            <q-btn flat style="color: #ffffff" label="Sign up" />

            <!-- Dropdown -->
            <div class="q-pa-md">
              <q-btn-dropdown
                color="pink"
                label="Account"
                dropdown-icon="change_history"
              >
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Saved</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Setting</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label style="color: red; font-weight: 600"
                        >Logout</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </q-tabs>
        </div>
      </div>

      <!-- actual content -->
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
          class="search"
          type="text"
          style="width: 20rem"
          placeholder="       Enter your email"
        />
        <q-btn type="submit" no-caps flat class="get" label="Start learning" />
      </div>
      <img src="../assets/book.png" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped >
.bg {
  background: url("../assets/bg.png") no-repeat center center fixed;
  -webkit-background-size: contain, cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.container {
  max-width: 100rem;
  margin: 10px 25px;
  height: 50rem;
  box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(15px);
}
.logo {
  font: 25px Qualy;

  letter-spacing: 2px;
}
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
img {
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
  border-radius: 0px 10px 10px 0px;
  color: white;
  background-color: #e71f63;
   
}
</style>