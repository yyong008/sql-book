# intro

## 语法

```sql
SAVEPOINT savepoint_name;
```

```sql
BEGIN TRANSACTION;

-- 执行一些数据库操作

SAVEPOINT before_update;

-- 更多的数据库操作

-- 如果后续操作发生错误或者需要回滚部分更改
ROLLBACK TO SAVEPOINT before_update;

-- 继续进行其他操作或者提交事务
COMMIT;
```
