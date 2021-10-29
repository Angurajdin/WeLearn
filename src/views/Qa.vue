<template> 
 <h5>TITLE</h5>
 <q-btn class="doubt" label="Ask doubts" color="primary" @click="form = true" />
 
    <q-dialog v-model="form" persistent>
      
      <q-card class="questionarea" style="min-width: 450px">
        <p style="color:black;font-weight:660;margin:20px;text-align:center">Title</p>
      
        <q-card-section>
          <div class="text-subtitle2">Your question</div>
          <q-input dense v-model="question" type="textarea" autofocus @keyup.enter="form = false" />          
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Post" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Card -->

    <q-card class="my-card question"  style="max-width: 1300px;">
      <q-card-section>
        <div class="left">
          <p style="font-size : 36px;text-transform: uppercase;font-weight:500;margin:10px 20px ;">
            Question</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime iusto rem voluptate amet? Quos nulla ex itaque nostrum eum maiores maxime modi ut soluta id atque, rem neque magnam delectus omnis ullam? Deleniti cum molestias voluptas nihil aperiam ex ipsam, natus rem quisquam ullam commodi rerum iste incidunt consequuntur exercitationem aut fugiat vitae tenetur, laborum iure qui, labore nam. Necessitatibus nobis error, beatae assumenda, sint ab incidunt rerum expedita quam, aut cupiditate accusamus? Exercitationem praesentium quo at omnis laborum eum inventore dolor sapiente atque laudantium ad minima deserunt modi in, iusto asperiores sunt autem ratione corporis consequatur illum. Voluptatum, blanditiis?
               </p>
          </div>

         <div class="answer">
          <q-input    style="max-width:50%;margin: 0px 0px 30px;" rounded outlined v-model="text" label="Answer" />
          </div>
          <div class="enter">
        <q-btn style="padding:10px 30px; position:relative;" push color="primary" label=" Submit " />
        </div>
        <div class="totalans">
        <p>No of answers</p>
        </div>
 
  
      </q-card-section>
    </q-card>
</template>

<script>
import { ref } from 'vue'
export default {
setup(){
 
let form = ref(false)
 
 
return { form}
}
}
</script>

<style scoped>
h5 {
  color: white;
  margin-left: 10px;
   
  text-align: center;
  right: 540px;
}
.doubt{
    border-radius: 17px;
width: 157px;
height: 49px;
position: fixed;
right: 350px;
border: none;
color: white;
top:145px;


}
.question{
    min-height: 349px;
margin : 50px ;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 44px;
opacity: 0.74;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);
display: flex;
}
.totalans{
  justify-content:flex-end;   flex: 1 0 auto;

}
.questionarea{
 background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 44px;
opacity: 0.84;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);  
}
</style>

