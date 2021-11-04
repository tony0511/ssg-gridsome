<template>
  <Layout>
    <h1>{{ general.title }}</h1>
    <p>{{general.sub_title}}</p>
    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <g-image :src="`${GRIDSOME_STRAPI_HOST}${general.cover.url}`" style="width:100%;" />
  </Layout>
</template>

<page-query>
# Write your query or mutation here
query {
  allStrapiGeneral {
    edges {
      node {
        title
        sub_title
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    general () {
      return this.$page.allStrapiGeneral.edges[0].node;
    },
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
