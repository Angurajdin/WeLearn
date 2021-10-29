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
          <div class="searchpair">
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
            </div>
            <q-btn flat style="color: #ffffff" @click="login = true" label="Login" />
            <q-btn flat style="color: #ffffff"  @click="signup = true" label="Sign up" />

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
 -->        <q-card-section>
           <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
        <q-input filled v-model="email" label="Email" type="email" suffix="@gmail.com">
        <template v-slot:before>
          <q-icon name="mail" />
        </template>
      </q-input>

     <q-input label="Password" v-model="password" filled :type="isPwd ? 'password' : 'text'" >
        <template v-slot:before>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div>
        <center>
        <q-btn label="Login" type="submit" color="primary"/>
        </center>
         <a style="cursor:pointer" @click="login = false,signup = true">Don't have a account ? Signup</a>
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
 -->        <q-card-section>
           <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
   
<q-input filled v-model="Username" type="text"   >
        <template v-slot:before>
          <q-icon name="person" />
        </template>
      </q-input>

        <q-input filled v-model="email" type="email" suffix="@gmail.com">
        <template v-slot:before>
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-input filled v-model="mobile" type="number"   >
        <template v-slot:before>
          <q-icon name="phone" />
        </template>
      </q-input>

     <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" >
        <template v-slot:before>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div>
        <center>
        <q-btn label="Register" type="submit" color="primary"/>
        </center>
         <a style="cursor:pointer" @click="login = true,signup = false" >Already have a account ?</a>
      </div>
    </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
            </div>
<!-- Signup ends -->

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
import {ref} from 'vue'
export default {
  name: "Home",
  setup(){

  let login =  ref('false')
  let signup =  ref('false')
  let isPwd = ref('true')

  return { login,isPwd,signup}
  }
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
.searchpair{
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
   justify-content:flex-start; 
}
input:focus {
  outline: none;
}
.searchbutton {
  height: 30px;
   
   
  background-color: #e71f63;
  border: none;
  border-radius: 0px 7px 7px 0px;
  
  justify-content:flex-end; 
}
 
::placeholder {
  color: white;
  opacity: 60%;
}


/* login css */
.contain{
  height: 349px;
  width: 543px;
margin : 50px ;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 14px;
opacity: 0.90;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);
}
.signupcontain{
  height: 455px;
  width: 1043px;
margin : 50px ;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 14px;
opacity: 0.90;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);
}
</style>

