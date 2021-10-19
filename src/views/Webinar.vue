/* /* <template>
  <div>
  <h4>You can conduct your own Webinar, here</h4>
  
  <div class="q-pa-md q-gutter-sm">
     
    <q-btn class="getstarted" label="Get started" color="primary" @click="form = true" />

    
 
    <q-dialog v-model="form" persistent>
      
      <q-card style="min-width: 450px">
        <p style="color:black;font-weight:660;margin:20px;text-align:center">Fill your Webinar Details</p>
      
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
 <q-card class="my-card post"  style="max-width: 1300px;">
      <q-card-section>
        <div class="left">
          <p style="font-size : 36px;text-transform: uppercase;font-weight:500;margin:10px 20px ;">
            title</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore nisi quas, autem reiciendis corporis in iusto recusandae dolorum, accusamus ipsam. Maiores nostrum recusandae voluptatem dolores maxime fugiat modi fuga!
               </p>
          </div>
        <div class="right">
          
        <p class="details"> <i class="fas fa-calendar"></i><br>Time</p>
        <p class="details"><i class="fas fa-clock"></i><br>duration</p>
        <p class="details"><i class="fas fa-video"></i><br>platform</p>
        <button class="details btn-part"  ><i class="fas fa-chevron-circle-right"></i><br>PARTICIPATE</button>

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
margin : 50px ;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 44px;
opacity: 0.74;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);
}
  .right{
  margin: 20px auto;
  display:grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 40%;
  position: fixed;
 left: 50rem;

}

.left{
  text-align: left;
   max-width: 56%;
   float: left;
}
.btn-part{
  background: transparent linear-gradient(90deg, #2bfff4 0%, #009df8 100%) 0% 0% no-repeat padding-box;
box-shadow: 30px black;
cursor: pointer;
}
.fas{
font-size:  35px;
text-align: center;
margin: 20px;

 
}

.details{
   
  border-color: rgb(0, 0, 0);
  border: 1px solid;
  background-color: #ffffff   no-repeat padding-box;

    border-radius:10px;
    color:black;
    align-items:center;
    justify-content:center;
    width: 178px;
height: 112px;
 
}
 
</style> */ */

 */