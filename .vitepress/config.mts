import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sql-book",
  description: "a sql book",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "sql", link: "/sql-base/intro" },
      {
        text: "database",
        items: [
          { text: "MySQL", link: "/database/mysql/intro" },
          { text: "PostgreSQL", link: "/database/postgresql/intro" },
          { text: "SQLite", link: "/database/sqlite/intro" },
          { text: "MSSQL", link: "/database/mssql/intro" },
          { text: "Mongodb", link: "/database/mongodb/intro" },
        ],
      },
      { text: "design", link: "/design/intro" },
      {
        text: "ORM",
        items: [
          { text: "Prisma", link: "/orm/prisma/intro" },
          { text: "Mongoose(ODM)", link: "/orm/mongoose/intro" },
        ],
      },
      { text: "Pratice", link: "/practice/intro" },
      {
        text: "AI",
        items: [{ text: "chatDB", link: "https://www.chatdb.ai/" }],
      },
    ],

    sidebar: {
      "/sql-base/": [
        {
          text: "基础",
          collapsed: true,
          items: [
            { text: "简介", link: "/sql-base/intro" },
            { text: "RDBMS", link: "/RDBMS/intro" },
            { text: "发展史", link: "/sql-base/history" },
            { text: "分类", link: "/sql-base/category" },
          ],
        },
        {
          text: "概念",
          collapsed: true,
          items: [
            { text: "简介", link: "/sql-base/concept/intro" },
            { text: "表", link: "/sql-base/concept/table" },
            { text: "列", link: "/sql-base/concept/columns" },
            { text: "约束", link: "/sql-base/concept/constraint" },
            { text: "视图", link: "/sql-base/concept/view" },
            { text: "索引", link: "/sql-base/concept/index" },
            { text: "存储", link: "/sql-base/concept/procedure" },
            { text: "触发器", link: "/sql-base/concept/trigger" },
          ],
        },
        {
          text: "关联关系",
          collapsed: true,
          items: [
            { text: "简介", link: "/sql-base/relations/intro" },
            { text: "类型", link: "/sql-base/relations/type" },
            { text: "动作", link: "/sql-base/relations/action" },
          ],
        },
        {
          text: "DDL",
          collapsed: true,
          items: [
            { text: "简介", link: "/sql-base/ddl/intro" },
            { text: "CREATE", link: "/sql-base/ddl/create/intro" },
            { text: "ALTER", link: "/sql-base/ddl/alter/intro" },
            { text: "DROP", link: "/sql-base/ddl/drop/intro" },
            { text: "TRUNCATE", link: "/sql-base/ddl/truncate/intro" },
          ],
        },
        {
          text: "DML",
          collapsed: true,
          items: [
            { text: "简介", link: "/sql-base/dml/intro" },
            { text: "SELECT", link: "/sql-base/dml/select/intro" },
            { text: "INSERT", link: "/sql-base/dml/insert/intro" },
            { text: "UPDATE", link: "/sql-base/dml/update/intro" },
            { text: "DELETE", link: "/sql-base/dml/delete/intro" },
          ],
        },
        {
          text: "DCL",
          collapsed: true,
          items: [
            { text: "简介", link: "/sql-base/dcl/intro" },
            { text: "GRANT", link: "/sql-base/dcl/grant/intro" },
            { text: "REVOKE", link: "/sql-base/dcl/revoke/intro" },
          ],
        },
        {
          text: "TCL",
          collapsed: true,
          items: [
            { text: "简介", link: "/sql-base/tcl/intro" },
            { text: "COMMIT", link: "/sql-base/tcl/commit/intro" },
            { text: "ROLLBACK", link: "/sql-base/tcl/rollback/intro" },
            { text: "SAVEPOINT", link: "/sql-base/tcl/savepoint/intro" },
          ],
        },
        {
          text: "内置函数",
          collapsed: true,
          items: [
            { text: "简介", link: "/sql-base/fns/intro" },
            { text: "聚合", link: "/sql-base/fns/aggregate" },
            { text: "字符", link: "/sql-base/fns/string" },
            { text: "转换", link: "/sql-base/fns/convert" },
            { text: "时间日期", link: "/sql-base/fns/date-time" },
            { text: "数学", link: "/sql-base/fns/math" },
            { text: "其他", link: "/sql-base/fns/other" },
          ],
        },
      ],
      "/database/": [
        { text: "简介", link: "/database/intro" },
        {
          text: "MySQL",
          items: [
            { text: "简介", link: "/database/mysql/intro" },
            { text: "数据类型", link: "/database/postgresql/type" },
          ],
        },
        {
          text: "PostgreSQL",
          items: [
            { text: "简介", link: "/database/postgresql/intro" },
            { text: "数据类型", link: "/database/postgresql/type" },
          ],
        },
        {
          text: "SQLite",
          items: [
            {
              text: "简介",
              link: "/database/sqlite/intro",
            },
            { text: "数据类型", link: "/database/sqlite/type" },
          ],
        },
        {
          text: "MSSQL",
          items: [
            { text: "简介", link: "/database/mssql/intro" },
            { text: "数据类型", link: "/database/mssql/type" },
          ],
        },
        {
          text: "Mongodb",
          items: [{ text: "简介", link: "/database/mongodb/intro" }, { text: "数据类型", link: "/database/mongodb/type" },],
        },
      ],
      "/design/": [
        {
          text: "SQL 设计",
          items: [
            { text: "简介", link: "/design/intro" },
            { text: "工具", link: "/design/tools" },
          ],
        },
        {
          text: "SQLStudio",
          items: [
            { text: "简介", link: "/design/tools/sqlite-studio/intro" }, 
          ],
          
        },
        {
          text: "MySQL Workbench",
          items: [
            { text: "简介", link: "/design/tools/mysql-workbench/intro" }, 
          ],
        },
        {
          text: "PgAdmin",
          items: [
            { text: "简介", link: "/design/tools/pg-admin/intro" }, 
          ],
        },
        {
          text: "HeidiSQL",
          items: [
            { text: "简介", link: "/design/tools/heidi-sql/intro" }, 
          ],
        },
        {
          text: "Navicate",
          items: [
            { text: "简介", link: "/design/tools/navicate/intro" }, 
          ],
        },
      ],
      "/orm/": [
        {
          "text": "Prisma",
          items: [
            {
              text: "简介",
              link: '/orm/intro'
            },
            {
              text: "数据类型",
              link: '/orm/prisma/type'
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/yyong008/sql-book" },
    ],
  },
});
