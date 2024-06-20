# 初始化

在使用 Prisma 进行项目开发时，初始化操作通常涉及配置和设置 Prisma 的基础环境，包括安装必要的依赖、生成 Prisma Schema 文件以及配置数据源等。以下是使用 Prisma 初始化项目的基本步骤：

## 更换源

```sh
PRISMA_ENGINES_MIRROR=https://registry.npmmirror.com/-/binary/prisma
```

## Prisma 初始化步骤

prisma -> prisma init -> schema.prisma -> prisma generate -> Prisma Client -> Prisma Migrate


```sh
npm install -g prisma
npx prisma init

code ./prisma/schema.prisma

npx prisma generate
npx prisma migrate init
```
