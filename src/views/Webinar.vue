<template>
  <div>
  <h4>You can conduct your own Webinar, here</h4>
  
  <div class="q-pa-md q-gutter-sm">
     
    <q-btn class="getstarted" label="Get started" color="primary" @click="form = true" />

    
 
    <q-dialog v-model="form" persistent>
      
      <q-card style="min-width: 450px">
        <q-card-section>
          <div class="text-subtitle2">Webinar title</div>
          <q-input dense v-model="title"  autofocus @keyup.enter="form = false" />
          
          <div class="text-subtitle2">Description</div>
          <q-input dense type="textarea" rows="4" v-model="description" autofocus @keyup.enter="form = false" />
          
          <div class="text-subtitle2">Date </div>
          <q-input dense  type="date" v-model="date" autofocus @keyup.enter="form = false" />
          
          <div class="text-subtitle2">Time</div>
          <q-input dense v-model="time" type="time" autofocus @keyup.enter="form = false" />

           <div class="text-subtitle2">Link</div>
          <q-input dense v-model="Link"   autofocus @keyup.enter="form = false" />

           <div class="text-subtitle2">Duration</div>
          <q-input dense v-model="duration"   autofocus @keyup.enter="form = false" />

           <div class="text-subtitle2">Platform</div>
          <q-input dense v-model="platoform"  autofocus @keyup.enter="form = false" />

          
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Post" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>


  </div>
  <br>
  <br>
  <br>
  <center>
 <q-card class="my-card post" style="max-width: 1300px;">
      <q-card-section>
        <div class="left">
          left
        </div>
        <div class="right">
          righ
        </div>
      </q-card-section>
    </q-card>
  </center>
</template>

<script>
import { ref } from 'vue'
export default {
setup(){
 
let form = ref(false)
let address = ref('')

return { form,address}
}
}
</script>

<style>
h4 {
  color: white;
  margin-left: 10px;
  position: fixed;
  right: 540px;
}
.getstarted{
 
border-radius: 17px;
width: 157px;
height: 49px;
position: fixed;
right: 350px;
border: none;
color: white;
top:145px;

}
.post{
height: 349px;
margin-top: 50px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 44px;
opacity: 0.74;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);
}
 
</style> */