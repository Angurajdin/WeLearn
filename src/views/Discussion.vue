<template>
  <h5>Here, the Discussion World clear your doubts by raising questions</h5>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTyg1ypb3TiEM39HrFp7vkB-lxSNvXbjl5Q&usqp=CAU"
      />

      <q-card-section>
        <div class="text-h6">Java programming</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <center>
          <q-btn
            class="glossy"
            rounded
            color="primary"
            label="View discussion"
          />
        </center>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <img
        src="https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png"
      />

      <q-card-section>
        <div class="text-h6">React Js</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <center>
          <q-btn
            class="glossy"
            rounded
            color="primary"
            label="View discussion"
          />
        </center>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h5 {
  color: white;
  margin-left: 10px;
  text-align: center;
}
.my-card {
  border-radius: 17px;
  width: 252px;
  height: 286px;
  margin-left: 100px;
}
</style>