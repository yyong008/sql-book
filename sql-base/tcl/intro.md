# intro

Data Definition Language，数据定义语言

- COMMIT
- ROLLBACK
- SAVEPOINT

## 事务(Transaction)

将一组数据库操作作为一个不可分割的工作单元进行管理，要么全部成功提交（Commit），要么全部失败回滚（Rollback）

## 事务特性

- 原子性
- 一致性
- 隔离性
- 持久性

## 事务控制语句

- BEGIN TRANSACTION/START TRANSACTION
- COMMIT
- ROLLBACK
- SAVEPOINT

## 示例

```sql
BEGIN TRANSACTION;

-- 执行一些数据库操作，如插入、更新、删除等

SAVEPOINT before_update;

-- 更多的数据库操作

-- 如果后续操作发生错误或者需要回滚部分更改
ROLLBACK TO SAVEPOINT before_update;

-- 继续进行其他操作或者提交事务
COMMIT;
```
