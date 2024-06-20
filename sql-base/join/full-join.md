# full join

结合了 LEFT JOIN 和 RIGHT JOIN 的功能，返回两个表中所有符合连接条件的行，并用 NULL 值填充缺失的列。

## 语法

```sql
FROM 表1
FULL JOIN 表2 ON 表1.列 = 表2.列;
```

## 使用场景

- 合并两个表的数据
- 查找缺失数据
- 数据完整性分析
