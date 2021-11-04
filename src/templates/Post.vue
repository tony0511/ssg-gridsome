<template>
  <Layout>
    <div>
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.creator }}&nbsp;&nbsp;{{ $page.post.created_at }}&nbsp;&nbsp;{{ $page.post.is_publish ? '已发布' : '未发布' }}</p>
      <p>
        <span v-for="tag in $page.post.tags" :key="tag.id"><g-link :to="`/tag/${tag.id}`">{{ tag.title }}</g-link>&nbsp;&nbsp;</span>
      </p>
      <div v-html="mdToHtml($page.post.content)"></div>
      <g-image :src="`${GRIDSOME_STRAPI_HOST}${$page.post.cover.url}`" style="width:100%;" />
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: strapiPost (id: $id) {
    id
    title
    is_publish
    content
    creator
    created_at
    cover {
      url
    }
    tags {
      id
      title
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default {
  name: 'PostPage',
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  // metaInfo: {
  //   title: ''
  // }
  methods: {
    mdToHtml(str) {
      return md.render(str);
    },
  },
}
</script>

<style>

</style>
