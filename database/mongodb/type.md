# mongodb

| **数据类型**         | **描述**                                                                           | **示例**                                                    |
| -------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `String`             | UTF-8 字符串。常用于存储文本数据。                                                 | `"hello world"`                                             |
| `Integer`            | 整数。可以是 32 位或 64 位，具体取决于使用的服务器。                               | `42`                                                        |
| `Boolean`            | 布尔值。表示 `true` 或 `false`。                                                   | `true`                                                      |
| `Double`             | 64 位浮点数。用于存储浮点值。                                                      | `3.14159`                                                   |
| `Min/Max keys`       | MongoDB 内部类型，用于将一个值与 BSON（二进制 JSON）元素的最低值和最高值进行比较。 |                                                             |
| `Array`              | 数组或列表。可以存储多个值，值可以是不同类型。                                     | `[ "apple", "banana", "cherry" ]`                           |
| `Timestamp`          | 时间戳。记录文档的创建或修改时间。                                                 | `Timestamp(1625490723, 1)`                                  |
| `Object`             | 内嵌文档。用于嵌套结构。                                                           | `{ "name": "John", "age": 30 }`                             |
| `Null`               | 空值。用于显式存储一个空值。                                                       | `null`                                                      |
| `Symbol`             | 符号。类似于字符串，但通常用于特殊语境或目的。                                     | `Symbol("mySymbol")`                                        |
| `Date`               | 日期。用于存储当前日期或时间的日期类型。存储为自 Unix 纪元以来的毫秒数。           | `ISODate("2021-07-05T14:48:00Z")`                           |
| `ObjectId`           | 对象 ID。用于创建文档的唯一 ID。                                                   | `ObjectId("60e4489cfb1f410de1a48b4d")`                      |
| `Binary Data`        | 二进制数据。用于存储二进制数据，如图像或文件。                                     | `BinData(0, "binary data")`                                 |
| `Code`               | JavaScript 代码。用于存储 JavaScript 代码或函数。                                  | `Code("function() { return 1; }")`                          |
| `Regular Expression` | 正则表达式。用于存储正则表达式。                                                   | `/pattern/`                                                 |
| `Decimal128`         | 128 位高精度十进制值。用于需要高精度的金融或货币数据。                             | `NumberDecimal("1234.56")`                                  |
| `Undefined`          | 未定义值。已弃用，不建议使用。                                                     | `undefined`                                                 |
| `DBRef`              | 数据库引用。用于引用另一个集合中的文档。                                           | `DBRef("collection", ObjectId("60e4489cfb1f410de1a48b4d"))` |
