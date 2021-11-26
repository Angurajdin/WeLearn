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
      <q-btn
      unelevated
      icon="home"
      to="/"
      
      />
      <q-toolbar>
        <q-toolbar-title style="text-align: center">
          {{ $route.params.course }}
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
      <div v-else class="booklist">
        <br />

        <!-- filters & search -->
        <form @submit.prevent="search">
          <!-- <div>
            <input
              type="text"
              v-model="keyword"
              placeholder="Search..."
              class="input"
              required
            />
            <input type="submit" value="Search" class="button" />
          </div> -->
          <div>
            <label for="order">Order by</label>&nbsp;
            <select name="order" v-model="orderBy" @change="search">
              <option value="newest">newest</option>
              <option value="relevance">relevance</option>
            </select>
          </div>
        </form>
        <br />
        <!-- CARD FOR DISPLAY -->
        <center>
          <div class="loading" v-if="loadState == 'loading'"></div>
          <div v-if="books.length > 1">
            
            <div v-for="i in books" :key="i.id">
            <a style="text-decoration:none; color: black" :href="i.volumeInfo.previewLink" target="_blank">
              <q-card class="my-card" style="max-width: 200px">
                <img :src="i.volumeInfo.imageLinks?.smallThumbnail" />

                <q-card-section>
                  <div class="text-subtitle2">{{ i.volumeInfo.title }}</div>
                  <div class="text-subtitle1">{{ i.volumeInfo.subtitle }}</div>
                  
                </q-card-section>
                
                <!-- <q-card-section class="q-pt-none">
                  {{ i.volumeInfo.description.substring(0, 33) + "..." }}
                </q-card-section> -->
              </q-card>
             </a>
              <br />
            </div>
          </div>
        </center>
      </div>
    </q-drawer>

    <q-page-container>
      
       </q-page-container>
  </q-layout>
</template>

<script>
import { ref, defineComponent } from "vue";

import axios from "axios";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {},
  props: ["courseName"],
  setup(props) {
    let leftDrawerOpen = ref("True");
    let viewvideo = ref("true");
    let link = ref("video");
    const videos = ref(null);
    const router = useRoute();
    let courseName = router.params.course;

    const book = () => {
      viewvideo.value = false;
    };
    const viewVideoTrue = () => (viewvideo.value = true);

    const getVideos = async () => {
      videos.value = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDVv7hLhb3r8YQ5wDLjUc10f2Dm4OECHTY&type=video&part=snippet&maxResults=5&q=" +
          courseName
      );
      videos.value = videos.value.data.items;
      console.log(videos.value);
    };

    // if (videos.value == null) getVideos();

    /* **** BOok API **** */
    let books = ref([]);
    let keyword = router.params.course;
    let orderBy = ref("relevance");
    let maxResults = ref("10");
    let loadState = ref("");

    const search = () => {
      loadState.value = "loading";
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${router.params.course}&orderBy=${orderBy.value}&maxResults=${maxResults.value}&`
        )
        .then((response) => {
          console.log(response.data.items);
          books.value = response.data.items;
          loadState.value = "success";
        });
    };

    search();
    

    return {
      books,
      keyword,
      orderBy,
      maxResults,
      loadState,
      search,
      videos,
      leftDrawerOpen,
      viewvideo,
      book,
      link,
      viewVideoTrue,
    };
  },
});
</script>
