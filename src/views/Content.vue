 
  <template>
  <q-layout view="hHh lpR fFf">
    <q-header style="height: 60px" lass="bg-primary  text-white">
      <q-toolbar>
        <q-toolbar-title>
          <strong> {{ $route.params.course }} </strong>
        </q-toolbar-title>
        <q-btn to="/" flat round dense icon="home" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- tabs -->
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="Video" label="Video" icon="smart_display" />
          <q-tab name="Book" icon="auto_stories" label="Book" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Video">
            <div class="text-h6">Video results</div>

            <div v-for="v in videos" :key="v.id" class="reccomendation">
              <div class="preview">
              <a :href="'https://www.youtube.com/watch?v=' + v.id.videoId">
                <img
                  width="350"
                  alt="thumbnail"
                  style="padding:10px"
                  :src="v.snippet.thumbnails.medium.url"
                />
                  </a>
              </div>
              
            
              <div class="info">
                <div class="title">
                 {{v.snippet.title}}
                </div>
                <br>

                <div class="username">{{v.snippet.description}}</div>
                <br>
                <div class="view-info">
                  <div>{{v.snippet.channelTitle}}</div>
                  <div>&emsp;</div>
                  <div>{{v.snippet.publishedAt}}</div>
                 
                </div>
                
              </div>
             
               
            </div>
          </q-tab-panel>

          <q-tab-panel name="Book">
            <div class="text-h6">Book results</div>
            <div>
              <label for="order">Order by</label>&nbsp;
              <select name="order" v-model="orderBy" @change="search">
                <option value="newest">newest</option>
                <option value="relevance">relevance</option>
              </select>
            </div>

            <br />
            <!-- book CARD FOR DISPLAY -->

            <div class="loading" v-if="loadState == 'loading'"></div>
            <div v-if="books.length > 1">
              <div class="container">
                <div v-for="i in books" :key="i.id" class="card">
                  <a
                    style="text-decoration: none; color: black"
                    :href="i.volumeInfo.previewLink"
                    target="_blank"
                  >
                    <div class="card-header">
                      <img :src="i.volumeInfo.imageLinks?.thumbnail" alt="" />
                    </div>
                    <div class="card-body">
                      <span class="tag tag-teal">
                        Total pages- {{ i.volumeInfo.pageCount }}</span
                      >
                      <h4>
                        {{ i.volumeInfo.title }}
                      </h4>

                      <div class="user">
                        <img
                          :src="i.volumeInfo.imageLinks?.thumbnail"
                          alt="user"
                        />
                        <div class="user-info">
                          <h5>{{ i.volumeInfo.authors }}</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-page-container>
  </q-layout>
</template>
 

<script>
import { ref, defineComponent } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default defineComponent({
  props: ["courseName"],
  setup(props) {
    let tab = ref("Video");
    let link = ref("video");
    const videos = ref(null);
    const router = useRoute();
    const bookLink = ref(null);
    let courseName = router.params.course;

    //Youtube API

    const getVideos = async () => {
      videos.value = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDVv7hLhb3r8YQ5wDLjUc10f2Dm4OECHTY&type=video&part=snippet&maxResults=5&q=" +
          courseName
      );
      videos.value = videos.value.data.items;
      console.log(videos.value);
    };

     if (videos.value == null) getVideos();

    // Book api
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
      tab,
      books,
      bookLink,

      keyword,
      filter,
      orderBy,
      maxResults,
      loadState,
      search,
      videos,

      link,
    };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #f7f8fc;
  font-family: "Roboto", sans-serif;
  color: #10182f;
}
.container {
  display: flex;
  max-width: 1500px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 15px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 350px;
  margin-bottom: 100px;
}
.card-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #000000;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}

* {
  /*   font-size: 1.5rem; */
  font-family: "Roboto", sans-serif;
}

.reccomendation {
  display: flex;
  cursor: pointer;
  margin: 15px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  padding: 50px;
  margin-bottom: 50px;
}

.view-info {
  display: flex;
  justify-content: flex-start;
}

.preview {
  position: relative;
  margin-right: 0.5rem;
   
}

 

.title {
  font-weight: bold;
  font-size: 1.25rem;
}

.username {
  font-size: 1.1rem;
}

</style>