<template>
<!-- Main tab -->
  <q-layout view="lhh lpR fFf">
    <q-header
      elevated
      class="bg-light-blue-5 text-white"
      style="height: 72px"
      height-hint="98"
    >
      <!-- buttons -->
      <!-- <q-btn
        style="margin: 20px; text-align: center"
        outline
        rounded
        align="right"
        color="white"
        label="back to course"
      /> -->
      
      <q-btn outline   rounded color="white" label="Save content" />
      <q-toolbar>
        <q-toolbar-title> Course title </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="q-gutter-y-md" style="max-width: 400px">
        <q-tabs
          v-model="tab"
          indicator-color="primary"
          class="bg-white text-primary"
        >
          <q-tab name="Video" @click="viewvideo = true" icon="smart_display" label="Video" />
          <q-tab name="Book" @click="book" icon="auto_stories" label="Book" />
        </q-tabs>
      </div>
      <!-- content_drawer -->

      <div  v-if="viewvideo" class="videolist">
        <h6 style="text-align:left; margin:25px 20px;font-weight:600;letter-spacing: 0.52px;"><i class="fas fa-list"></i>   Playlist title</h6>
        <div class="q-pa-md" style="max-width: 400px">
          <q-list bordered padding style="margin-top:-30px;" class="rounded-borders text-primary">
            <q-item
              clickable
              v-ripple
              :active="link === 'inbox'"
              @click="link = 'inbox'"
              active-class="my-menu-link"
              v-for="i in 10"
              :key="i"
            >
              <q-item-section avatar>
                <q-icon name="play_circle_filled" />
              </q-item-section>

              <q-item-section>Inbox</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div v-else class="booklist">hence</div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let leftDrawerOpen = ref("True");
    let viewvideo = ref('true');
    const book = () => {
      viewvideo.value = false;
      console.log("fff")
    };
    return { leftDrawerOpen, viewvideo, book };
  },
};
</script>