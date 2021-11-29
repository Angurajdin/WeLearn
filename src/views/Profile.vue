<template>
  <center>
    <div class="container">
      <h4><strong> User Profile</strong></h4>
      <div class="row">
        <div class="col">
          <strong> Edit your profile</strong>
        </div>
        <div class="col">
          <q-btn
            icon="edit"
            label="Edit"
            @click="updated = true"
            type="submit"
            color="primary"
          />
        </div>
      </div>
      <br />
      <!-- ******* Edit mode *******-->

      <q-form v-if="updated" @reset="null" class="q-gutter-md form">
        <q-input label="Username" v-model="data.userName" filled type="text">
        </q-input>

        <q-input
          label="Email address"
          v-model="data.emailID"
          filled
          readonly
          type="email"
        >
        </q-input>

        <q-input
          label="Password"
          v-model="data.password"
          filled
          type="password"
        >
        </q-input>
        <!-- <q-input hint="Date of birth" v-model="DOB" filled type="date">
        </q-input> -->
        <q-select
          filled
          v-model="data.gender"
          :options="options"
          label="Gender"
        />

        <!-- <q-input filled v-model="photourl" label="Photo URL" type="text">
        </q-input> -->
        <q-input label="Mobile No" v-model="data.mobile" filled type="text">
        </q-input>

        <q-input
          filled
          label="Github URL"
          v-model="data.githubLink"
          type="text"
        >
        </q-input>
        <q-input filled rows="4" label="Bio" v-model="data.bio" type="textarea">
        </q-input>

        <div style="text-align: center">
          <q-btn label="Save" @click="updateProfile" color="primary" />
        </div>
      </q-form>

      <!-- ******* view mode *******-->
      <q-form v-else class="q-gutter-md form">
        <q-input
          label="Username"
          v-model="store.userData.userName"
          filled
          type="text"
          readonly
        >
        </q-input>
        <!-- <q-input hint="Date of birth" v-model="DOB" readonly filled type="date">
        </q-input> -->
        <!-- <q-input
          filled
          v-model="photourl"
          readonly
          label="Photo URL"
          type="text"
        >
        </q-input> -->

        <q-input
          filled
          v-model="store.userData.emailID"
          readonly
          label="Email address"
          type="text"
        >
        </q-input>

        <q-select
          filled
          v-model="store.userData.gender"
          readonly
          :options="options"
          label="Gender"
        />

        <q-input
          filled
          v-model="store.userData.mobile"
          readonly
          label="Mobile No"
          type="text"
        >
        </q-input>

        <q-input
          filled
          v-model="store.userData.githubLink"
          readonly
          label="Github URL"
          type="text"
        >
        </q-input>

        <q-input
          filled
          v-model="store.userData.bio"
          rows="4"
          readonly
          label="Bio"
          type="textarea"
        >
        </q-input>
      </q-form>
    </div>
  </center>
</template>

<script>
import { ref, inject, defineComponent } from "vue";
import api from "../connections/api";

export default defineComponent({
  setup() {
    let updated = ref(false);
    let gender = ref("");
    let options = ["Male", "Female"];
    const store = inject("store");

    const data = ref(store.userData);

    const updateProfile = async () => {
      const res = await api.updateProfile({
        emailID: store.userData.emailID,
        data: data.value,
      });
      if (res.success) {
        alert("profile updated sucessfully");
        store.userData = data.value;
        updated.value = false;
      }
    };

    return { updateProfile, store, data, options, gender, updated };
  },
});
</script>

<style scoped>
.container {
  width: 600px;
  margin-top: -30px;
}
</style>