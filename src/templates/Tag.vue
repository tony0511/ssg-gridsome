<template>
  <Layout>
      <h1>{{ tag.title }}</h1>
      <ul>
        <li v-for="post in tag.posts" :key="post.id">
          <h3>
            <g-link :to="`/post/${post.id}`">{{ post.title }}</g-link>
          </h3>
          <p>{{ post.creator }}&nbsp;&nbsp;{{ post.created_at }}&nbsp;&nbsp;{{ post.is_publish ? '已发布' : '未发布' }}</p>
        </li>
      </ul>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  strapiTag (id: $id) {
    id
    title
    posts{
      id
      title
      content
      is_publish
      creator
      created_at
      cover {
        url
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'TagPage',
  computed: {
    tag() {
      return this.$page.strapiTag;
    },
  },
}
</script>
