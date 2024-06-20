# Prisma migrate

| 操作                  | 命令                                           | 描述                                         |
|-----------------------|------------------------------------------------|----------------------------------------------|
| 初始化迁移环境         | `npx prisma migrate init`                      | 初始化 Prisma 迁移环境，创建 `migrations` 文件夹。 |
| 创建并应用迁移         | `npx prisma migrate dev --name <migration-name>` | 为当前更改生成迁移文件并应用到开发数据库。         |
| 生成迁移文件           | `npx prisma migrate save --name <migration-name>` | 生成迁移文件，但不应用到数据库。                  |
| 部署迁移               | `npx prisma migrate deploy`                    | 将所有未应用的迁移应用到生产数据库。               |
| 重置数据库并重新迁移    | `npx prisma migrate reset`                     | 重置数据库并重新应用所有迁移。                    |
| 查看迁移状态           | `npx prisma migrate status`                    | 查看迁移的状态，包括已应用和未应用的迁移。          |

