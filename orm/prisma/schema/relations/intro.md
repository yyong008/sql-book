# relations

在 Prisma 中，关系用于定义不同数据模型之间的关联。这些关系可以是单向的或双向的，并且可以是以下几种类型：一对一 (One-to-One)、一对多 (One-to-Many)、和多对多 (Many-to-Many)。下面我们详细介绍这些关系类型及其在 Prisma Schema 中的定义。

## 一对一 (One-to-One)

在一对一关系中，一个记录与另一个记录之间有唯一的关系。例如，一个用户有一个个人资料。

**示例**：
```prisma
model User {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  profile  Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  userId Int    @unique
  user   User   @relation(fields: [userId], references: [id])
}
```

## 一对多 (One-to-Many)

在一对多关系中，一个记录可以与多个记录相关联。例如，一个用户可以有多个帖子。

**示例**：
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
  author   User   @relation(fields: [authorId], references: [id])
}
```

## 多对多 (Many-to-Many)

在多对多关系中，多个记录可以相互关联。例如，一个帖子可以有多个标签，一个标签也可以应用于多个帖子。通常使用中间表来实现这种关系。

**示例**：
```prisma
model Post {
  id       Int      @id @default(autoincrement())
  title    String
  content  String?
  tags     Tag[]    @relation("PostTags")
}

model Tag {
  id       Int      @id @default(autoincrement())
  name     String   @unique
  posts    Post[]   @relation("PostTags")
}

model PostTags {
  postId Int
  tagId  Int
  post   Post   @relation(fields: [postId], references: [id])
  tag    Tag    @relation(fields: [tagId], references: [id])

  @@id([postId, tagId])
}
```
