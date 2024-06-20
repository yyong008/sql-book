# Prisma CLI

## Prisma CLI 主要功能

1. **项目初始化**：
   - 初始化 Prisma 项目，创建必要的配置文件和目录结构。
   
2. **数据库迁移管理**：
   - 管理数据库迁移，包括生成迁移、应用迁移、查看迁移状态等。

3. **生成 Prisma Client**：
   - 根据 Prisma Schema 生成 Prisma Client 代码，以便在应用程序中进行类型安全的数据库访问。

4. **数据库交互**：
   - 执行数据库查询、管理数据库结构、查看数据库数据等。

### 常用命令

| 命令                        | 说明                                                   |
|----------------------------|------------------------------------------------------|
| `prisma init`              | 初始化 Prisma 项目，创建 `schema.prisma` 文件和配置。  |
| `prisma migrate dev`       | 为当前更改生成迁移文件并应用到开发数据库。                |
| `prisma migrate deploy`    | 将所有未应用的迁移应用到生产数据库。                     |
| `prisma migrate reset`     | 重置数据库并重新应用所有迁移。                           |
| `prisma generate`          | 根据 `schema.prisma` 文件生成 Prisma Client 代码。        |
| `prisma studio`            | 启动 Prisma Studio 图形化界面以管理和查看数据库数据。      |
| `prisma db push`           | 将 `schema.prisma` 的更改推送到数据库而不生成迁移文件。   |
| `prisma introspect`        | 从现有数据库中生成 `schema.prisma` 文件。                |
| `prisma format`            | 格式化 `schema.prisma` 文件。                          |
| `prisma version`           | 显示 Prisma CLI 的版本信息。                            |
