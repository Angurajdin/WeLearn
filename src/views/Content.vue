<template>
  <!-- Main tab -->
  <q-layout view="lhh lpR fFf">
    <q-header
      elevated
      class="bg-light-blue-5 text-white"
      style="height: 72px"
      height-hint="98"
    >
      <q-btn
        outline
        style="position: fixed; right: 30px; margin: 30px"
        rounded
        color="white"
        label="Save content"
      />
      <q-toolbar>
        <q-toolbar-title style="text-align: center">
          Course title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="q-gutter-y-md" style="max-width: 400px">
        <q-tabs
          v-model="tab"
          indicator-color="primary"
          class="bg-white text-primary"
        >
          <q-tab
            name="Video"
            @click="viewVideoTrue"
            icon="smart_display"
            label="Video"
          />
          <q-tab name="Book" @click="book" icon="auto_stories" label="Book" />
        </q-tabs>
      </div>
      <!-- content_drawer -->

      <div v-if="viewvideo" class="videolist">
        <h6
          style="
            text-align: left;
            margin: 25px 20px;
            font-weight: 600;
            letter-spacing: 0.52px;
          "
        >
          <i class="fas fa-list"></i> Playlist title
        </h6>
        <div class="q-pa-md" style="max-width: 350px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar
                    icon="smart_display"
                    color="primary"
                    text-color="white"
                  />
                </q-item-section>

                <q-item-section> title </q-item-section>

                <q-item-section side> </q-item-section>
              </template>

              <q-card>
                <q-card-section>
                  <q-list bordered padding class="rounded-borders text-primary">
                    <q-item
                      clickable
                      v-ripple
                      :active="link === 'video'"
                      @click="link = 'video'"
                      active-class="my-menu-link"
                    >
                      <q-item-section avatar>
                        <q-icon name="play_arrow" />
                      </q-item-section>

                      <q-item-section>Video 1</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator />
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
    let viewvideo = ref("true");
    let link = ref("video");
    const book = () => {
      viewvideo.value = false;
    };
    const viewVideoTrue = () => viewvideo.value = true;

    return { leftDrawerOpen, viewvideo, book, link, viewVideoTrue };
  },
};
</script>