# 属性

| 指令/注释    | 描述                                                   | 示例                                                         |
|--------------|--------------------------------------------------------|--------------------------------------------------------------|
| `@id`        | 将字段定义为模型的主键                                   | `@id`                                                        |
| `@@id`       | 定义复合主键                                             | `@@id([field1, field2])`                                      |
| `@default`   | 设置字段的默认值                                         | `@default(autoincrement())` 或 `@default(value)`               |
| `@unique`    | 定义字段的唯一约束                                       | `@unique` 或 `@unique(["field1", "field2"])`                   |
| `@@unique`   | 定义多字段的唯一约束                                     | `@@unique([["field1", "field2"], ["field3"]])`                |
| `@@index`    | 定义索引                                                 | `@@index([field])` 或 `@@index([field], name: "index_name")`   |
| `@relation`  | 定义模型之间的关系                                       | `@relation(fields: [field], references: [related_model.field])` |
| `@map`       | 将字段映射到数据库中的特定列名                             | `@map("column_name")`                                         |
| `@@map`      | 将模型映射到数据库中的特定表名                             | `@@map("table_name")`                                         |
| `@updatedAt` | 自动更新时间戳字段以记录更新时间                           | `@updatedAt`                                                  |
| `@ignore`    | 忽略字段，不映射到数据库表中                               | `@ignore`                                                     |
| `@@ignore`   | 忽略整个模型，不映射到数据库表中                           | `@@ignore`                                                    |
| `@@schema`   | 定义整个 Prisma Schema 的配置选项                         | `@@schema`                                                    |
