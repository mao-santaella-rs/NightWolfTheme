<template>
<div>
  <div class="main-container">
    <h1>{{header}}</h1>
    <article>
      <section>
        <h3>{{title}}</h3>
        <p>{{text}}</p>
        <a :href="link" target="_blank">Link</a>
      </section>
    </article>
  </div>
</div>
</template>

<script>
import component from './component'
export default {
  name: "Component",
  data() {
    return {
      header: "header",
      title: "Title",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos obcaecati aliquid et, commodi inventore delectus enim laborum voluptates",
      link: "https://www.google.com/"
    }
  },
  components: {
    component
  },
  watch: {},
  methods: {
    methodA() {
      console.log("methodA")
    }
  },
  computed: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 900px;
  display: flex;
  justify-content: center;
}
</style>
