# multi-schemas

## 文件结构

```sh
my-app/
├─ ...
├─ prisma/
│  ├─ schema/
│  │  ├─ post.prisma
│  │  ├─ schema.prisma
│  │  ├─ user.prisma
├─ ...
```

## 特性配置

- 文件位置：`/prisma/schema.prisma`

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["prismaSchemaFolder"]
}
```
