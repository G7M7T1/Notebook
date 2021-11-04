---
sidebar_position: 4
sidebar_label: 'MySQL-Part-4st'
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

- 多表查询
  - 笛卡尔积
  - 内连接查询，外连接查询，子查询
- 事物
  - 提交
  - 事物的四大特征
  - 事物的隔离级别
  - 数据库查询隔离级别
  - 数据库设置隔离级别

------

# 多表查询

## 多表查询

### 笛卡尔积

- 概念：有两个集合A，B。取这两个集合的所有组成情况。
- 要完成多表查询，要消除无用的数据。 

## 内连接查询

### 隐式内连接

- 概念：使用where条件来消除无用数据
- 例子：有两张表，名字为emp和dept

```sql
假设，两个表之间主键的id不一样，比如dept_id和id不一样
SELECT * FROM emp,dept WHERE emp.'dept_id' = 'dept.id';
附带一些条件就把*号替换成列的条件就行
SELECT emp.NAME,emp.gender,dept.name FROM emp,dept WHERE emp.'dept_id' = dept.'id';
但是这样写太麻烦了，取个别名就ok了
SELECT
	t1.name,
	t1.gender,
	t2.name
FROM 
	emp t1,
	dept t2
WHERE 
	t1.`dept_id` = t2.`id`;
```

### 显示内连接

语法：

```sql
SELECT 字段列表 FROM 表名1 INNER JOIN 表名2 on 条件;
```

例子：有两张表，名字为emp和dept

```sql
SELECT * FROM emp INNER JOIN dept ON emp.`dept_id` = dept.`id`;
```

其实：INNER可以省略，也就是不写

```sql
SELECT * FROM emp INNER JOIN dept ON emp.`dept_id` = dept.`id`;
```

### 内连接查询

- 1.从哪些表中查询
- 2.条件是什么
- 3.查询哪些字段

## 外连接查询

### 左外连接

- 语法

```sql
SELECT 字段列表 FROM 表1 LEFT OUTER JOIN 表2 ON 条件;
```

- 例子：查询所有员工信息，如果有员工有部门，则查询部门名称，没有则不显示部门名字

```sql
SELECT t1.*,t2.`name` FROM emp t1 LEFT OUTER JOIN dept t2 ON t1.`dept_id` = t2.`id`;
```

- 意义：查询的是左表所有数据以及交集部分。

### 右外连接

- 语法

```sql
SELECT 字段列表 FROM 表1 RIGHT OUTER JOIN 表2 ON 条件;
```

- 意义：查询的是右表所有数据以及交集部分。

### 总结

- 其实掌握一个就行了，用左外的比较多，左外右外是相对的，换个位置就行了。

## 子查询

### 概念

- 概念：查询中嵌套查询，称嵌套查询为子查询。
- 例子：查询员工最高工资

```sql
-- 查询最高工资有两部，第一步是先查最高工资
SELECT MAX(salary) FROM emp; -- 比如是9000
-- 其次查询员工信息，并且工资等于9000
SELECT * FROM emp WHERE emp.`salary` = 9000;
-- 但是如何将他们合为一步？直接
SELECT * FROM emp WHERE emp.`salary` = (SELECT MAX(salary) FROM emp);
```

### 子查询的三种情况

子查询的不同情况

- 子查询的结果是单行单列的
  - 子查询可以作为条件，使用运算符取判断。运算符：> >= < <= =

```sql
-- 查询员工工资小于平均工资的人
SELECT * FROM emp WHERE emp.salary < (SELECT AVG(salary) FROM emp)
```

------



- 子查询的结果是多行单列的

```sql
-- 查询'财务部'所有的员工信息
SELECT id FROM dept WHERE NAME = '财务部';
SELECT * FROM emp WHERE dept_id = 3;
-- 查询'财务部和市场部'所有的员工信息
SELECT id FROM dept WHERE NAME = '财务部' OR NAME = '市场部';
SELECT * FROM emp WHERE dept_id = 3 or dept_id = 2;

-- 简化一下
SELECT * FROM emp WHERE dept_id IN (3,2);
-- 写成一条
SELECT * FROM emp WHERE dept_id IN (SELECT id FROM dept WHERE NAME = '财务部' OR NAME = '市场部';);
```

------



- 子查询的结果是多行多列的
  - 子查询可以作为一个虚拟表参与查询

```sql
-- 查询员工入职日期是2011-11-11日之后的员工信息和部门信息

SELECT * FROM dept t1,(SELECT * FROM emp WHERE emp.`join_date` > `2011-11-11`;)t2
WHERE t1.id = t2.dept_id;
```

- 不过其实也可以用普通查询实现

```sql
-- 普通内连接
SELECT * FROM emp t1,dept t2 WHERE t1.`dept_id` = t2.`id` and t1.`join_date`>'2011-11-11';
```

# 事物

## 事物

### 概念

- 如果一个包含多个步骤的业务操作，被事物管理，那么这些操作要么同时成功，要么同时失败

### 操作

- 1，开启事物：start transaction；
- 2，回滚：rollback；
- 3，提交：commit；

### 例子

```sql
-- 1.开启事物
START TRANSACTION;
-- 张三-500元
UPDATE account SET balance = balance - 500 WHERE NAME = '张三';
-- 李四+500元
出错了
UPDATE account SET balance = balance + 500 WHERE NAME = '李四';
-- 2.发现出问题，回滚事物
COMMIT;
ROLLBACK;
```

### 自动提交

- MySQL数据库中事物默认提交

一条DML（增删改）语句会自动提交一次事物

### 事物两种提交

- 自动提交
  - MySQL就是自动提交的
    - 一条DML（增删改）语句会自动提交一次事物
- 手动提交
  - 需要先开启事物，然后手动commit
  - Oracle 数据库默认是手动commit事物
- 查看事物的默认提交方式

```sql
SELECT @@autocommit; -- 1代表自动提交，0代表手动提交
```

- 修改事物的默认提交方式

```sql
SET @@autocommit = 0;
-- 这个时候，如果继续写DML语句，如果不手动写commit，那么它是不会commit的
```

## 事物四大特征

### 原子性

- 原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败

### 持久性

- 持久性：当事物commit或者rollback后，数据库会持久化的保存

### 隔离性

- 隔离性：多个事物之间，相互独立，但是真正的实际操作，会互相影响，解决问题需要了解事物的隔离级别

### 一致性

- 事物操作前后，数据总量不变

## 事物的隔离级别

### 概念

- 多个事物之间是隔离的，相互独立的。但是如果多个事物操作同一批数据，则会应发一些问题，设置不同的隔离级别就可以解决这些问题。

### 存在问题

- 1.脏读：一个事物读取到另一个事物中没有提交的数据
- 2.不可重复读（虚读）：在同一个事物中，两次读取到的数据不一样
- 3.幻读：一个事物取操作（DML增删改）数据库表中所有的记录，另一个事物添加一条数据，则第一个事物查询不到自己的修改。

### 隔离级别

- 1.read and uncommitted：读未提交
  - 产生的问题：脏读、不可重复读、幻读
- 2.read committed：读已提交（Oracle默认）
  - 产生的问题：不可重复读、幻读
- 3.repeatable read：可重复读（MySQL默认）
  - 产生的问题：幻读
- 4.serializable：串行化（序列化）
  - 可以解决所有的问题

**注意：隔离级别从小到大安全性越来越高，但是效率越来越低。**

## 数据库查询隔离级别

### 语句

```sql
SELECT @@tx_isolation;
```

## 数据库设置隔离级别

### 语句

```sql
SET GLOBAL TRANSACTION ISOLATION LEVEL 级别字符串;
```

