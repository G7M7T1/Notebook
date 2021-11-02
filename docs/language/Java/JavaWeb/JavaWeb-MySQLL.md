---
sidebar_position: 2
sidebar_label: 'MySQL-Part-2st'
---

# 前言

- 这是一个在JavaWeb过程中的MySQL，从0到1的学习笔记。
  - 因此，这篇Notes更适合在学习JavaWeb的过程中进行阅读
  - 更加全面的MySQL文章会在**"数据管理"**大纲下进行发布
- 内容主要为Base of MySQL
  - 概括为简单的CRUD基本操作
- It's more suitable for understanding in learning
  - 意味着这个Notes更容易帮助学习MySQL基础而不是作为字典查询
    - 当然，要当字典用也没事，看的懂并且理解最重要，看不懂我也没办法。
- 更权威的内容在 [这里](https://dev.mysql.com/doc/)，如果您觉得这篇markdown很弱智的话
- 如果有些问题通过Ctrl+F是解决不了的，[这里](https://www.google.com)一定有正确的解决方案

# 本文包含以下元素

- 约束
  - 主键约束
  - 非空约束
  - 唯一约束
  - 外键约束
  - 自动增长
  - 级联操作

# 约束

## 约束

### 概念

- 约束：对表中的数据进行限定，保证数据有效性和完整性。
- 分类：
  - 1.主键约束：primary key
  - 2.非空约束：not null
  - 3.唯一约束：unique
  - 4.外键约束：foreign key

## 主键约束

主键约束：非空且唯一

- 一张表只能有一个字段为主键
- 主键就是表中记录唯一的唯一标识

### 创建表时添加约束

```sql
CREATE TABLE stu(
	id INT PRIMARY KEY, -- 给id添加主键约束
	name VARCHAR(20)
);
```

### 创建表后添加约束

```sql
ALTER TABLE stu MODIFY id INT PRIMARY KEY;
```

### 删除主键约束

```SQL
ALTER TABLE stu DROP PRIMARY KEY;
```

## 非空约束

非空约束：not null，某一列的值不能有null

### 创建表时添加约束

```sql
CREATE TABLE stu(
	id INT,
	NAME VARCHAR(20) NOT NULL -- name为非空
);
```

### 创建表后添加约束

```sql
ALTER TABLE stu MODIFY NAME VARCHAR(20) NOT NULL;
```

### 删除非空约束

```sql
ALTER TABLE stu MODIFY NAME VARCHAR(20);
```

## 唯一约束

唯一约束：unique，某一列的值不能重复

注意：唯一约束可以有null值，但是只有一条记录为null

### 创建表时添加约束

```sql
CREATE TABLE stu(
	id INT,
	phone_number VARCHAR(20) UNIQUE -- 手机号
);
```

### 创建表后添加约束

```sql
ALTER TABLE stu MODIFY phone_number VARCHAR(20) UNIQUE;
```

### 删除唯一约束

```sql
ALTER TABLE stu DROP INDEX phone_number;
```

## 外键约束

外键约束：foreign key，让表与表之间产生关系，从而保证数据的安全和正确性

- 1.创建表时，可以添加外键

语法：

```sql
CREATE TABLE 表明(
	......
    外键列
    constraint 外键名称 FOREIGN KEY （外键列名称） REFERENCES 主表名（主表列名）
);
```

### 创建表时添加约束

```sql
-- 部门表
CREATE TABLE department(
	id INT PRIMARY KEY AUTO_INCREMENT,
    dep_name VARCHAR(20),
    dep_locationion VARCHAR(20)
)

-- 员工表
CREATE TABLE employee(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    age INT,
    dep_id INT, -- 外键对应主表的主键
    constraint emp_dept_fk FOREIGN KEY (dep_id) REFERENCES department(id)
)
```

### 创建表后添加约束

```sql
ALTER TABLE 表名emoployee ADD CONSTRAINT 外键名称emp_dept_fk FOREIGN KEY (外键列名称dep_id) REFERENCES 主表名（主表列名）department(id);
```

### 删除外键约束

```sql
ALTER TABLE 表名employee DROP FOREIGN KEY 外键名称emp_dept_fk;
```



## 自动增长

如果某一列是数值类型的，使用关键字

```sql
auto_increment 
```

可以来完成值的自动增长，一般用来配合主键约束

### 创建表时添加自增

```sql
CREATE TABLE stu(
	id INT PRIMARY KEY AUTO_INCREMENT,-- 给id添加主键约束
	name VARCHAR(20)
)
```

### 创建表后添加自增

```sql
ALTER TABLE stu MODIFY id INT AUTO_INCREMENT;
```

### 设置增长

```sql
INSERT INTO stu(NULL,'ccc');
```

也可以

```sql
INSERT INTO stu(10,'ccc');
```

### 删除自动增长

```sql
ALTER TABLE stu MODIFY id INT;
```

##  级联操作

### 级联操作语法

语法：

```sql
ALTER TABLE 表名 ADD CONSTRAINT 外键名称
FOREIGN KEY (外键字段名称 or 外键列名) REFERENCES 主表名称（主表列名） ON UPDATE CASCADE ON DELETE CASCADE;
```

### 分类

- 级联更新

```sql
-- 级联更新
ON UPDATE CASCADE
```

- 级联删除

```sql
-- 级联更新
ON DELETE CASCADE
```
