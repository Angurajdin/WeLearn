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
<br>
      <!-- ******* Edit mode *******-->

      <q-form
        v-if="updated"
        @submit="update"
        @reset="null"
        class="q-gutter-md form"
      >
        <q-input label="Username" v-model="username" filled type="text">
        </q-input>

          <q-input label="Password" v-model="Password" filled type="password">
        </q-input>
        <q-input hint="Date of birth" v-model="DOB" filled type="date">
        </q-input>
        <q-select filled v-model="gender" :options="options" label="Gender" />

        <q-input filled v-model="photourl" label="Photo URL" type="text">
        </q-input>

        <q-input filled v-model="Githuburl" label="Github URL" type="text">
        </q-input>
        <q-input filled v-model="bio" rows="4" label="Bio" type="textarea">
        </q-input>

        <div style="text-align: center">
          <q-btn label="Save" type="submit" color="primary" />
        </div>
      </q-form>

      <!-- ******* view mode *******-->
      <q-form v-else class="q-gutter-md form">
        <q-input
          label="Username"
          v-model="username"
          filled
          type="text"
          readonly
        >
        </q-input>
        <q-input hint="Date of birth" v-model="DOB" readonly filled type="date">
        </q-input>
        <q-select
          filled
          v-model="gender"
          readonly
          :options="options"
          label="Gender"
        />

        <q-input
          filled
          v-model="photourl"
          readonly
          label="Photo URL"
          type="text"
        >
        </q-input>

        <q-input
          filled
          v-model="Githuburl"
          readonly
          label="Github URL"
          type="text"
        >
        </q-input>
        <q-input
          filled
          v-model="photourl"
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
import { ref } from "vue";
export default {
  setup() {
    let updated = ref(false);
    let gender = ref("");
    let options = ["Male", "Female", "Transgender"];
    return { options, gender, updated };
  },
};
</script>

<style>
.container {
  width: 600px;
  margin-top: -30px;
}
</style>