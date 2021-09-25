<template>
  <div class="bg">
    <br />
    <div class="container">
      <div class="q-pa-md">
        <div class="q-gutter-y-md" narrow-indicator style="max-width: 600px">
          <q-tabs v-model="tab" class="text-white">
            <q-route-tab to="/" class="logo" label="We learn" />
            <q-route-tab to="/Explore"  label="Explore" />
            <q-route-tab to="/Seminar" label="Seminar" />
            <q-route-tab  to="/Discussion" label="Discussion" />
          </q-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped >
.bg {
  background: url("../assets/bg.png") no-repeat center center fixed;
  -webkit-background-size: contain, cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.container {
  max-width: 100rem;
  margin: 10px 25px;
  height: 50rem;
  box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(15px);
}
.logo {
  text-align: left;
font: normal normal bold 30px Qualy;

letter-spacing:2px;
}
</style>