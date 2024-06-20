# intro

## 语法

```sql
BEGIN TRANSACTION;

-- 执行一些数据库操作，如插入、更新、删除等

ROLLBACK;
```

```sql
BEGIN TRANSACTION;

-- 执行一些数据库操作

SAVEPOINT before_update;

-- 更多的数据库操作

ROLLBACK TO SAVEPOINT before_update;
```
