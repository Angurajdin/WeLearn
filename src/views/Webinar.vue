/* /* /*
<template>
  <div>
    <h5>You can conduct your own Webinar, here</h5>

    <div class="q-pa-md q-gutter-sm">
      <q-btn
        class="getstarted"
        icon="add"
        label="CREATE"
        color="primary"
        @click="form = true"
      />

      <q-dialog v-model="form" persistent>
        <q-card style="min-width: 450px" class="webinardetail">
          <p
            style="
              color: black;
              font-weight: 660;
              margin-top: 20px;
              text-align: center;
            "
          >
            Fill your Webinar Details
          </p>

          <q-card-section>
            <div class="text-subtitle2">Webinar title</div>
            <q-input
              dense
              v-model="title"
              autofocus
              @keyup.enter="form = false"
            />

            <div class="text-subtitle2">Conducted by</div>
            <q-input
              dense
              v-model="conductedby"
              autofocus
              @keyup.enter="form = false"
            />

            <div class="text-subtitle2">Description</div>
            <q-input
              dense
              type="textarea"
              rows="3"
              v-model="description"
              autofocus
              @keyup.enter="form = false"
            />

            <div class="text-subtitle2">Date</div>

            <div class="q-pa-md">
              <div class="q-mb-sm">
                <q-badge color="teal"> Model: {{ date }} </q-badge>
              </div>

              <q-btn icon="event" round color="primary">
                <q-popup-proxy
                  @before-show="updateProxy"
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date" today-btn :options="minDate">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn
                        label="Cancel"
                        color="primary"
                        flat
                        v-close-popup
                      />
                      <q-btn
                        label="OK"
                        color="primary"
                        flat
                        @click="save"
                        v-close-popup
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-btn>
            </div>

            <div class="q-pa-md">
              <div class="q-mb-sm">
                <q-badge color="teal"> Model: {{ time }} </q-badge>
              </div>

              <q-btn icon="access_time" round color="primary">
                <q-popup-proxy
                  @before-show="updateProxy"
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time :options="minTime" v-model="time">
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn
                        label="Cancel"
                        color="primary"
                        flat
                        v-close-popup
                      />
                      <q-btn label="OK" color="primary" flat v-close-popup />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-btn>
            </div>

            <div class="text-subtitle2">Link</div>
            <q-input
              dense
              v-model="link"
              autofocus
              @keyup.enter="form = false"
            />

            <div class="text-subtitle2">Duration (in hours)</div>
            <q-input
              dense
              v-model="duration"
              autofocus
              @keyup.enter="form = false"
            />

            <div class="text-subtitle2">Platform</div>
            <q-input
              dense
              v-model="platform"
              autofocus
              @keyup.enter="form = false"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn @click="onSubmit" flat label="Post" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
  <br />
  <div style="text-align: center">
    <div v-for="i in data" :key="i">
      <q-card class="my-card column post">
        <q-card-section horizontal class="row">
          <q-card-section class="column left">
            <p
              style="
                font-size: 36px;
                text-transform: uppercase;
                font-weight: 500;
                text-align: left;
              "
            >
              {{ i.title }}
            </p>
            <strong> Conducted by - {{ i.conductedby }}</strong> <br />
            <p style="text-align: left">
              {{ i.description }}
            </p>
          </q-card-section>
          <q-card-section></q-card-section>
          <q-card-section class="column right col-3">
            <p class="details">
              <i class="fas fa-calendar"></i><br />Date - {{ i.date }}
              <br />Time -{{ i.time }}
            </p>
            <p class="details">
              <i class="fas fa-clock"></i><br />{{ i.duration }} Hours
            </p>
            <p class="details">
              <i class="fas fa-video"></i><br />{{ i.platform }}
            </p>
            <button @click="showlink = true" class="details btn-part">
              <i class="fas fa-chevron-circle-right"></i><br />PARTICIPATE
            </button>
          </q-card-section>
        </q-card-section>

        <div v-if="showlink">
          <q-banner class="bg-grey-3" style="border-radius: 44px">
            <template v-slot:avatar>
              <q-icon name="link" color="primary" />
            </template>
            <strong>{{ i.link }}</strong>
            <template v-slot:action>
              <q-btn
                flat
                color="black"
                @click="showlink = false"
                :href="i.link"
                icon="login"
              >
                <a
                  style="text-decoration: none; color: black; margin-left: 10px"
                  :href="i.link"
                  >join Meeting</a
                >
              </q-btn>
            </template>
          </q-banner>
        </div>
      </q-card>
      <!-- copy link -->
    </div>
  </div>
  <br />
</template>

<script>
import { ref, defineComponent } from "vue";
import api from "../connections/api";
import { useRoute } from "vue-router";
/* const nodemailer = require('nodemailer');  */

export default defineComponent({
  setup() {
    let form = ref(false);
    let title = ref("");
    let conductedby = ref("");
    let description = ref("");
    let time = ref("");
    let date = ref("");
    let platform = ref("");
    let duration = ref("");
    let link = ref("");
    const data = ref([]);
    const router = useRoute();
    let showlink = ref(false);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var minutes = today.getMinutes();
    var hour = today.getHours();

    today = yyyy + "/" + mm + "/" + dd;

    const minDate = (date) => {
      return date >= today.toString();
    };

    const minTime = (hr, min) => {
      if (hr < hour) {
        return false;
      }
      if (min !== null && hr == hour && min < minutes) {
        return false;
      }

      return true;
    };

    const getMeetings = async () => {
      try {
        const meetings = await api.getMeeting();
        if (meetings.success) {
          data.value = meetings.data;
        } else {
          console.log("error in retrieving data");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getMeetings();

    const onSubmit = async () => {
      /* console.log("dfhd"); */
      const res = await api.meeting({
        title: title.value,
        conductedby: conductedby.value,
        description: description.value,
        time: time.value,
        date: date.value,
        platform: platform.value,
        duration: duration.value,
        link: link.value,
      });
      if (res.success) {
        console.log("meeting created");
        alert("Your webinar details posted sucessfully");
        getMeetings();
      } else error.value = res.message;
    };

    //Copy clipboard

    const copy = () => {
      try {
        navigator.clipboard.writeText(link);
      } catch (e) {
        throw e;
      }
    };

    // past date disable

    /* NODEMAILER 
        const joinMeeting = async() => {
           

        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "20mx118@psgtech.ac.in",
            pass: "mca124816"
          }
        });
        
        await transporter.sendMail({
          from: "20mx118@psgtech.ac.in",
          to: "20mx101@psgtech.ac.in",
          subject: "Webinar details",
          text: "This is the link for webinar",
        })
       
      }
 NODEMAILER ENDS */

    return {
      /* joinMeeting, nodemailer, transporter, info, */ data,
      copy,
      minDate,
      minTime,
      onSubmit,
      form,
      title,
      conductedby,
      date,
      description,
      time,
      link,
      duration,
      platform,
      showlink,
    };
  },
});
</script>

<style scoped>
h5 {
  color: white;
  margin-left: 10px;
  position: fixed;
  top: 120px;
  right: 580px;
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
  min-height: 349px;
  margin: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 44px;
  opacity: 0.74;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  display: flex;
}

.column.right {
  margin: 20px auto;
  display: grid;
  grid-template-columns: 200px 200px;
  /*grid-row: auto auto;*/
  grid-row: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 35%;
}

.column.left {
  width: 65%;
}

.btn-part {
  background: transparent linear-gradient(90deg, #2bfff4 0%, #009df8 100%) 0% 0%
    no-repeat padding-box;
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
  height: 122px;
}

.webinardetail {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 24px;
  opacity: 0.9;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  width: 600px;
}
</style> */