在 Prisma 中，您可以使用 Prisma Client 的 `$queryRaw` 和 `$executeRaw` 方法来执行原生 SQL 查询和命令。这些方法允许您在需要更复杂或自定义查询时直接操作数据库。

### 表格整理

| 操作         | 方法                         | 描述                                                                 |
|--------------|------------------------------|----------------------------------------------------------------------|
| 执行原生 SQL 查询 | `prisma.$queryRaw`            | 执行原生 SQL 查询，并返回结果集。                                     |
| 执行原生 SQL 命令 | `prisma.$executeRaw`          | 执行原生 SQL 命令，不返回结果集（适用于插入、更新、删除等操作）。         |

### 示例代码

以下是一些示例代码，展示如何使用这些方法执行原生 SQL 查询和命令：

1. **执行原生 SQL 查询**

   ```typescript
   import { PrismaClient } from '@prisma/client';

   const prisma = new PrismaClient();

   async function rawQuery() {
     const result = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${'alice@example.com'}`;
     console.log(result);
   }

   rawQuery()
     .catch((e) => {
       throw e;
     })
     .finally(async () => {
       await prisma.$disconnect();
     });
   ```

2. **执行原生 SQL 命令**

   ```typescript
   import { PrismaClient } from '@prisma/client';

   const prisma = new PrismaClient();

   async function rawExecute() {
     const result = await prisma.$executeRaw`UPDATE User SET name = ${'Alice Updated'} WHERE email = ${'alice@example.com'}`;
     console.log(`Rows affected: ${result}`);
   }

   rawExecute()
     .catch((e) => {
       throw e;
     })
     .finally(async () => {
       await prisma.$disconnect();
     });
   ```

### 注意事项

- **SQL 注入防护**：使用 Prisma 的原生查询方法时，请确保使用模板字符串（如 \`${value}`）来插入变量，以防止 SQL 注入攻击。
- **类型安全**：原生 SQL 查询方法不提供类型检查，返回的结果是未经处理的数据库响应，需要手动进行类型转换和处理。

通过这些方法，您可以在 Prisma 中灵活地执行复杂的 SQL 查询和命令，满足特定的数据库操作需求。
