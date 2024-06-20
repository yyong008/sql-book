# crud

```go
package main

import (
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
    "gorm.io/gorm/logger"
    "log"
    "os"
    "time"
)

type User struct {
    ID        uint `gorm:"primary_key"`
    Name      string
    Email     string
    Age       int
    CreatedAt time.Time
    UpdatedAt time.Time
}

func main() {
    // Connect to the database
    dsn := "username:password@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
        Logger: logger.Default.LogMode(logger.Info),
    })
    if err != nil {
        log.Fatalf("Error connecting to database: %v", err)
    }
    defer db.Close()

    // Auto Migrate the User struct
    db.AutoMigrate(&User{})

    // Create
    user := User{Name: "John Doe", Email: "john@example.com", Age: 30}
    db.Create(&user)

    // Read
    var fetchedUser User
    db.First(&fetchedUser, user.ID) // find user with primary key

    // Update
    db.Model(&fetchedUser).Update("Age", 31)

    // Delete
    db.Delete(&fetchedUser)
}
```
