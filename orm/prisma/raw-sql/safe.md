# 安全

在 Prisma 中，确保 SQL 查询的安全性非常重要，尤其是防范 SQL 注入攻击。Prisma 提供了安全的模板字符串语法来插入变量，并自动处理输入的数据，防止 SQL 注入。以下是如何使用 Prisma 的 `$queryRaw` 和 `$executeRaw` 方法进行安全的 SQL 查询和操作的说明。

### SQL 安全使用

#### `$queryRaw`
`$queryRaw` 方法用于执行原生 SQL 查询，并返回结果集。通过使用模板字符串语法来插入变量，Prisma 可以自动处理输入的数据，防止 SQL 注入。

**示例**：
```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function rawQuery() {
  const email = 'alice@example.com';
  const result = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${email}`;
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

在这个示例中，变量 `email` 被安全地插入到 SQL 查询中，Prisma 会自动处理和转义该变量，以防止 SQL 注入。

#### `$executeRaw`
`$executeRaw` 方法用于执行原生 SQL 命令（如插入、更新和删除），并返回影响的行数。与 `$queryRaw` 类似，使用模板字符串语法来插入变量，以确保安全性。

**示例**：
```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function rawExecute() {
  const newName = 'Alice Updated';
  const email = 'alice@example.com';
  const result = await prisma.$executeRaw`UPDATE User SET name = ${newName} WHERE email = ${email}`;
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

在这个示例中，变量 `newName` 和 `email` 被安全地插入到 SQL 命令中，同样地，Prisma 会自动处理这些变量，以防止 SQL 注入。

### 预防 SQL 注入的最佳实践

1. **使用模板字符串语法**：
   始终使用 Prisma 提供的模板字符串语法来插入变量，而不是手动拼接 SQL 字符串。

2. **限制用户输入**：
   对用户输入进行验证和清理，确保输入符合预期的格式和类型。

3. **最小权限原则**：
   数据库用户应具有最低限度的权限，确保即使发生 SQL 注入攻击，影响也会被降到最低。

4. **定期审计**：
   定期审计和检查数据库查询和操作，确保没有潜在的安全漏洞。

### 表格整理

| 操作         | 方法                         | 描述                                                                  |
|--------------|------------------------------|-----------------------------------------------------------------------|
| 执行原生 SQL 查询 | `prisma.$queryRaw`            | 执行原生 SQL 查询，并返回结果集，使用模板字符串防止 SQL 注入。          |
| 执行原生 SQL 命令 | `prisma.$executeRaw`          | 执行原生 SQL 命令，不返回结果集（适用于插入、更新、删除等操作），使用模板字符串防止 SQL 注入。 |

通过遵循这些安全实践和使用 Prisma 提供的安全方法，您可以有效地防止 SQL 注入攻击，确保数据库操作的安全性。
