# CRUD

| 操作          | Prisma Client API                   |
|---------------|-------------------------------------|
| 创建（Create） | `prisma.<model>.create`             |
| 读取（Read）   | `prisma.<model>.findUnique`         |
| 更新（Update） | `prisma.<model>.update`             |
| 删除（Delete） | `prisma.<model>.delete`             |
| 列表（List）   | `prisma.<model>.findMany`           |
| 计数（Count）  | `prisma.<model>.count`              |
| 排序（Order By） | `prisma.<model>.findMany({ orderBy: { <field>: 'asc' } })` |
| 限制条数（Take） | `prisma.<model>.findMany({ take: <number> })` |
