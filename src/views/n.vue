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
      <q-btn unelevated icon="home" to="/" />
      <q-toolbar>
        <q-toolbar-title style="text-align: center">
          {{ $route.params.course }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
 <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="bg-primary text-white shadow-2"
        :breakpoint="0"
      >
        <q-tab   name="Video"
            @click="viewVideoTrue"
            icon="smart_display"
            label="Video"  />
        <q-tab  name="Book" @click="book" icon="auto_stories" label="Book"  />
      </q-tabs>
 
      <div class="q-gutter-y-md" style="max-width: 400px">
        
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
        <div v-for="v in videos" :key="v.id" class="ytcard">
            <div class="q-pa-md">
               {{v.id.videoId}}

               
    <q-video
      :ratio="16/9"
       :src=" 'https://www.youtube.com/watch?v='+'v.id.videoId'"
    />
  </div>

        </div>
      </div>

      <!-- booktab -->
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
              <!-- <a
                style="text-decoration: none; color: black"
                :href="i.volumeInfo.previewLink"
                target="_blank"
              > -->

              <q-card clickable class="my-card" style="max-width: 200px">
                <img :src="i.volumeInfo.imageLinks?.smallThumbnail" />

                <q-card-section>
                  <div class="text-subtitle2">{{ i.volumeInfo.title }}</div>
                  <div class="text-subtitle1">
                    {{ i.volumeInfo.subtitle }}
                  </div>
                </q-card-section>

                <button @click="viewBook(i.volumeInfo.previewLink)">View Book</button>
                <br />

                <!-- <q-card-section class="q-pt-none">
                  {{ i.volumeInfo.description.substring(0, 33) + "..." }}
                </q-card-section> -->
              </q-card>

              <!-- </a> -->
              <br />
            </div>
          </div>
        </center>
      </div>
    

    <q-page-container>
      <div v-if="viewvideo">
        <center>

          <youtube-vue3 :videoid="video_id" :loop="loop" :autoplay="autoplay" />
          <!-- <iframe
            id="ytplayer"
            type="text/html"
            width="1060"
            height="620"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameborder="0"
          ></iframe> -->
        </center>
      </div>
      <div v-else>
        <center>
          <iframe
            frameborder="0"
            scrolling="no"
            style="border: 0px;modal: true,
            resizable: false,
            autoResize: false,"
            src="bookLink"
            width="1060"
            height="620"
            :alt="pic"
          ></iframe>
        </center>
      </div>
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
    const bookLink = ref(null);
    let courseName = router.params.course;

    const viewBook = (bookLinkPreview) => {
      bookLink.value = bookLinkPreview;
      console.log(bookLink.value);
    };

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
    let filter = ref("ebooks");

    const search = () => {
      loadState.value = "loading";
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${router.params.course}&filter=${filter.value}&orderBy=${orderBy.value}&maxResults=${maxResults.value}&`
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
      bookLink,
      viewBook,
      keyword,
      filter,
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


 <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>