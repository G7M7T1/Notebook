---
sidebar_position: 5
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

- DCL
  - 增删改
  - 修改密码
  - 管理权限

------

# DCL

## SQL分类

### DDL

- DDL：操作数据库和表

### DML

- DML：增删改表中数据

### DQL

- DQL：查询表中数据

### DCL

- DCL：管理用户，授权

## DBA

- 数据库管理员

## 管理用户

### 添加用户

- 1.创建用户

```sql
CREATE USER '用户名'@'主机名' INENTIFIED BY '密码';
```

### 删除用户

- 1.删除用户

```sql
DROP USER '用户名'@'主机名';
```

### 修改用户密码

- 1.修改

```sql
UPDATE USER SET PASSWORD = PASSWORD('新密码') WHERE USER = '用户名';
```

- 2.另一种

```sql
SET PASSWORD FOR '用户名'@'主机名' = PASSWORD('新密码');
```

- 3.修改root用户的密码

  - cmd --> net stop mysqsl 停止mysql服务（需要管理员运行cmd）

  - 启动无验证方式启动mysql

  - ```sql
    mysqld --skip-grant-tables
    ```

  - 打开新的cmd窗口，直接输入mysql命令，就可以登录成功

  - ```sql
    use mysql;
    ```

    ```sql
    UPDATE USER SET PASSWORD = PASSWORD('新密码') WHERE USER = 'root';
    ```

  - 关闭窗口，任务管理器结束mysql进程

  - 启动mysql服务，使用新密码登录

### 查询用户

- 1.切换到MySQL数据库

```sql
USE mysql;
```

- 2.查询user表

```sql
SELECT * FROM USER;
```

- 通配符 ： %表示可以任意主机使用用户登录数据库，

## 权限管理

### 查询权限

```sql
SHOW GRANTS FOR '用户名'@'主机名';
```

### 授予权限

```sql
GRANT 权限列表 ON 数据库名.表名 ON '用户名'@'主机名';
GRANT 权限列表1,权限列表2,权限列表3 ON 数据库名.表名 TO '用户名'@'主机名';
GRANT ALL ON *.* TO '用户名'@'主机名';
```

### 撤销权限

```sql
REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名'; 
```

