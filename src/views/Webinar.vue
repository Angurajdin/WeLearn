/* /*
<template>
  <div>
    <h4>You can conduct your own Webinar, here</h4>

    <div class="q-pa-md q-gutter-sm">

      <q-btn class="getstarted" label="Get started" color="primary" @click="form = true"/>


      <q-dialog v-model="form" persistent>

        <q-card style="min-width: 450px" class="webinardetail">
          <p style="color:black;font-weight:660;margin-top:20px;text-align:center">Fill your Webinar Details</p>

          <q-card-section>
            <div class="text-subtitle2">Webinar title</div>
            <q-input dense v-model="title" autofocus @keyup.enter="form = false"/>

            <div class="text-subtitle2">Description</div>
            <q-input dense type="textarea" rows="4" v-model="description" autofocus @keyup.enter="form = false"/>

            <div class="text-subtitle2">Date</div>
            <q-input dense type="date" v-model="date" autofocus @keyup.enter="form = false"/>

            <div class="text-subtitle2">Time</div>
            <q-input dense v-model="time" type="time" autofocus @keyup.enter="form = false"/>

            <div class="text-subtitle2">Link</div>
            <q-input dense v-model="link" autofocus @keyup.enter="form = false"/>

            <div class="text-subtitle2">Duration</div>
            <q-input dense v-model="duration" autofocus @keyup.enter="form = false"/>

            <div class="text-subtitle2">Platform</div>
            <q-input dense v-model="platform" autofocus @keyup.enter="form = false"/>


          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup/>
            <q-btn @click="onSubmit" flat label="Post" v-close-popup  />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

  </div>
  <br>
  <br>
  <br>
  <div style="text-align: center;">
    <q-card class="my-card post" style="max-width: 1300px;">
      <q-card-section>
        <div class="left">
          <p style="font-size : 36px;text-transform: uppercase;font-weight:500;margin:10px 20px ;">
            title</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore nisi quas, autem reiciendis corporis
            in iusto recusandae dolorum, accusamus ipsam. Maiores nostrum recusandae voluptatem dolores maxime fugiat
            modi fuga!
          </p>
        </div>
        <div class="right">

          <p class="details"><i class="fas fa-calendar"></i><br>Time</p>
          <p class="details"><i class="fas fa-clock"></i><br>duration</p>
          <p class="details"><i class="fas fa-video"></i><br>platform</p>
          <button class="details btn-part"><i class="fas fa-chevron-circle-right"></i><br>PARTICIPATE</button>

        </div>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
  import { ref, defineComponent } from 'vue'
  import api from "../connections/api";
  import { useRoute } from 'vue-router'


  export default defineComponent({
    setup() {
      let form = ref(false)
      let title = ref('');
      let description = ref('');
      let time = ref('');
      let date = ref('');
      let platform = ref('');
      let duration = ref('');
      let link = ref('');
      const router = useRoute()

      const onSubmit = async()=>{
        console.log("dfhd");
        const res = await api.meeting({
          title: title.value,
          description: description.value,
          time: title.value,
          date: date.value,
          platform: platform.value,
          duration: duration.value,
          link: link.value
        });
        if(res.success) console.log("meeting created");
        else    error.value = res.message;
      }

      return { onSubmit, form, title, date, description, time, link, duration, platform }
    }
  });
</script>

<style scoped>
h4 {
  color: white;
  margin-left: 10px;
  position: fixed;
  top: 110px;
  right: 540px;
}

.getstarted {

  border-radius: 17px;
  width: 157px;
  height: 49px;
  position: fixed;
  right: 350px;
  border: none;
  color: white;
  top: 145px;

}

.post {
  display: flex;
  height: 349px;
  margin: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 44px;
  opacity: 0.74;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}

.right {
  margin: 20px auto;
  display: grid;
  grid-template-columns: 200px 200px;
  //grid-row: auto auto;
  grid-row: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 40%;
  justify-content: flex-end;
  flex: 1 0 auto;

}

.left {
  text-align: left;
  width: 60%;
  float: left;
  flex: 1 1 auto;
}

.btn-part {
  background: transparent linear-gradient(90deg, #2bfff4 0%, #009df8 100%) 0% 0% no-repeat padding-box;
  /* box-shadow: 30px black;*/
  box-shadow: inset;
  cursor: pointer;
}

.fas {
  font-size: 35px;
  text-align: center;
  margin: 20px;


}

.details {

  border: 1px solid rgb(0, 0, 0);
/*background-color: #ffffff no-repeat padding-box;*/
  background-color: #ffffff;

  border-radius: 10px;
  color: black;
  align-items: center;
  justify-content: center;
  width: 178px;
  height: 112px;

}

.webinardetail {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 44px;
  opacity: 0.84;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}

</style>