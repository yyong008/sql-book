# SQLite 数据类型

SQLite 支持的原始数据类型：

包含一下五种：

| 数据类型 | 描述                                 | 示例                   |
|----------|------------------------------------|------------------------|
| INTEGER  | 有符号整数，以 1、2、3、4、6 或 8 字节存储。 | `123`, `-456`          |
| REAL     | 浮点数，以 8 字节 IEEE 浮点数格式存储。   | `3.14159`, `-0.12345`  |
| TEXT     | 字符串文本，使用数据库的编码方式（UTF-8、UTF-16BE 或 UTF-16LE）存储。 | `'Hello, World!'`, `'SQLite'` |
| BLOB     | 二进制大对象，以输入的数据格式存储，不对数据做任何转换。 | 图片、音频文件等二进制数据 |
| NULL     | 特殊的数据类型，表示缺失或不适用的值。   | -                      |

## 模拟 bool 类型

- 0/1 模拟
- 'true'/'false' 模拟
- CHECK 约束

## 模拟时间类型

- 时间类型：TEXT
- 时间戳：INTEGER

## 模拟枚举类型

- TEXT
- CHECK
- VIEW