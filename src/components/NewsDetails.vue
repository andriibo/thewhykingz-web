<template>
  <notifications
      class="mt-3 ms-3"
      :duration="2000"
      :width="250"
      animation-name="v-fade-left"
      position="top left"
  />
  <div class="container my-5">
    <button class="btn btn-primary btn-s" @click="goToHome">Go back</button>
    <h2 class="text-center">News</h2>
    <div v-if="news">
      <div class="row">
        <div class="col-md-6">ID</div>
        <div class="col-md-6">{{ news.id }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Title</div>
        <div class="col-md-6">{{ news.title }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Short Description</div>
        <div class="col-md-6">{{ news.shortDescription }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Description</div>
        <div class="col-md-6">{{ news.description }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Created At</div>
        <div class="col-md-6">{{ news.createdAt }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Status</div>
        <div class="col-md-6">{{ news.status }}
          <button class="btn btn-primary btn-s float-end" @click="changeNewsStatus">Change Status</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {NewsStatusEnum} from "@/enums/NewsStatusEnum";
import {changeStatus, getNewsById} from "@/store/services/api.service";
import {NewsDetails} from "@/store/types/news-details.type";

export default {
  data() {
    return {
      news: {} as NewsDetails,
    };
  },
  mounted() {
    this.getNewsDetails();
  },
  methods: {
    async getNewsDetails(): Promise<NewsDetails> {
      try {
        this.news = await getNewsById(this.$route.params.id);
      } catch (error) {
        this.$notify({type: 'error', text: error});
      }
    },
    async changeNewsStatus() {
      try {
        const status = this.news.status === NewsStatusEnum.active ? NewsStatusEnum.hidden : NewsStatusEnum.active;
        await changeStatus(this.$route.params.id, status);
        this.news.status = status;
        this.$notify({type: 'success', text: 'Status updated successfully.'});
      } catch (error) {
        this.$notify({type: 'error', text: error});
      }
    },
    goToHome() {
      this.$router.push({name: 'Home'});
    }
  },
};
</script>
