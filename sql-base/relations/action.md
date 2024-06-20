# 关联关系

| 动作          | 描述                                       |
|---------------|--------------------------------------------|
| **Cascade**   | 删除或更新主表中的记录时，自动删除或更新相关联的从表中的记录。 |
| **Restrict**  | 阻止删除或更新主表中的记录，如果在从表中找到相关的行。 |
| **No Action** | 在主表进行更改时不执行任何操作。具体实现可能因数据库而异。 |
| **Set Null**  | 删除或更新主表中的记录时，将从表中的外键列设置为 NULL。 |
| **Set Default** | 删除或更新主表中的记录时，将从表中的外键列设置为默认值。 |
