# 事务

Prisma 提供了一种简单而有效的方式来执行事务操作，以确保在数据库交互过程中的数据一致性和完整性。事务允许您批量执行一系列数据库操作，并在需要时进行回滚（rollback），以确保数据操作的原子性。

## Prisma 中的事务操作

在 Prisma 中，您可以使用 Prisma Client 来执行事务操作。Prisma Client 提供了 `$transaction` 方法来支持事务的开始和结束：

1. **开始事务**：
   - 使用 `$transaction` 方法开始一个事务。在事务中，您可以执行一系列的数据库操作。

   ```typescript
   import { PrismaClient } from '@prisma/client';

   const prisma = new PrismaClient();

   async function createWithTransaction() {
     const transaction = await prisma.$transaction([
       prisma.user.create({
         data: {
           name: 'Alice',
           email: 'alice@example.com',
         },
       }),
       prisma.post.create({
         data: {
           title: 'First Post',
           content: 'Hello, world!',
         },
       }),
     ]);

     console.log('Transaction committed successfully:', transaction);
   }

   createWithTransaction()
     .catch((error) => {
       console.error('Transaction failed:', error);
     })
     .finally(async () => {
       await prisma.$disconnect();
     });
   ```

2. **事务回滚**：
   - 如果任何一个操作失败或抛出异常，整个事务会自动回滚，保证数据的一致性。

   ```typescript
   async function createWithTransaction() {
     try {
       const transaction = await prisma.$transaction([
         prisma.user.create({
           data: {
             name: 'Alice',
             email: 'alice@example.com',
           },
         }),
         prisma.post.create({
           data: {
             title: 'First Post',
             content: 'Hello, world!',
           },
         }),
       ]);

       console.log('Transaction committed successfully:', transaction);
     } catch (error) {
       console.error('Transaction failed:', error);
       // 如果出错，事务会自动回滚
     } finally {
       await prisma.$disconnect();
     }
   }
   ```

## 注意事项：

- **事务范围**：事务中的所有操作必须使用同一个 Prisma Client 实例。
- **自动回滚**：Prisma 会在事务中的任何操作失败时自动回滚，确保数据的一致性。
- **性能考虑**：事务可以提高数据操作的性能和原子性，特别是在需要确保多个操作的完整性和一致性时非常有用。

