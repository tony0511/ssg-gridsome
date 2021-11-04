// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '拉勾教育',
  siteDescription: '大前端',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      // 需要借助 @gridsome/transformer-remark 插件
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_STRAPI_HOST,
        queryLimit: 1000, // Defaults to 100
        typeName: 'Strapi',
        contentTypes: ['post', 'tag'], // 集合节点
        singleTypes: ['general'], // 单个节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: process.env.STRAPI_NAME,
        //   password: process.env.STRAPI_PWD
        // }
      }
    }
  ],
  templates: {
    // StrapiPost 必须与 source-strapi 插件的 typeName + contentTypes 保持一致
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue',
      },
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue',
      },
    ],
    // 给 BlogPost 指定模板
    // BlogPost: '/blog/:year/:month/:day/:slug',
  },
  // @gridsome/transformer-remark 插件转换选项
  // transformers: {
  //   remark: {
  //     // global remark options
  //   }
  // },
}
