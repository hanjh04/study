<template>
  <ul class="news-list">
    <li class="post" v-for="news in newsList" v-bind:key="news.title">
      <div class="points">
        {{ news.points }}
      </div>
      <div>
        <p class="news-title">{{ news.title }}</p>
        <small class="link-text">
          by
          <router-link :to="`user/${news.user}`">
            {{ news.user }}
          </router-link>
        </small>
        <small class="link-text">
          {{ news.time_ago }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    newsList() {
      if (this.$route.name === 'news') {
        return this.$store.state.news;
      } else {
        return this.$store.state.jobs;
      }   
    }
  },
  // created() {
  //   console.log(this.$route.name);
  // }
}
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>