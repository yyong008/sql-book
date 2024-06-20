# raw-sql

## 操作原生sql

- Raw
- Exec
- Table

## 示例

```go
type User struct {
    ID       uint
    Username string
    Age      uint8
}
```

```go
sql := "SELECT id, username, age FROM users WHERE age > ?"
ageThreshold := 25

// 执行原生 SQL 查询，并映射结果到结构体切片
var users []User
db.Raw(sql, ageThreshold).Scan(&users)
```

```go
sql := "UPDATE users SET age = age + 1 WHERE age < ?"
ageThreshold := 30

// 执行原生 SQL 更新操作
result := db.Exec(sql, ageThreshold)
```


```go
sql := "SELECT id, username, age FROM users WHERE age > ?"
ageThreshold := 25

// 使用 Table 方法执行原生 SQL 查询，并映射结果到结构体切片
var users []User
db.Table("users").Raw(sql, ageThreshold).Scan(&users)
```
