import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sql-book",
  description: "a sql book",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '基础', link: '/sql-base/intro' }
    ],

    sidebar: [
      {
        text: 'SQL 基础',
        items: [
          { text: '简介', link: '/sql-base/intro' },
          { text: 'RDBMS', link: '/RDBMS/intro' },
          { text: '发展史', link: '/sql-base/history' },
          { text: '分类', link: '/sql-base/category' },
        ]
      },
      {
        text: 'SQL 概念',
        items: [
          { text: '简介', link: '/sql-base/concept/intro' },
          { text: '表', link: '/sql-base/concept/table' },
          { text: '列', link: '/sql-base/concept/columns' },
          { text: '约束', link: '/sql-base/concept/constraint' },
          { text: '视图', link: '/sql-base/concept/view' },
          { text: '索引', link: '/sql-base/concept/index' },
          { text: '存储', link: '/sql-base/concept/procedure' },
          { text: '触发器', link: '/sql-base/concept/trigger' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
