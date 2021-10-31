---
sidebar_position: 2
sidebar_label: 'Go Part 1st' 
---

# Topic

## 本文由以下元素组成

- Go语言介绍
- Go语言基础语法

# Go语言介绍

## 什么是Go

- Go 是一个开源的编程语言，它能让构造简单、可靠且高效的软件变得容易。
- Go > C > C++ > all

## 第一个HelloWorld

- Go语言源文件的扩展是.go

```go
import "fmt"

func main(){
   fmt.Println("hello,world")
}
```

- 输出

```go
Hello, World!
```

## Go支持的环境

Go 语言支持以下系统：

- Linux
- FreeBSD
- Mac OS X（也称为 Darwin）
- Windows

## Go的特性

Go 语言最主要的特性：

- 自动垃圾回收
- 更丰富的内置类型
- 函数多返回值
- 错误处理
- 匿名函数和闭包
- 类型和接口
- 并发编程
- 反射
- 语言交互性

## Go语言的结构

Go 语言的基础组成有以下几个部分：

- 包声明
- 引入包
- 函数
- 变量
- 语句 & 表达式
- 注释

```go
package main

import "fmt"

func main(){
   /* 老徐，我是你爹 */
   fmt.Println("hello,world")
}
```

1.第一行代码 package main定义了包名，必须得注释文件在哪个包，如：package main，package main表示一个可独立执行的程序，每个Go应用程序都得有

2.下一行 import "fmt" 告诉 编译器使用 fmt包（的函数，其它元素），fmt实现了格式化IO流的函数，这要是不懂就原地自杀

3.下一行 func main() 就是main函数

4.下一行 懂的都懂，注释，跟JAVA C / CPP一个样

5.下一行 fmt.Println("hello,world")，打印字符串到，并且自动增加换行字符'\n'，当然使用

```go
fmt.Print("hello,world");
```

也是可以的，不过Print没有ln，所以没有换行

Print 和 Println 这两个函数也支持使用变量

```go
fmt.Println(a)
```

6.当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头如：Nmsl，那么使用这种形式的标识符的对象可以被外部Package的代码所用（客户端程序需要先导入这个Package），这被称为“导出”，理解为面向对象中的public即可；标识符如果以小写字母开头如：nmsl，则是对包外不可见的，但是在内部是可以拿来用的，理解为面向对象中的protected即可。

# GO语言基础语法

## Go标记

- Go语言由多个Go标记组成
  - 关键字，标识符，常量，字符串，符号。

## 行分隔符

- Go语言中，一行等于一个语句结束，不用写分号。编译器会帮你办事的。
- 如果打算将多个语句写在一行，那要用分号，但是这样写会被扣工资。所以别学

```GO
fmt.Println("Hello, World!")
fmt.Println("我是AsheOne18")
```

## 注释

- 这个应该不用解释

```go
//单行注释
/*
多行
注释
*/
```

## 标识符

- 标识符用来命名变量，类型等程序实体。
- 第一个字符必须是字母或者下划线而不能是数字

以下是有效的标识符举例

```go
age score abc a b c _abc _cba
wtf520 hahaha doudizhu
```

无效

```go
1ab（数字开头）
case（go语言关键字）
a+b（不能是运算符）
```

## 字符串拼接

- Go语言字符串拼接由+号实现

```go
package main
import "fmt"
func main(){
   fmt.Println("hello,world"+"Ashe")
}
```

输出结果

```go
hello,worldAshe
```

## Go 语言的空格

- Go 语言中变量的声明必须使用空格隔开，如

```go
var number int
```

- 语句中适当使用空格能让程序更易阅读。
- 无空格

```go
sb=Iam+laoxu
```

- 有空格

```go
sb = Iam + laoxu
```

## 格式化字符串

- Go语言使用 fmt.Sprintf 格式化字符串并赋值给新字符串

```go
package main
import "fmt"

func main(){
	// %d 表示整形数字，%s表示字符串
	var a = 123
	var b = "efg"
	var c = "a%dbc%s"
	//var c = a 123 bc efg
	var target = fmt.Sprintf(c,a,b)
	fmt.Println(target)
}
```

