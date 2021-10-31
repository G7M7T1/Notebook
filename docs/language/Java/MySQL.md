

\---
sidebar_position: 4
sidebar_label: 'JavaWeb-MySQL'
\---

# 前言

- 这是一个在JavaWeb过程中的MySQL，从0到1的学习笔记。
  - 因此，这篇Notes更适合在学习JavaWeb的过程中进行阅读
  - 更加全面的MySQL文章会在**"数据管理"**大纲下进行发布，因此这份MarkDown命名为JavaWeb-MySQL

- 内容主要为Base of MySQL
  - 概括为简单的CRUD基本操作
- It's more suitable for understanding in learning
  - 意味着这个Notes更容易帮助学习MySQL基础而不是作为字典查询
    - 当然，要当字典用也没事，看的懂并且理解最重要，看不懂我也没办法。
- 更权威的内容在 [这里](https://dev.mysql.com/doc/)，如果您觉得这篇markdown很弱智的话
- 如果有些问题通过Ctrl+F是解决不了的，[这里](https://www.google.com)一定有正确的解决方案

## 数据库

1.数据库（DataBase）简称DB

2.数据库概念

- 用于存储和管理数据的仓库

3.数据库的特点

- 1.持久化存储数据的，其实数据库就是一个文件系统
- 2.方便存储和管理数据
- 3.使用统一的方式操作数据库------SQL

## MySQL数据目录

- 几个概念
  - 数据库：文件夹
  - 表：文件
  - 数据：数据

## MySQL登录

```mysql
1. mysql -uroot -p密码
2. mysql -hip -uroot -p连接目标的密码
3. mysql --host=ip --user=root --password=连接目标的密码
```



## MYSQL退出

```mysql
1. exit
2. quit
```



# SQL

## SQL概念

Structred Query Language：结构化查询语言

其实就是定义了操作所有关系型数据库的规则

每一种数据库操作的方式存在不一样的地方，称为“方言”

## SQL通用语法

1.SQL语句可以单行或者多行进行书写，以分号结尾。

2.可以使用空格和缩进来增加语句的可读性

3.Mysql数据库的SQL语句不区分大小写，关键字建议使用大写

4.3种注释

```mysql
	单行注释：--注释内容 
或 # 注释内容（mysql 特有） 

​	多行注释：/* 注释 */
```



## SQL分类

- DDL（Data Definition Language）数据定义语言
  - 用来定义数据库对象：数据库，表，列等。关键字：create，drop，alter等
- DML（Data Manipulation Language）数据操作语言
  - 用来对数据库中表的数据进行增删改。关键字：insert，detele，update等
- DQL（Data Query Language）数据查询语言
  - 用来查询数据库中表的记录（数据）。关键字：select，where等
- DCL（Data Control Language）数据控制语言
  - 用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT，REVOKE等

# DDL：操作数据库、表

## 操作数据库：CRUD

​		C（Create）：创建

```mysql
- 创建数据库
  - create database 数据库名称
- 创建数据库，判断是否存在
  - create database if not exists 数据库名称；
- 创建数据库，并且指定字符集
  - create database 数据库名称 character set 字符集名；
- 综合：创建db4数据库，判断是否存在，并判断字符集为gbk
  - create database if not exists db4 character set gbk；
```

​		R（Retrieve）：查询

- 查询所有数据库名称：

  ```mysql
  show databases；
  ```

- 查询某个数据库的字符集：查看某个数据库的创建语句

  ```mysql
  show create database 数据库名字；
  ```

  U（Update）：修改

- 修改数据库的字符集

  ```mysql
  - - alter database 数据库名称 character set 字符集名称
  ```

  D（Detele）：删除

- 删除数据库

  ```mysql
  - - drop database 数据库名称；
  ```

- 判断数据库是否存在，存在再删除

  ```mysql
  - - drop database if exists 数据库名称;
  ```

  5.使用数据库

- 查询当前正在使用的数据库名称

  ```mysql
  select database();
  ```

- 使用数据库

  ```mysql
  use 数据库名称;
  ```

  

## 操作表：CRUD

- 1.C（Create）：创建

  - 语法：

    ```mysql
    create table 表明（
    
    	列名1 数据类型1，
    
    	列名2 数据类型2，
    
    	列名... 数据类型...，
    
    	列名n 数据类型n
    
    ）；
    ```

    注意，最后一列不需要加逗号，

  - 数据库常用类型

  - int：整数类型

    - age，int

  - double：整数类型

    - score，double（5，2）：最多有5位数，小数后最多2位数

  - date：日期，只包含年月日，yyyy-MM-dd

  - datetime：日期包含年月日时分喵，yyyy-MM-dd HH:mm:ss

  - timestamp：时间错类型 包含年月日时分秒

    * 如果将来不给时间错字段赋值，或者赋值为null，则默认使用当前系统时间自动赋值

  - varchar：字符串

    - name varchar（20）：最大20个字符
    - “马牛逼” ：3个字符

  - 复制表：

    - create table 表名 like 被复制的表名；

- 2.R（Retrieve）：查询

  查询某个数据中所有表的名称

  ```mysql
  show tables；
  ```

  查询表结构

  ```mysql
  desc 表名；
  ```

  3.U（Update）：修改

  ```mysql
  1. 修改表名
     1. alter table 表名 rename to 新表名;
  2. 修改表的字符集
     1. alter table 表名 character set 字符集名字;
  3. 添加一列
     1. alter table 表名 add 列名 数据类型;
  4. 修改列 名称 类型
     1. alter table 表名 change 列名 新列名 新数据类型;
     2. alter table 表名 modify 列名 新数据类型;
  5. 删除列
     1. alter table 表名 drop 列名;
  ```

- 4.D（Detele）：删除

  ```mysql
  - drop table 表名;
  - drop table if exists 表名;
  ```

  

# DML：曾删改表中的数据

## 添加数据

```mysql
insert into 表名（列名1，列名2，.......列名n） values（值1，值2，......值n）;
```

- 注意：

- - 1.列名和值要一一对应；
  - 2.如果表名后，不定义列名，则默认给所有列添加值
    - insert into 表名 values（值1，值2，......值n）；
  - 3.除了数字类型，其它类型需要用（单引双引都可以）引起来；

## 删除数据

- 删除：

```mysql
delete from 表名 [where 条件];
delete from student where id=1;	
```

- 注意：如果不加条件，则删除表中所有记录

- 如果要删除所有记录，有两种操作方法

  ```mysql
  1.detele from 表名; #不推荐使用，有多少条记录会执行多少次删除的操作
  2.TRUNCATE TABLE 表名; #先删除表，再创建一张一样的表
  ```

## 修改数据

1. 语法：

```mysql
update 表名 set 列名1 = 值1,列名2 = 值2,......[where 条件];
update 表名 set age = 17 where id=1;
```

注意：如果不加条件，则会将表中所有数据修改

# DQL：查询

## 语法

```mysql
select * from 表名;
```

```mysql
select
	字段列表
from
	表名列表
where
	条件列表
group by
	分组字段
having
	分组之后的条件限定
order by
	排序
limit
 	分页限定
```

## 基础查询

### 多个字段查询

```mysql
select 字段名1,字段名2,... from 表名;
```

- 注意：如果查询所有字段，则可以使用*号来代替字段的内容。

### 去除重复

```mysql
distinct
```

### 计算列

- 一般可以使用四则运算计算一些列的值

- ```mysql
  ifnull(表达式1,表达式2);
  ```

- 表达式1：哪个字段需判断是否为null，null参与的运算一切为null。

- 如果该字段为null后的替换值。

### 起别名

- as关键字，也可以省略，加一个空格就行

```mysql
SELECT NAME,math english,math+IFNULL(english,0) AS 总分 FROM student;
```

## 条件查询

### where子句后跟条件

### 运算符

```mysql
> 、 < 、 <= 、 >= 、 = 、<> :<>在SQL中表示不等于，在MYSQL中可以写!=
and 或者 && ：与，SQL中建议用and，后者不通用
or 或者 || ：或
not 或 ! ：非
SELECT * FROM student WHERE age>=20 AND age<=30;

BETWEEN......AND：在一个范围内，如 between 100 and 200，相当于条件在100到200之间，包头又包尾
SELECT * FROM student WHERE age BETWEEN 20 AND 30;

IN(集合) ：集合表示多个值，使用逗号分隔
SELECT * FROM student WHERE age IN(22,18,25);

IS NULL：(查询某一列为NULL的值)，不能写=NULL
SELECT * FROM student WHERE english IS NULL; 
SELECT * FROM student WHERE english IS NOT NULL;

LIKE'张%' ：模糊查询

```

## 查询语句

### 排序查询

- 语法：order by 子句

```mysql
order by 排序字段1 排序方式1,排序字段2 排序方式2..... ;
```

- 排序方式：
  - ACS：升序，默认的
  - DESC：降序

```mysql
SELECT * FROM student ORDER BY math ASC;
SELECT * FROM student ORDER BY math DESC;
```

- 如果有多个排序条件，则当前边的条件值一样时，才会判断第二条件

```mysql
SELECT * FROM student ORDER BY math ASC,english DESC;
```

### 聚合函数

### 分组查询

### 分页查询

# 约束

# 多表之间的关系

# 范式

# 数据库的备份和还原
