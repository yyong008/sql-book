# trigger

触发器（Trigger）是存储在数据库中的特殊类型的存储过程，它在特定事件发生时自动执行。

## 触发事件

- INSERT
- UPDATE
- DELETE

## 触发时机

- BEFORE
- AFTER

## 作用范围

- 表
- 行

## 触发器语法

```sql
CREATE TRIGGER trigger_name
{BEFORE | AFTER} {INSERT | UPDATE | DELETE}
ON table_name
FOR EACH ROW
BEGIN
    -- SQL 语句
END;
```

## 触发器操作

- 定义
- 查看
- 删除

## 特殊变量

- OLD
- NEW

## 使用场景

- 维护数据一致性
- 自动化数据操作
- 复杂的业务规则
- 安全性检查

## 触发器的限制

- 性能
- 调试
- 依赖

## 最佳实践

- 文档化
- 监控和调优
