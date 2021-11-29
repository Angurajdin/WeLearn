<template>
  <center>
    <div v-if="store.userData.emailID == null">
      <!--   Not available -->
    </div>
    <div
      v-else
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
          {{ title }}
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

  <div v-if="data.length > 0">
    <q-card
      v-for="(i, index) in data"
      :key="i['id']"
      class="my-card question"
      style="max-width: 1300px"
    >
      <q-card-section>
        <div class="left">
          <p style="font-size: 22px; font-weight: 400; margin: 10px 20px">
            {{ i["question"] }}
          </p>
          <div v-if="i['correctAnswers'].length > 0">
            <div v-for="(crtAnswer, index) in i['correctAnswers']" :key="index">
              <p style="margin: 10px 20px">{{ crtAnswer["answer"] }}</p>
            </div>
          </div>
        </div>
        <div class="contain">
          <div v-if="store.userData.emailID != i['doubtperson']">
            <div class="answerdetails">
              <q-input
                style="background-color: white; border: white solid"
                standout
                bottom-slots
                v-model="answers[index]"
                label="Your answer"
              >
                <template v-slot:prepend> </template>
                <template v-slot:append>
                  <q-icon
                    name="send"
                    @click="submitAnswer(index)"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </div>
          </div>
          <div class="totalans">
            <br />
            <p
              style="
                font-weight: 600;
                font-size: 18px;
                text-align: center;
                margin: 3px;
              "
            >
              No of answers {{ i["answers"].length }}
            </p>
          </div>
        </div>
        Posten on &nbsp; {{ i["posteddate"] }} <br /><br />

        <!--  total answers list-->

        <q-expansion-item
          expand-icon-toggle
          expand-separator
          icon="question_answer"
          label="Total answers"
        >
          <q-card>
            <q-card-section>
              <!-- list -->
              <q-banner
                v-for="(ans, index) in i['answers']"
                :key="index"
                inline-actions
                rounded
                class="bg-white text-black"
              >
                <p>{{ ans["answer"] }}</p>
                <template v-slot:action>
                  <div v-if="store.userData.emailID == i['doubtperson']">
                    <div v-if="!i['correctAnswers'].includes(ans)">
                      <q-btn
                        flat
                        icon="task_alt"
                        @click="correctAnswer(index, ans)"
                        color="green"
                        label="Mark as correct"
                      />
                    </div>
                    <q-seperator />
                  </div>
                </template>
              </q-banner>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-card-section>
    </q-card>
  </div>
  <div v-else>
    <p style="color: white; font-weight: 660; margin: 20px; text-align: center">
      No questions in this Discussions
    </p>
  </div>
</template>

<script>
import { defineComponent, ref, inject } from "vue";
import api from "../connections/api";
import moment from "moment";

export default defineComponent({
  props: ["course", "topic"],
  setup(props) {
    const store = inject("store");
    let data = ref([]);
    let title = props.topic;
    let question = ref("");
    let answers = ref([]);
    const date = moment().format("MMM Do YY");

    const postquestion = async () => {
      const res = await api.discussion({
        question: question.value,
        topic: title,
        posteddate: date,
        doubtperson: store.userData.emailID,
        answers: [],
        correctAnswers: [],
      });
      if (res.success) {
        console.log("question posted");
        alert("Question posted sucessfully");
        getQuestions();
      }
    };

    const submitAnswer = async (index) => {
      const res = await api.submitAnswer({
        id: data.value[index]._id,
        data: [
          {
            answer: answers.value[index],
            answeredPerson: store.userData.emailID,
            dateTime: date,
          },
          ...data.value[index].answers,
        ],
      });
      if (res.success) {
        alert("Answer added sucessfully");
        answers.value[index] = "";
        getQuestions();
      }
    };

    const getQuestions = async () => {
      try {
        const questions = await api.getQuestions({
          topic: title,
        });
        if (questions.success) {
          data.value = questions.data;
          for (let i = 0; i < data.value.length; i++) {
            answers.value.push("");
            // for (var ans in data.value[i]["answers"]) {
            //   console.log(
            //     data.value[i]["correctAnswers"].includes(
            //       data.value[i]["answers"][ans]
            //     )
            //   );
            // }
          }
        } else {
          console.log("error in retrieving data");
        }
      } catch (e) {
        console.log(e);
      }
    };

    const correctAnswer = async (index, answer) => {
      try {
        const res = await api.correctAnswer({
          id: data.value[index]._id,
          data: [answer, ...data.value[index].correctAnswers],
        });
      } catch (e) {
        console.log(e);
      }
    };

    getQuestions();
    let form = ref(false);

    return {
      store,
      submitAnswer,
      answers,
      correctAnswer,
      question,
      form,
      title,
      postquestion,
      data,
    };
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