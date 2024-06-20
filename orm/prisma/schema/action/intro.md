# action

在 Prisma 中，`@relation` 的 `action` 属性用于定义在关系中的操作发生时，如何处理相关模型的操作。它通常用于配置关系中的级联操作行为，以确保数据库中的数据一致性和完整性。下面是一些常见的用法和示例：

### 1. `onDelete` 和 `onUpdate`

`@relation` 中的 `onDelete` 和 `onUpdate` 属性定义了在关联关系中外键更新或删除时，相关的级联操作。这两个属性可以设置为以下值：

- **`onDelete`**：
  - **`CASCADE`**：删除主记录时，相关的外键记录也会被删除。
  - **`SET_NULL`**：删除主记录时，相关的外键字段会被设置为 `NULL`。
  - **`RESTRICT`**：如果有关联的外键记录存在，则不允许删除主记录。
  - **`NO_ACTION`**：不执行任何操作。

- **`onUpdate`**：
  - 同 `onDelete`，支持相同的选项。

例如，定义一个 `User` 和 `Post` 的关系，并设置在删除用户时删除关联的帖子：

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  posts Post[]
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String?
  authorId Int
  author   User   @relation(fields: [authorId], references: [id], onDelete: Cascade)
}
```

在这个示例中，`onDelete: Cascade` 表示当删除 `User` 记录时，相关的 `Post` 记录也会被级联删除。

### 2. 示例

另一个示例是定义 `onDelete: SetNull`，在删除 `User` 记录时，将其关联的 `Post` 记录的 `authorId` 字段设置为 `NULL`：

```prisma
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  posts Post[]
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String?
  authorId Int?
  author   User?  @relation(fields: [authorId], references: [id], onDelete: SetNull)
}
```

这个示例中，`onDelete: SetNull` 表示当删除 `User` 记录时，相关的 `Post` 记录的 `authorId` 字段将会被设置为 `NULL`，从而解除了 `User` 和 `Post` 之间的关联。

### 总结

通过使用 `@relation` 的 `onDelete` 和 `onUpdate` 属性，可以方便地管理和定义关系中的级联操作行为，确保在数据库中的数据操作遵循业务逻辑和数据完整性的要求。
