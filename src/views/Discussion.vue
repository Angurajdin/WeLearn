<template>
  <h5>Here, the Discussion World clear your doubts by raising questions</h5>

  <div class="q-pa-md row top items-start q-gutter-md">
    <q-card class="my-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTyg1ypb3TiEM39HrFp7vkB-lxSNvXbjl5Q&usqp=CAU"
      />

      <q-card-section>
        <div class="text-h6">{{Java}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <center>
            <router-link  style="text-decoration:none" :to="{name: 'Qa', params:{topic : Java }}">
          <q-btn
            class="rounded"
            rounded
            color="primary"
            label="View discussion"
          />
            </router-link>
        </center>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <img
        src="https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png"
      />

      <q-card-section>
        <div class="text-h6">{{React}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <center>
          <router-link style="text-decoration:none" :to="{name: 'Qa', params:{topic : React  }}">
          <q-btn
            class="rounded"
            rounded
            color="primary"
            label="View discussion"
             
          />
          </router-link>
        </center>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {

  setup(){
    let Java ="Java Programming"
    let React = "React JS"
    return {Java,React}
  }
};
</script>

<style scoped>
h5 {
  color: white;
  margin-left: 10px;
  text-align: center;
  margin-top: -5rem;
}
.my-card {
  border-radius: 17px;
  width: 252px;
  height: 286px;
  margin-left: 100px;
}
.rounded{
  text-decoration: none;
}
 
</style>