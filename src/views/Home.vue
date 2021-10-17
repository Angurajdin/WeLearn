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
            <q-route-tab to="/" label="Home" />
            <q-route-tab to="/Explore" label="Explore" />
            <q-route-tab to="/Webinar" label="Webinar" />
            <q-route-tab to="/Discussion" label="Discussion" />

            <input
              v-model="search"
              class="search"
              type="text"
              placeholder="       search course"
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
        <br/>
      </div>
<router-view/>
      </div>
      <br/>
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
  min-height: 50rem;
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
  right: 390px;
  background-color: #e71f63;
  border: none;
  border-radius: 0px 7px 7px 0px;
  padding-right: 20px;
  padding-left: 20px;
}
 
::placeholder {
  color: white;
  opacity: 60%;
}
</style>