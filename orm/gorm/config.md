# config

## 配置项目

| 配置选项                | 描述                                                                                   |
|-------------------------|----------------------------------------------------------------------------------------|
| `dialect`               | 数据库方言，如 "mysql", "postgres", "sqlite" 等。                                        |
| `dsn`                   | 数据库连接字符串，包含数据库地址、用户名、密码等信息。                                    |
| `Logger`                | 日志记录器，用于记录执行的 SQL 语句和执行时间。                                          |
| `LogLevel`              | 日志级别，控制日志输出的详细程度，如 "silent", "error", "warn", "info", "debug"。        |
| `TableNamePrefix`       | 表格前缀，用于在模型和数据库表格之间添加统一的前缀。                                     |
| `MaxOpenConns`          | 最大打开的连接数。                                                                      |
| `MaxIdleConns`          | 最大空闲的连接数。                                                                      |
| `NamingStrategy`        | 命名策略，控制模型字段和数据库列名之间的映射关系。                                        |
| `SkipDefaultTransaction`| 是否跳过默认事务。                                                                     |
| `AutoMigrate`           | 是否自动迁移模型，用于创建数据库表结构。                                                 |
| `Cache`                 | 缓存设置，用于缓存查询结果和查询计划。                                                  |
| `TZ`                    | 数据库时区。                                                                            |
| `PrepareStmt`           | 是否使用预编译语句。                                                                    |
| `CreateBatchSize`       | 批量创建时的大小限制。                                                                  |
| `DryRun`                | 是否使用干运行模式，用于生成 SQL 语句但不实际执行。                                       |

## 配置示例

```go
import (
    "gorm.io/gorm"
    "gorm.io/driver/mysql"
)

dsn := "username:password@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
    Logger: logger.Default.LogMode(logger.Info),
    NamingStrategy: schema.NamingStrategy{
        SingularTable: true, // 使用单数表名
    },
    MaxIdleConns: 10,
    MaxOpenConns: 100,
})
if err != nil {
    // 
}
defer db.Close()
```

