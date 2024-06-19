# Index

## 类型

- 单列索引（Single-Column Index）：基于单个列创建的索引。
- 多列索引（Multi-Column Index）：基于多个列创建的索引。
- 唯一索引（Unique Index）：确保索引列中的值唯一。
- 主键索引（Primary Key Index）：由主键自动创建的唯一索引。
- 全文索引（Full-Text Index）：用于全文搜索。
- 聚集索引（Clustered Index）：表的数据存储与索引顺序一致。
- 非聚集索引（Non-Clustered Index）：表的数据存储与索引顺序独立。

## 结构

- B树索引（B-Tree Index）：大多数数据库使用的一种平衡树结构。
- 哈希索引（Hash Index）：基于哈希表的数据结构，用于等值查询。
- GiST 索引（Generalized Search Tree Index）：用于多维数据类型，如地理数据。
- GIN 索引（Generalized Inverted Index）：用于包含多个值的列，如数组。

## 操作

- 创建索引
- 删除索引
- 查看索引
- 重建索引
