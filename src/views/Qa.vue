<template> 
<center>
   <div class="row title items-start example-container fit row no-wrap justify-center items-center content-center">
<div class="example-cell col-4" tabindex="0"> <h4 style="color:white;"> TITLE</h4></div>
      <div class="example-cell" tabindex="0"> <q-btn class="doubt" label="Ask doubts" color="primary" @click="form = true" /></div>
 </div>
 </center>


 
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
            Lorem ipsum, dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam alias quaerat id deserunt neque quae natus optio ex magni earum nostrum maiores eos pariatur asperiores temporibus quasi nobis, praesentium at enim consequuntur eveniet eligendi dolores cum accusamus. Odit dolores velit consequuntur! Dignissimos eos numquam minima quo atque sint hic optio et quos accusamus dolorem exercitationem in, eaque cupiditate! Aliquid animi repellat modi odit consequuntur rerum vero incidunt corporis recusandae commodi molestias dolor quo inventore, maxime iste nesciunt aperiam. Id corrupti repellendus dolorum voluptatem nihil? Voluptates itaque in mollitia quia dignissimos modi repudiandae tempore eum reprehenderit sunt. Non aliquam quas corrupti. consectetur adipisicing elit. Maxime iusto rem voluptate amet? Quos nulla ex itaque nostrum eum maiores maxime modi ut soluta id atque, rem neque magnam delectus omnis ullam? Deleniti cum molestias voluptas nihil aperiam ex ipsam, natus rem quisquam ullam commodi rerum iste incidunt consequuntur exercitationem aut fugiat vitae tenetur, laborum iure qui, labore nam. Necessitatibus nobis error, beatae assumenda, sint ab incidunt rerum expedita quam, aut cupiditate accusamus? Exercitationem praesentium quo at omnis laborum eum inventore dolor sapiente atque laudantium ad minima deserunt modi in, iusto asperiores sunt autem ratione corporis consequatur illum. Voluptatum, blanditiis?
               </p>
          </div>
<div class="contain">
         <div class="answer">
          <q-input    style="max-width:90%;margin: 0px 0px 30px;" rounded outlined v-model="text" label="Answer" />
          </div>
          <div class="enter">
        <q-btn style="padding:15px 30px;  " push color="primary" label=" Submit " />
        </div>
        <div class="totalans">
        <p style="font-weight:600;font-size:18px;text-align:center;margin:3px">No of answers</p>
        </div>
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
 
.doubt{
    border-radius: 17px;
width: 157px;
height: 49px;
 
border: none;
color: white;
 


}
.title{
  margin-top: -7rem;
}
.question{
    max-height: auto;
margin : 50px ;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 44px;
opacity: 0.74;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);

}
.enter{
  flex-direction: row;flex-grow: 3;
}
.totalans{
  flex-direction: row;flex-grow: 3;

}
.questionarea{
 background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 44px;
opacity: 0.84;
backdrop-filter: blur(30px);
-webkit-backdrop-filter: blur(30px);  
}
.answer{
   flex-direction: row;flex-grow: 3;
}
.contain{
  display: flex;
  margin-top:40px;
}
</style>

