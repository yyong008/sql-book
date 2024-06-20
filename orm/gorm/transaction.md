# transaction

在 Go 中使用 ORM（如 GORM）进行事务管理是非常常见和重要的操作，特别是在需要确保多个数据库操作原子性的情况下。以下是关于在 Go 中使用 ORM 进行事务处理的基本示例和说明：

## 模型

```go
type User struct {
    gorm.Model
    Name  string
    Email string
}
```

## 流程

- db.Begin -> tx -> Create.Create -> tx.Rollback -> tx.Commit

## 示例

```go
tx := db.Begin()

user1 := User{Name: "Alice", Email: "alice@example.com"}
if err := tx.Create(&user1).Error; err != nil {
    tx.Rollback()
    log.Fatalf("Failed to create user1: %v", err)
}

user2 := User{Name: "Bob", Email: "bob@example.com"}
if err := tx.Create(&user2).Error; err != nil {

    tx.Rollback()
    log.Fatalf("Failed to create user2: %v", err)
}

if err := tx.Commit().Error; err != nil {
    log.Fatalf("Failed to commit transaction: %v", err)
}

```

### 说明

1. **开始事务**：使用 `Begin()` 方法在数据库上下文中启动一个事务。返回的 `tx` 对象可以用于执行事务操作。
2. **事务操作**：在事务中，使用 `tx.Create()` 或其他 GORM 方法执行数据库操作。如果任何操作失败，你可以调用 `tx.Rollback()` 回滚事务。
3. **提交事务**：在所有数据库操作成功完成后，使用 `tx.Commit()` 提交事务。如果提交时发生错误，需要处理异常情况。
4. **错误处理**：在事务操作中，如果发生任何错误，你应该立即回滚事务，并且在需要时记录或处理错误。
5. **注意事项**：确保在事务中的所有操作都是在同一个 `tx` 对象下完成的。任何对数据库的操作（查询、更新、删除等）都应该使用 `tx` 对象执行，而不是原始的 `db` 对象。
