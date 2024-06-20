# db methods

| 方法                      | 描述                                                   |
|--------------------------|--------------------------------------------------------|
| `Create(value)`           | 创建新记录并插入到数据库中。                             |
| `First(dest, conds)`      | 检索满足条件的第一条记录。                               |
| `Find(dest, conds)`       | 检索满足条件的所有记录。                                 |
| `Take(dest, conds)`       | 检索满足条件的一条记录。                                 |
| `Save(value)`             | 更新数据库中的记录，如果记录不存在则插入。               |
| `Update(column, value)`   | 更新数据库中某列的值。                                   |
| `Delete(value, conds)`    | 删除满足条件的记录。                                     |
| `Where(query, args)`      | 添加查询条件。可以传入map、struct或字符串作为条件。       |
| `Order(value)`            | 指定从数据库中检索记录的顺序。                             |
| `Limit(limit)`            | 指定检索记录的最大数量。                                 |
| `Offset(offset)`          | 指定从第几条记录开始检索。                               |
