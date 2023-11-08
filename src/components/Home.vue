<template>
  <notifications
      class="mt-3 ms-3"
      :duration="2000"
      :width="250"
      animation-name="v-fade-left"
      position="top left"
  />
  <div class="container my-5">
    <h2 class="text-center">News</h2>
    <div class="row d-flex justify-content-center mt-3" v-if="newsList.length">
      <div class="col-md-6">
        <div style="list-style-type: none;">
          <li
              v-for="(news,index) in newsList"
              v-bind:key="index"
              class="row"
              style="display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px 24px;
                        border-radius: 6px;
                        margin-bottom: 12px;
                        border: 2px solid hsla(0, 0%, 0%, 0.35);
                    "
          >
            <div class="col-4">
              <router-link :to="{ name: 'News Details', params: {id: news.id}}">{{ news.title }}</router-link>
            </div>
            <div class="col-4">
              <span>{{ news.shortDescription }}</span>
            </div>
            <div class="col-4">
              <span>{{ news.createdAt }}</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {getNewsList} from "@/store/services/api.service";
import {News} from "@/store/types/news.type";

export default {
  data() {
    return {
      newsList: [] as News[],
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews(): Promise<News[]> {
      try {
        const response = await getNewsList();

        this.newsList = response;
      } catch (error) {
        this.$notify({type: 'error', text: error});
      }
    },
  },
};
</script>
