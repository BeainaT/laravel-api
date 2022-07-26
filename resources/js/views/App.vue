<template>
  <div>
    <h1>front office with vue</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
  </div>
</template>

<script>

export default {
    name: 'App',
    data() {
      return {
        posts: []
      };
    },
    created() {
      axios.get('http://127.0.0.1:8000/api/posts')
        .then(res => {
          this.posts = res.data;
        })
        .catch(e => {
          console.log(e);
        })
    }
}
</script>

<style>

</style>