# join

在 GORM 中进行数据库查询时，使用 `Joins` 方法可以实现多表连接（JOIN），从而进行复杂的数据查询。以下是几个示例，展示了如何在 GORM 中使用 `Joins` 方法进行不同类型的 JOIN 操作：

### 内连接（Inner Join）

假设有两个模型：`User` 和 `Profile`，它们通过外键关联：

```go
type User struct {
    gorm.Model
    Name     string
    Profile  Profile
    ProfileID uint
}

type Profile struct {
    gorm.Model
    Email string
}
```

使用 `Joins` 方法进行内连接查询，获取用户及其关联的详细信息：

```go
var users []User

db.Joins("Profile").Find(&users)

// SQL generated: SELECT * FROM users INNER JOIN profiles ON profiles.id = users.profile_id
```

### 左连接（Left Join）

假设有两个模型：`User` 和 `Post`，它们通过外键关联：

```go
type User struct {
    gorm.Model
    Name     string
    Posts    []Post
}

type Post struct {
    gorm.Model
    Title    string
    UserID   uint
}
```

使用 `Joins` 方法进行左连接查询，获取用户及其发布的所有文章：

```go
var users []User

db.Joins("left join posts on users.id = posts.user_id").Find(&users)

// SQL generated: SELECT * FROM users LEFT JOIN posts ON users.id = posts.user_id
```

### 自定义连接条件

有时候需要自定义连接条件，例如使用多个字段进行连接：

```go
var users []User

db.Joins("left join profiles on users.profile_id = profiles.id and profiles.email = ?", "example@example.com").Find(&users)

// SQL generated: SELECT * FROM users LEFT JOIN profiles ON users.profile_id = profiles.id AND profiles.email = 'example@example.com'
```

### 使用结构体作为连接条件

也可以使用结构体作为连接条件，这在多表复杂查询时很有用：

```go
type UserWithProfile struct {
    User
    Profile Profile
}

var usersWithProfiles []UserWithProfile

db.Joins("Profile").Find(&usersWithProfiles)

// SQL generated: SELECT * FROM users INNER JOIN profiles ON profiles.id = users.profile_id
```
