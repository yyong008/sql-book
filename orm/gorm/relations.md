# 关系

## 类型

| 关系类型      | 方法           |
|---------------|----------------|
| 一对一关系    | `HasOne`, `BelongsTo` |
| 一对多关系    | `HasMany`, `BelongsTo` |
| 多对多关系    | `Many2Many`     |
| 多态关系      | `Polymorphic`   |

## 一对一

```go
type User struct {
    gorm.Model
    Name    string
    Profile Profile
}

type Profile struct {
    gorm.Model
    UserID  uint
    Email   string
}

func (u *User) TableName() string {
    return "users"
}

func (p *Profile) TableName() string {
    return "profiles"
}

var user User
db.Preload("Profile").First(&user, 1)

```

## 一对多

```go
type Department struct {
    gorm.Model
    Name      string
    Employees []Employee
}

type Employee struct {
    gorm.Model
    Name        string
    DepartmentID uint
}

func (d *Department) TableName() string {
    return "departments"
}

func (e *Employee) TableName() string {
    return "employees"
}

var department Department
db.Preload("Employees").First(&department, 1)
```

## 多对多关系

```go
type Student struct {
    gorm.Model
    Name    string
    Courses []Course `gorm:"many2many:student_courses"`
}

type Course struct {
    gorm.Model
    Title    string
    Students []Student `gorm:"many2many:student_courses"`
}

func (s *Student) TableName() string {
    return "students"
}

func (c *Course) TableName() string {
    return "courses"
}


var student Student
db.Preload("Courses").First(&student, 1)
```

## 多态

```go
type Image struct {
    gorm.Model
    URL         string
    EntityID    uint
    EntityType  string
}

type User struct {
    gorm.Model
    Name    string
    Images  []Image `gorm:"polymorphic:Entity;"`
}

type Article struct {
    gorm.Model
    Title   string
    Images  []Image `gorm:"polymorphic:Entity;"`
}

func (u *User) TableName() string {
    return "users"
}

func (a *Article) TableName() string {
    return "articles"
}

var user User
db.Preload("Images").First(&user, 1)
```
