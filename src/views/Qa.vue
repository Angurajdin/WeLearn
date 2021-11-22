<template>
  <center>
    <div
      class="
        row
        title
        items-start
        example-container
        fit
        row
        no-wrap
        justify-center
        items-center
        content-center
      "
    >
      <div class="example-cell col-4" tabindex="0">
        <h4 style="color: white">
          {{
            nNfkGizHXAMm92ANoLnchDVw5nIV1qCZy2VYYK4BouU2rIEyl9uohgYpcrlNytGgmMttTi0NiLncxnSogTCX25CONAjmcpvRCXnfXG4TOinPm8ttQKc07nFzuc3njLxtLrfpnJOXzeU2m
          }}{{ title }}
        </h4>
      </div>
      <div class="example-cell" tabindex="0">
        <q-btn
          class="doubt"
          label="Ask doubts"
          color="primary"
          @click="form = true"
        />
      </div>
    </div>
  </center>

  <q-dialog v-model="form" persistent>
    <q-card class="questionarea" style="min-width: 450px">
      <p
        style="color: black; font-weight: 660; margin: 20px; text-align: center"
      >
        {{ title }}
      </p>

      <q-card-section>
        <div class="text-subtitle2">Your question</div>
        <q-input
          dense
          v-model="question"
          type="textarea"
          autofocus
          @keyup.enter="form = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Post" @click="postquestion" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- Card -->

  <q-card class="my-card question" style="max-width: 1300px">
    <q-card-section>
      <div class="left">
        <p
          style="
            font-size: 26px;
            text-transform: uppercase;
            font-weight: 500;
            margin: 10px 20px;
          "
        >
          Question
        </p>
        <p style="margin: 10px 20px">ANswer</p>
      </div>
      <div class="contain">
        <div class="answerdetails">
          <q-input
            style="max-width: 90%; margin: 0px 0px 30px"
            rounded
            outlined
            v-model="text"
            label="Answer"
          />
        </div>
        <div class="enter">
          <q-btn
            style="padding: 15px 30px"
            push
            color="primary"
            label=" Submit "
          />
        </div>
        <div class="totalans">
          <p
            style="
              font-weight: 600;
              font-size: 18px;
              text-align: center;
              margin: 3px;
            "
          >
            No of answers
          </p>
        </div>
      </div>
      {{ date }}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import api from "../connections/api";

export default defineComponent({
  props: ["topic"],
  setup(props) {
    let data = ref([]);
    let title = props.topic;
    let question = ref("");
    let answer = ref([]);
    const date = new Date();
    /* let currentUser = currentUser.value */

    const postquestion = async () => {
      const res = await api.discussion({
        question: question.value,
        topic: title,
        posteddate: date,
        doubtperson: "",
        answers: [],
      });
      if (res.success)
        console.log("question posted"), alert("Question posted sucessfully");
    };

    const getQuestions = async () => {
      try {
        const questions = await api.getQuestions({
          topic: title,
        });
        if (questions.success) {
          console.log(questions.data);
          data.value = questions.data;
        } else {
          console.log("error in retrieving data");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getQuestions();

    let form = ref(false);

    return { question, form, title, postquestion };
  },
});
</script>

<style scoped>
.doubt {
  border-radius: 17px;
  width: 157px;
  height: 49px;

  border: none;
  color: white;
}
.title {
  margin-top: -7rem;
}
.question {
  max-height: auto;
  margin: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 44px;
  opacity: 0.74;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}
.enter {
  flex-direction: row;
  flex-grow: 3;
}
.totalans {
  flex-direction: row;
  flex-grow: 3;
}
.questionarea {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 44px;
  opacity: 0.84;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}
.answerdetails {
  flex-direction: row;
  flex-grow: 3;
}
.contain {
  display: flex;
  margin-top: 40px;
}
</style>

