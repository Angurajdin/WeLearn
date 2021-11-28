<template>
  <div class="bg">
    <br />
    <div class="container">
      <div class="q-pa-md">
        <div class="q-gutter-y-md" narrow-indicator text-h3>
          <q-tabs v-model="tab" class="text-white">
            <q-btn flat to="/" class="logo" label="We learn" />
            <q-route-tab name="home" to="/" label="Home" />
            <q-route-tab name="explore" to="/Explore" label="Explore" />
            <q-route-tab name="webiner" to="/Webinar" label="Webinar" />
            <q-route-tab
              name="discussion"
              to="/Discussion"
              label="Discussion"
            />

            <div class="searchpair">
              <q-input
                :options="searchvalue"
                v-model="search"
                class="search"
                type="text"
                placeholder="search course"
              />
<<<<<<< HEAD
              <router-link
                style="text-decoration: none"
                :to="{ name: 'Content', params: { course: search } }"
              >
=======
              <router-link  style="text-decoration:none ;" :to="{name: 'Content', params:{course : search  }}">
>>>>>>> dc06d5e77e15217e923fc1d7706ca7b79daeb6f6
                <q-btn
                  type="submit"
                  flat
                  no-caps
                  class="searchbutton"
                  label="Search"
                />
              </router-link>
            </div>
            <div v-if="currentUser == null">
              <q-btn
                flat
                style="color: #ffffff"
                @click="login = true"
                label="Login"
              />
              <q-btn
                flat
                style="color: #ffffff"
                @click="signup = true"
                label="Sign up"
              />
            </div>

            <div v-else>
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

                    <q-item
                      clickable
                      v-close-popup
                      to="/Profile"
                      @click="onItemClick"
                    >
                      <q-item-section>
                        <q-item-label>profile</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label
                          style="color: red; font-weight: 600"
                          @click="logout"
                        >
                          Logout
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>
          </q-tabs>

          <!-- **** LOGIN **** -->
          <div class="q-pa-md q-gutter-sm">
            <q-dialog v-model="login">
              <q-card class="contain">
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">Login Here</div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
                <!-- content
   -->
                <q-card-section>
                  <q-form @submit="onLogin" @reset="null" class="q-gutter-md">
                    <q-input
                      filled
                      v-model="loginEmail"
                      label="Email"
                      type="email"
                    >
                      <template v-slot:before>
                        <q-icon name="mail" />
                      </template>
                    </q-input>

                    <q-input
                      label="Password"
                      v-model="loginPassword"
                      filled
                      :type="isPwd ? 'password' : 'text'"
                    >
                      <template v-slot:before>
                        <q-icon
                          :name="isPwd ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd = !isPwd"
                        />
                      </template>
                    </q-input>

                    <div style="text-align: center">
                      <q-btn label="Login" type="submit" color="primary" />
                      <br /><br />
                      <a
                        style="cursor: pointer"
                        @click="
                          (login = false), (signup = true), (error = null)
                        "
                        >Don't have a account ? Signup</a
                      >
                      <div v-if="error" class="text-red">
                        <br />
                        <strong> {{ error }} </strong>
                      </div>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
          <!-- Login end -->

          <!-- Signup starts -->
          <div class="q-pa-md q-gutter-sm">
            <q-dialog v-model="signup">
              <q-card class="signupcontain">
                <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6">Create Your Account</div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
                <!-- content
   -->
                <q-card-section>
                  <q-form @submit="onSignup" @reset="null" class="q-gutter-md">
                    <q-input
                      dense="dense"
                      filled
                      v-model="signupUsername"
                      type="text"
                    >
                      <template v-slot:before>
                        <q-icon name="person" />
                      </template>
                    </q-input>

                    <q-input
                      filled
                      v-model="signupEmail"
                      type="email"
                      dense="dense"
                    >
                      <template v-slot:before>
                        <q-icon name="mail" />
                      </template>
                    </q-input>
                    <q-input
                      dense="dense"
                      filled
                      v-model="signupMobile"
                      type="number"
                    >
                      <template v-slot:before>
                        <q-icon name="phone" />
                      </template>
                    </q-input>

                    <q-input
                      dense="dense"
                      v-model="signupPassword"
                      filled
                      :type="isPwd ? 'password' : 'text'"
                    >
                      <template v-slot:before>
                        <q-icon
                          :name="isPwd ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd = !isPwd"
                        />
                      </template>
                    </q-input>

                    <div>
                      <div style="text-align: center">
                        <br />
                        <q-btn label="Register" type="submit" color="primary" />
                        <br /><br />
                        <a
                          style="cursor: pointer"
                          @click="
                            (login = true), (signup = false), (error = null)
                          "
                        >
                          Already have a account ? Login
                        </a>
                        <div v-if="error" class="text-red">
                          <br />
                          <strong> {{ error }} </strong>
                        </div>
                      </div>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
          <!-- Signup ends -->
        </div>
      </div>
      <router-view />
    </div>
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, defineComponent, inject } from "vue";
import { useRouter } from "vue-router";
import api from "../connections/api";

export default defineComponent({
  name: "Home",
  setup() {
    const store = inject("store");
    const router = useRouter();
    let login = ref(false);
    let signup = ref(false);
    let isPwd = ref(true);
    let isLoading = ref(true);
    let error = ref(null);
    let signupEmail = ref("");
    let signupPassword = ref("");
    let loginEmail = ref("");
    let loginPassword = ref("");
    let signupMobile = ref("");
    let signupUsername = ref("");
    let search = ref("");
    let tab = ref("home");
    let currentUser = ref(null);

    let searchvalue = [
      "Data structures",
      "Machine learning",
      "C++ programming",
    ];

    const onSignup = async () => {
      if (
        signupPassword.value.trim() !== "" &&
        signupUsername.value.trim() !== "" &&
        signupEmail.value.trim() !== "" &&
        signupMobile.value.trim() !== "" /* &&  dob.value.trim()!==' ' */
      ) {
        error.value = null;
        isLoading.value = true;
        if (signupUsername.value.trim().length < 3) {
          error.value = "Username must be at least 3 characters";
        } else if (signupMobile.value.trim().length !== 10) {
          error.value = "Invalid Mobile No";
        } else {
          const res = await api.signup({
            userName: signupUsername.value,
            emailID: signupEmail.value,
            password: signupPassword.value,
            mobile: signupMobile.value,
            /*  dob : dob.value */
          });
          if (res.success) {
            currentUser.value = res.currentUser;
            login.value = false;
            signup.value = false;
            await router.push("/Explore");
          } else error.value = res.message;
        }
      } else {
        error.value = "All Fields are required";
      }
      isLoading.value = false;
    };

    const onLogin = async () => {
      if (loginEmail.value.trim() !== "" && loginPassword.value.trim() !== "") {
        error.value = null;
        isLoading.value = true;
        const res = await api.login({
          emailID: loginEmail.value,
          password: loginPassword.value,
        });
        if (res.success) {
          currentUser.value = res.currentUser[0];
          store.userData = res.currentUser[0];
          login.value = false;
          signup.value = false;
          await router.push("/Explore");
        } else error.value = res.message;
        isLoading.value = false;
      } else {
        error.value = "Please, Enter Email and password";
        isLoading.value = false;
      }
    };

    const logout = () => {
      currentUser.value = null;
    };

    return {
      logout,
      currentUser,
      tab,
      search,
      searchvalue,
      error,
      onLogin,
      onSignup,
      login,
      isPwd,
      signup,
      signupEmail,
      signupPassword,
      loginPassword,
      signupUsername,
      loginEmail,
      signupMobile,
    };
  },
});
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
.searchpair {
  display: flex;
}
.logo {
  font: 25px Qualy;

  letter-spacing: 2px;
}
.search {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 1px 1px 3px #00000029;
  border: none;
  border-radius: 7px 0px 0px 7px;
  backdrop-filter: blur(2px);
  color: white;
  margin-left: 300px;
  height: 36px;
  min-width: 170px;
  padding-left: 20px;
  justify-content: flex-start;
}
input:focus {
  outline: none;
}
.searchbutton {
  height: 30px;

  background-color: #e71f63;
  border: none;
  border-radius: 0px 7px 7px 0px;

  justify-content: flex-end;
}

::placeholder {
  color: white;
  opacity: 60%;
}

/* login css */
.contain {
  max-height: auto /* 349px */;
  width: 543px;
  margin: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 14px;
  opacity: 0.9;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}
.signupcontain {
  height: 455px;
  width: 1043px;
  margin: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 14px;
  opacity: 0.9;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}
</style>

