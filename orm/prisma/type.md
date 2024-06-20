# type

| **数据类型**    | **描述**                                                                                  | **示例**                        |
|-----------------|-------------------------------------------------------------------------------------------|---------------------------------|
| `String`        | 字符串类型。                                                                                | `username String`              |
| `Boolean`       | 布尔类型。                                                                                  | `isActive Boolean`             |
| `Int`           | 整数类型。32 位有符号整数。                                                                  | `age Int`                      |
| `BigInt`        | 大整数类型。64 位有符号整数。                                                               | `views BigInt`                 |
| `Float`         | 浮点数类型。64 位双精度浮点数。                                                               | `price Float`                  |
| `Decimal`       | 高精度十进制数。                                                                            | `balance Decimal`              |
| `DateTime`      | 日期和时间类型。ISO 8601 格式。                                                              | `createdAt DateTime`           |
| `Json`          | JSON 类型。存储 JSON 格式的数据。                                                           | `meta Json`                    |
| `Bytes`         | 二进制数据类型。                                                                             | `data Bytes`                   |
| `Enum`          | 枚举类型。定义一组可能的字符串值。                                                            | `status Status`                |
| `Unsupported`   | 非受支持类型。用于处理 Prisma 目前不直接支持的数据库特定类型。                                 | `legacyType Unsupported("type")`|

