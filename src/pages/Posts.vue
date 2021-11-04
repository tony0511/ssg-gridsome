<template>
  <Layout>
    <div>
      <h1>Posts</h1>
      <ul>
        <li v-for="edge in $page.posts.edges" :key="edge.node.id">
          <h3>
            <g-link :to="`/post/${edge.node.id}`">{{ edge.node.title }}</g-link>
          </h3>
          <p>{{ edge.node.creator }}&nbsp;&nbsp;{{ edge.node.created_at }}&nbsp;&nbsp;{{ edge.node.is_publish ? '已发布' : '未发布' }}</p>
          <p>
            <span v-for="tag in edge.node.tags" :key="tag.id"><g-link :to="`/tag/${tag.id}`">{{ tag.title }}</g-link>&nbsp;&nbsp;</span>
          </p>
        </li>
      </ul>
      <!-- <p>第 {{ $page.posts.pageInfo.currentPage }} 页&nbsp;&nbsp;&nbsp;&nbsp;总共 {{ $page.posts.pageInfo.totalPages }} 页</p> -->
      <Pager :info="$page.posts.pageInfo"/>
    </div>
  </Layout>
</template>

<page-query>
# Write your query or mutation here
query ($page: Int) {
  posts: allStrapiPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        is_publish
        creator
        created_at
        tags {
          id
          title
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },
  mounted() {
    // https://defengsite.com:1337
    console.log('process.env----==', process.env.GRIDSOME_STRAPI_HOST);
  }
}
</script>

<style>
.pager .active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.pager .page-link {
  display: inline;
}
</style>
