# gorm 链接数据库

在 Go 语言中使用 ORM（如 GORM）连接不同类型的数据库通常需要导入相应的数据库驱动，并根据每种数据库的连接字符串配置连接信息。以下是连接常见数据库的示例：

### 使用 GORM 连接 MySQL 数据库

首先，确保已安装 GORM 和 MySQL 驱动：

```bash
go get -u gorm.io/gorm
go get -u gorm.io/driver/mysql
```

然后，可以编写连接 MySQL 数据库的示例代码：

```go
package main

import (
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
    "log"
)

func main() {
    // MySQL 数据库连接信息
    dsn := "username:password@tcp(localhost:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"

    // 连接 MySQL 数据库
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("Failed to connect to MySQL database: %v", err)
    }
    defer db.Close()

    // 使用 db 进行数据库操作
    // 例如自动迁移模型、创建、查询、更新、删除等操作
}
```

### 使用 GORM 连接 PostgreSQL 数据库

确保已安装 GORM 和 PostgreSQL 驱动：

```bash
go get -u gorm.io/gorm
go get -u gorm.io/driver/postgres
```

然后，可以编写连接 PostgreSQL 数据库的示例代码：

```go
package main

import (
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
    "log"
)

func main() {
    // PostgreSQL 数据库连接信息
    dsn := "host=localhost user=username password=password dbname=dbname port=5432 sslmode=disable TimeZone=Asia/Shanghai"

    // 连接 PostgreSQL 数据库
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("Failed to connect to PostgreSQL database: %v", err)
    }
    defer db.Close()

    // 使用 db 进行数据库操作
    // 例如自动迁移模型、创建、查询、更新、删除等操作
}
```

### 使用 GORM 连接 SQLite 数据库

连接 SQLite 数据库的示例代码：

```go
package main

import (
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
    "log"
)

func main() {
    // SQLite 数据库文件路径
    dsn := "gorm.db"

    // 连接 SQLite 数据库
    db, err := gorm.Open(sqlite.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("Failed to connect to SQLite database: %v", err)
    }
    defer db.Close()

    // 使用 db 进行数据库操作
    // 例如自动迁移模型、创建、查询、更新、删除等操作
}
```

