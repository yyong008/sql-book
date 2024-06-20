# 属性函数

这些属性函数通常用于定义字段的默认值或生成策略。下面是它们的说明和示例：

| 函数           | 描述                                                   | 示例                                                         |
|----------------|--------------------------------------------------------|--------------------------------------------------------------|
| `auto()`       | 生成一个自动递增的整数值                                 | `id Int @id @default(auto())`                                 |
| `autoincrement()` | 生成一个自动递增的整数值（同 `auto()`）                | `id Int @id @default(autoincrement())`                        |
| `sequence()`   | 使用数据库序列生成一个值                                 | `id Int @id @default(sequence("sequence_name"))`              |
| `cuid()`       | 生成一个唯一的短字符串（cuid）                           | `id String @id @default(cuid())`                               |
| `uuid()`       | 生成一个唯一的标识符（UUID）                             | `id String @id @default(uuid())`                               |
| `now()`        | 使用当前时间戳作为默认值                                 | `createdAt DateTime @default(now())`                          |
| `dbgenerated()` | 使用数据库的默认生成机制，具体实现依赖于数据库           | `updatedAt DateTime @default(dbgenerated())`                   |

### 示例说明：

1. **`auto()` 和 `autoincrement()`**：
   - 用于生成自动递增的整数值，通常用作主键的默认值。
   ```prisma
   model User {
     id    Int    @id @default(autoincrement())
     name  String
     email String @unique
   }
   ```

2. **`sequence()`**：
   - 使用数据库的序列生成器来为字段生成值。
   ```prisma
   model Post {
     id       Int    @id @default(sequence("post_id_seq"))
     title    String
     content  String
   }
   ```

3. **`cuid()` 和 `uuid()`**：
   - 生成唯一的标识符，适用于需要全局唯一性的场景。
   ```prisma
   model Product {
     id    String @id @default(cuid())
     name  String
   }
   ```

4. **`now()`**：
   - 使用当前时间戳作为默认值，通常用于记录创建时间或更新时间。
   ```prisma
   model Post {
     id         Int       @id @default(autoincrement())
     title      String
     createdAt  DateTime  @default(now())
   }
   ```

5. **`dbgenerated()`**：
   - 使用数据库的默认生成机制，具体实现取决于数据库的支持和配置。
   ```prisma
   model Product {
     id         Int       @id @default(dbgenerated())
     name       String
     updatedAt  DateTime  @default(dbgenerated())
   }
   ```

这些属性函数使得在 Prisma Schema 中定义字段的默认值变得更加灵活和便捷，可以根据业务需求选择合适的生成策略。
 