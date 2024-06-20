# 示例

```go
package main

import (
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
    "gorm.io/gorm/logger"
    "log"
)

// 定义模型
type User struct {
    ID   uint   `gorm:"primaryKey"`
    Name string
    Age  uint
}

func main() {
    // 连接到 SQLite 数据库
    db, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{
        Logger: logger.Default.LogMode(logger.Info),
    })
    if err != nil {
        log.Fatalf("Failed to connect to database: %v", err)
    }
    defer db.Close()

    // 自动迁移模型（创建表）
    err = db.AutoMigrate(&User{})
    if err != nil {
        log.Fatalf("Failed to migrate database: %v", err)
    }

    // 创建记录
    user := User{Name: "Alice", Age: 30}
    result := db.Create(&user)
    if result.Error != nil {
        log.Fatalf("Failed to create user: %v", result.Error)
    }

    // 查询记录
    var users []User
    db.Find(&users)
    log.Println("Users:", users)
}
```
