# model

在使用 Go 语言的 ORM 库（如 GORM）中，定义模型（Model）是指创建结构体来映射数据库表格及其字段。下面是一个简单的示例，展示如何在 GORM 中定义一个模型：

```go
package models

import (
    "gorm.io/gorm"
    "time"
)

// User 是一个示例模型，用于映射数据库中的 users 表格
type User struct {
    ID        uint           `gorm:"primaryKey"`   // 主键，自动递增
    Username  string         `gorm:"unique"`        // 用户名，唯一索引
    Email     string         `gorm:"unique"`        // 邮箱，唯一索引
    Age       uint8                                // 年龄
    CreatedAt time.Time                           // 创建时间
    UpdatedAt time.Time                           // 更新时间
    DeletedAt gorm.DeletedAt `gorm:"index"`        // 软删除时间，自动生成索引
}

// TableName 指定 User 对应的数据库表名为 "users"
func (User) TableName() string {
    return "users"
}
```

### 说明：

1. **结构体字段**：
   - 每个字段对应数据库表格中的一个列。
   - 字段可以包含标签（tag），如 `gorm:"primaryKey"`、`gorm:"unique"` 等，用于定义数据库约束和选项。

2. **主键和索引**：
   - `ID` 字段使用 `primaryKey` 标签表示主键，`gorm:"index"` 表示自动生成索引。
   - `Username` 和 `Email` 字段使用 `unique` 标签表示唯一索引，确保值在表格中唯一。

3. **时间字段**：
   - `CreatedAt` 和 `UpdatedAt` 字段分别表示记录创建和更新的时间。
   - `DeletedAt` 字段使用 `gorm.DeletedAt` 类型，表示软删除的时间戳，GORM 会自动处理软删除。

4. **模型方法**：
   - `TableName()` 方法指定了模型对应的数据库表名为 "users"，这对于自定义表名非常有用。

### 使用示例：

在实际应用中，可以使用该模型进行数据库操作，例如创建、查询、更新和删除用户记录。

```go
package main

import (
    "gorm.io/gorm"
    "gorm.io/driver/mysql"
    "models"
)

func main() {
    dsn := "user:password@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        panic("failed to connect database")
    }

    // 自动迁移模型
    db.AutoMigrate(&models.User{})

    // 创建用户
    newUser := models.User{
        Username: "alice",
        Email:    "alice@example.com",
        Age:      30,
    }
    db.Create(&newUser)

    // 查询用户
    var user models.User
    db.First(&user, "username = ?", "alice")
    fmt.Println("User found:", user)

    // 更新用户
    db.Model(&user).Update("Age", 31)

    // 删除用户（软删除）
    db.Delete(&user)
}
```

在这个示例中，通过 GORM 定义了一个 `User` 模型，并演示了如何使用该模型进行数据库操作。这种模型定义方式使得开发者可以通过面向对象的方式处理数据库数据，而不必直接编写 SQL 查询语句。
