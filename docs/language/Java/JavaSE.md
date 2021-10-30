

---

sidebar_position: 2

sidebar_label: 'JavaSE' 

---

# Topic

## 这是一个Private的Markdown，

- 用于记录自己的学习过程中的知识点
- 用于帮助将来上大学以后的学渣同学

# 基础

## 创建第一次hello world程序

String args[] 与 String[] args 都可以执行，但推荐使用 String[] args，这样可以避免歧义和误读。

```java
public class HelloWorld{
    public static void main(String[] args){
        System.out.println("HelloWorld");
    }
}
public class HelloWorld{
    //使用main可以创建一个main函数
		//使用sout可以创建一个System.out.println
}
```

## 注释

- 单行注释
- 格式：//注释信息
- 多行注释
- 格式：/*注释信息*/
- 文档注释
- 格式：/**注释信息**/

```java
/*
    Java程序中最基本的组成单位是类

    类的定义格式
        public class 类名 {}
 */
public class HelloWorld{
    /*
        这是main方法
        main方法是程序入口方法，代码的执行是从main方法开始的
    */
    public static void main(String[] args){
        //这是输出语句，“ ”里的内容是可以改变的
        System.out.println("HelloWorld");
    }
}
```

## 关键字

- 关键字的字母全是小写
- 常用的代码编辑器，针对关键字有特殊颜色标记

```java
public class HelloWorld{
    public static void main(String[] args){
        System.out.println("HelloWorld");
    }
}
```

## 常量

- 常量：在程序的运行中，不可修改值的变量
- 空常量不能直接输出！！！！！！！！！！

```java
字符串常量 用双引号括起来的内容 例如 "我是你爹"
整数常量   不带小数的数字       例如 666，222
小数常量   带小数的数字         例如 13.14 5.21
字符常量   用单引号括起来的内容  例如 'a' 'b' '我'
布尔常量   bool表示真假         例如 true false
空常量     一个特殊值，空值     值是null
public class ConstantDemo{
    public static void main(String[] args){
        //字符串常量
        System.out.println("HelloWorld");
        System.out.println("PHP最牛B了!");

        //整数常量
        System.out.println(666);
        System.out.println(-88);

        //小数常量
        System.out.println(5.21);
        System.out.println(6.66);

        //字符常量
        System.out.println('操');
        System.out.println('A');

        //布尔常量
        System.out.println(true);
        System.out.println(false);
        
        //空常量
        System.out.println(null)//会报错，空常量不能输出！！
    }
}
```

## 变量以及注意事项

- 变量：在程序运行中，其值可以发生改变
- 从本质上讲，变量是内存的一小块区域
- 变量格式： 数据类型 变量名 = 变量值；
- 例如 int a = 10；
- 提示！！！
- long类型定义的时候，为了防止整数过大，后面要加l
- float类型定义的时候，为了防止类型不兼容，后面要加f

```java
public class Var {
    public  static void main(String[] args){
        //定义变量
        int a = 10;
        //输出变量
        System.out.println(a);
        //修改变量
        a=20;
        //输出变量
        System.out.println(a);
    }
}
```

大多数的变量定义

```java
public class Var {
    public  static void main(String[] args){
        byte b = 10;
        short s = 10;
        int i = 10;
        float f = 10;
        double d = 10;
        char c = 'c';
        boolean bb = true;
        long l = 10;
    }
}
```

## 命名方法

- 小驼峰命名法：针对 方法、变量 命名

```java
约定1：标识符是一个单词的时候，首字母小写
例如：name
约定2：标识符是多个单词组成的时候，第一个首字母小写，其余大写
例如：firstName
```

- 大驼峰命名法：针对 类 命名

```java
约定1：标识符是一个单词的时候，首字母大写
例如：Student
约定2：标识符是由多个单词组成时，每个单词首字母大写
例如：GoodStudent
```

## 类型转换

自动类型转换：把一个表示数据范围小的数值或者变量赋值给另外一个数据表示范围大的变量

```java
public class Var {
    public  static void main(String[] args){
    //自动类型转换
        double d = 10;
        System.out.println(d);

        //定义byte类型变量
        byte b = 10;
        short s = b;
        int i = b;
        //char c = b;会报错
    }
}
```

强制类型转换：把一个表示数据范围大的数值或者变量赋值给另一个表示范围小的变量

- 语法：目标数据类型 变量名 = (目标数据类型)值 或 变量
- 例如：int k = (int)88.88;

```java
public class Var {
    public  static void main(String[] args){
    //强制类型转换
        int k = (int)88.88;
        System.out.println(k);
    }
}
```

# 运算符

## 算数运算符

- 运算符：对常量或者变量进行操作的符号
- 表达式：用 运算符 把常量或者变量链接起来符合java语法的句子就称表达式
- 例子

```java
int a = 10;
int b = 20;
int c = a+b;
+是运算符
a+b是表达式
public class OperatorDemo01{
    public static void main(String[] args){
        //定义两个变量
        int a = 6;
        int b = 4;
        System.out.println(a+b);
        System.out.println(a-b);
        System.out.println(a*b);
        System.out.println(a/b);
        //整数相处只能有整数，想要得到小数，必须有浮点型加入
        System.out.println(6.0/4);
    }
}
```

## 字符/字符串的+操作

拿字符在计算机底层 对应的数字进行计算

算数表达式中 包含多个数据类型的时候，整个算数表达式类型 会 自动提升

提升规则：

byte short char >>> int >>> long >>> float >>>double

```java
public class OperatorDemo01{
    public static void main(String[] args){
        //定义两个变量
        int i = 10;
        char c = 'A';
        System.out.println(i+c);
        int j = i+c;
        System.out.println(j);

        double d = 10 + 13.14;
        System.out.println(d);
    }
}
```

字符串，是拼接操作

从左到右 逐个执行

```java
public class OperatorDemo01{
    public static void main(String[] args){
        System.out.println("it"+"is"+"Leroy");
        System.out.println("我"+"想"+"找女朋友");
        System.out.println("老子"+666);
    }
}
```

## 赋值运算符

```java
= 赋值 a=10 将10赋值给a；

+=加后赋值 a+=b 将a+b赋值给a；

-=减后赋值 a-=b 将a-b赋值给a；

*=乘后赋值 a*=b 将a*b赋值给a；

/=除后赋值 a/=b 将a/b赋值给a；

%=取余后赋值 a%b 将a%b赋值给a；
public class Operator {
    public static void main(String [] args){
        //把10赋值给i
        int i = 10;
        System.out.println("i:"+i);
        //+= 把左边和右边的数据做加法操作，结果赋值给左边
        //i += 20;
        //也可以用
        // i = i+20;
        // i +=20 结果等于 i=i+20;

        //注意！
        short s = 10;
        s += 20;
        //s = s+20 会报错！做加操作时，会被提升为int类型，short和int类型不能相加
        //必须做强转！

        //s += 20会等于 s = (short)(s+20)
        //扩展的赋值运算符底层包含了强制类型转换
        //不建议这么写 s = (short)(s+20);
        //如果遇到 i = i+20; 那么推荐 用 i+=20;来写
        System.out.println("s:"+s);
    }
}
```

## 自增减运算符

```java
++等于自身加一
--等于自身减一
public class Operator {
    public static void main(String [] args){
        int i = 10;
        System.out.println("i="+i);

        //单独使用
        //i++;
        //++i;

        //参与操作使用
        //int j = i++;
        //J的 答案是10，因为i++的++还没做
        int j = ++i;
        //J的答案是11，因为++做完在做i
        System.out.println("i:"+i);
        System.out.println("j:"+j);
        
        //--的写法一样
    }
}
```

## 关系运算符

```java
== a==b 判断a等于b 返回true，否则false
!= a!=b 判断a不等于b 返回true 否则false
> a>b 判断a大于b 返回true 否则false
< a<b 判断a小于b 返回true 否则false
>= a>=b 判断a大于等于b 返回true 否则false
<= a<+b 判断a小于等于b 返回true 否则false
public class Operator {
    public static void main(String [] args){
        int i = 10;
        int j = 20;
        int k = 10;

        //==
        System.out.println(i == j);
        System.out.println(i == k);
        System.out.println("---------");
        //!=
        System.out.println(i != j);
        System.out.println(i != k);
        System.out.println("---------");
        //> or >=
        System.out.println(i > j);
        System.out.println(i >= j);
        System.out.println(i > k);
        System.out.println(i >= k);
        System.out.println("---------");
        //< or <=
        System.out.println(i < j);
        System.out.println(i <= j);
        System.out.println(i < k);
        System.out.println(i <= k);
        
    }
}
```

## 逻辑运算符

在数学中，一个x，大于3，小于6，那么可以用3<X<6来表示

在JAVA中，要先拆解再进行表达

- 拆解为：X>3和X<6
- 合成后：X>3&&X<6
- &&就是逻辑运算符，逻辑运算符 是 表达 链接关系表达式 的 运算符
- 逻辑运算符可以链接 bool类型的常量or变量

```java
& 与  a&b a和b都为true，结果为true，否则为false
| 或  a|b a和b只要有一个true，结果为true，否则为false
^ 异或 a^b a和b的结果不同，结果为true，否则为false
! 非 int a = 10;  取反
!a 那么a=-10;
public class Operator {
    public static void main(String [] args){
        int i = 10;
        int j = 20;
        int k = 30;

        //& 有false则false
        System.out.println( i>j & i>k );//false & false
        System.out.println( i<j & i>k );//true  & false
        System.out.println( i>j & i<k );//false & true
        System.out.println( i<j & i<k );//true  & true
        System.out.println("老子是分割线----------------");

        //| 有true则true
        System.out.println( i>j | i>k );//false | false
        System.out.println( i<j | i>k );//true  | false
        System.out.println( i>j | i<k );//false | true
        System.out.println( i<j | i<k );//true  | true
        System.out.println("老子是分割线----------------");

        //^ 相同为false否则为true
        System.out.println( i>j ^ i>k );//false ^ false
        System.out.println( i<j ^ i>k );//true  ^ false
        System.out.println( i>j ^ i<k );//false ^ true
        System.out.println( i<j ^ i<k );//true  ^ true
        System.out.println("老子是分割线----------------");

        //! 取反！反着来
        System.out.println(i>j);//false
        System.out.println(!(i>j));//true
        System.out.println(!!(i>j));//false
        System.out.println(!!!(i>j));//true
    }
}
```

## 短路逻辑运算符

```java
&& 短路与 作用和&相同，但是有短路效果 如果左边为false，右边不执行
|| 短路或 作用和|相同，但是有短路效果 如果左边为true，右边不执行
public class Operator {
    public static void main(String [] args){
        int i = 10;
        int j = 20;
        int k = 30;

        //& 有false则false
        System.out.println( i>j && i>k );//false
        System.out.println( i<j && i>k );//false
        System.out.println( i>j && i<k );//false
        System.out.println( i<j && i<k );//true
        System.out.println("老子是分割线----------------");

        //| 有true则true
        System.out.println( i>j || i>k );//false
        System.out.println( i<j || i>k );//true
        System.out.println( i>j || i<k );//false
        System.out.println( i<j || i<k );//true
        System.out.println("老子是分割线----------------");

        //&&和&的区别
        //System.out.println((i++>100)&(j++>100));//false & false
        System.out.println((i++>100)&&(j++>100));//false && false
        System.out.println("i:"+i);
        System.out.println("j:"+j);
    }
}
```

## 三元运算符

- 格式：关系表达式？表达式1：表达式2；
- 例如 a>b?a:b;
- 首先计算关系表达式的值
- 如果true，return一个表达式1，否则return一个表达式2

```java
public class Operator {
    public static void main(String [] args){
        int a = 10;
        int b = 20;

        int sum = a>b?a:b;
        System.out.println(sum);
    }
}
```

```java
public class Operator {
    public static void main(String [] args){
        int tigerone=180;
        int tigertwo=200;
        boolean nice = tigerone==tigertwo ? true : false;
        System.out.println(nice);
    }
}
```

## 数据的输入/import java.util.Scanner;

```java
导包
	import java.util.Scanner;
创建对象
	Scanner sc = new Scanner(System.in);
接收数据
	int i = sc.nextInt();
```

```java
import java.util.Scanner;

public class Operator {
    public static void main(String [] args){
        //创建对象
        Scanner sc = new Scanner(System.in);
        //接收数据
        int x = sc.nextInt();
        //输出数据
        System.out.println("x:"+x);
    }
}
```

# 流程控制

## if结构

- 格式
- if（关系表达式）{
- 语句体;
- }
- 首先计算关系表达式的值
- 如果关系表达式的值为true就执行语句体
- 如果值为false就不执行语句体

```java
public class OrderDemo {
    public static void main(String[] args){

        System.out.println("开始");
        int a = 10;
        int b = 10;
        //如果a==b，那么print a == b;
        if (a==b) {
            System.out.println("a==b");
        }
    }
}
```

## if else结构

- 格式
- if（关系表达式）{
- 语句体1;
- }else{
- 语句体2;
- }
- 首先计算关系表达式的值
- 如果关系表达式的值为true就执行语句体1
- 如果值为false就执行语句体2
- 继续执行后面的语句内容

```java
public class OrderDemo {
    public static void main(String[] args){

        System.out.println("开始");
        int a = 10;
        int b = 100;
        //如果a==b，那么print a == b;
				//如果a!=b,那么print a!=b;
        if (a==b) {
            System.out.println("a==b");
        }else
        {
            System.out.println("a!=b");
        }
    }
}
```

## if ……else if……if结构

```java
格式：
if(表达式1){
语句体1
}else if(表达式2){
语句体2
}
……
else{
语句体n+1;
}
```

```java
import java.util.Scanner;

public class OrderDemo {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        //输入星期数，1-7，输出对应星期一-星期七；
        System.out.println("请输入一个星期数");
        int week = sc.nextInt();

        //开始判断
        if(week == 1){
            System.out.println("今天是星期一");
        }else if(week == 2){
            System.out.println("今天是星期二");
        }else if(week == 3){
            System.out.println("今天是星期三");
        }else if(week == 4){
            System.out.println("今天是星期四");
        }else if(week == 5){
            System.out.println("今天是星期五");
        }else if(week == 6){
            System.out.println("今天是星期六");
        }else if(week == 7){
            System.out.println("今天是星期七");
        }else{
            System.out.println("您输入的有误，大傻逼");
        }
    }
}
```

## switch语句

```java
格式：
switch（表达式）{
case 值1:
				语句体1；
				break；
case 值2:
				语句体2；
				break；
……
default:
				语句体n+1;
				[break;]
}
笔记：
	表达式：取值为byte,short,int,char,JDK5以后可以是枚举，JDK7以后可以是String
	Case：后面跟的是 要和 表达式进行比较的值
	Break：表示中断，结束的意思，用来结束switch语句
	Default：当做else来用就行
```

```java
import java.util.Scanner;

public class OrderDemo {
    public static void main(String[] args) {
        //星期一到星期天
        Scanner sc = new Scanner(System.in);
        System.out.println("输入一个星期一到星期天");
        int week = sc.nextInt();

        switch (week){
            case 1:
                System.out.println("星期一");
                break;
            case 2:
                System.out.println("星期二");
                break;
            case 3:
                System.out.println("星期三");
                break;
            case 4:
                System.out.println("星期四");
                break;
            case 5:
                System.out.println("星期五");
                break;
            case 6:
                System.out.println("星期六");
                break;
            case 7:
                System.out.println("星期七");
                break;
            default:
                System.out.println("您输入的有误");
                break;
        }
    }
}
```

## for循环

```java
循环结构的组成：

特征：重复做某些事情，从哪里开始做？做到什么时候结束？

初始化语句：用于表示循环的起始状态，表示 循环开始的时候是啥样？
条件判断语句：用于表示循环的调节，判断 是否能一直循环下去？
循环体语句：用于表示循环的行为，表示 循环做啥事？
条件控制语句：用于表示循环过程中每次变化的内容，控制程序是否能执行下去？

循环结构对应的语法：

初始化语句：一条或者多条语句，完成初始化的操作
条件判断语句：这是一个boolean类型的表达式，表达式决定是否执行循环体，例如a<3
循环体语句：任意语句，主要是干嘛，例如for循环打印 老铁666，则System.out.println("老铁666")
条件控制语句：这里通常是一条语句改变变量的值，达到控制循环是否向下执行的操作，例如i++

for(初始化语句;条件判断语句;条件控制语句){
	循环体语句;
}
```

```java
public class OrderDemo {
    public static void main(String[] args) {
        //打印5次”老铁666“
        for(int i=0;i<5;i++){
            System.out.println("老铁666");
        }
    }
}
```

## while循环语句

```java
基本格式：
while(条件判断语句){
	循环体语句;
}
完整格式：
while(条件判断语句){
	循环体语句;
	条件控制语句;
}

执行流程
1.执行初始化语句
2.执行条件判断语句，看结果是true还是false
如果是true，继续执行
如果是false，停止执行

3.执行循环体语句
4.执行条件控制语句
5.回到2继续
```

```java
public class OrderDemo {
    public static void main(String[] args) {

        int j = 1;
        while(j<=5){
            System.out.println("hello");
            j++;
        }
    }
}
```

## do……while循环语句

```java
基本格式
do{
	循环体语句;
}while(条件判断语句);
完整格式
do{
	循环体语句
	条件控制语句
}while(条件判断语句);
```

```java
public class OrderDemo {
    public static void main(String[] args) {

        int j = 1;
        do {
            System.out.println("hello");
            j++;
        } while (j <= 5);
    }
}
```

## 三种循环的区别和死循环

- 三种循环的区别：
  - for循环和while循环是，先判断条件是否成立，才执行循环体语句（先判断后执行）
  - do while是先循环一次！后面判断条件是否成立，才执行循环体语句（先执行后判断）
  - 简单理解：for和while是直男，觉得合适才谈恋爱
  - 简单理解：do while是渣男，先上床再决定是否恋爱
- for和while的区别：
  - 条件控制语句所控制的自增变量，因为归属for循环的语法结构中，在for循环后，就不会被访问到了。
  - 例如for（int i=0；），当出了for循环后，这个i，可以被再次初始化或者定义！
  - 里面的i和外面的i不是同一个i，但是for循环里的变量通常是 i，j，k等等，国际惯例，瞎b写别人看不懂
  - 条件控制语句所控制的自增变量，例如这个 while(i<5)，出了这个while循环，i 还可以继续用！

```java
for(;;){}
while(true){}
do{}while(true)

死循环一般用while，使用ctrl+c在命令符提示窗口可以结束死循环
```

## 跳转控制语句 break/continue

- continue 用在循环中，基于条件控制，跳过某次循环执行体的内容，继续下一次执行
- break 用在循环中，基于条件控制，终止循环体执行内容，也就是结束循环

```java
public class OrderDemo {
    public static void main(String[] args) {

        for(int i = 1;i<=5;i++){
            if(i%2 == 0){
                //continue; 只会输出1，3，5，跳过2和4
                //break; 只会输出1，2符合条件，并break，不输出了
            }

            System.out.println(i);
        }
    }
}
```

## 循环嵌套

语句结构：

- 顺序语句 以分号;结尾，表示一句话结束

- 分支语句 一对大括号表示if的整体结构，整体描述一个完整的if语句

  ```
                  一对大括号表示switch的整体结构，整体描述一个完整的switch语句
  ```

- 循环语句 一对大括号表示for的整体结构，整体描述一个完整的for语句

  ```
                  一对大括号表示while的整体结构，整体描述一个完整的while语句
  
            do while以分号结尾，整体描述一个完整的do while语句
  ```

任何语句 对外 都可以看成一句话，一句代码

什么是嵌套循环？？？

```java
for(;;){
	for(;;){
	…………
	}
}
```

## random随机数/import java.util.Random

作用：产生一个随机数

使用步骤：

1. 导包

```java
import java.util.Random;
```

2.创建对象

```java
Random r = new Random();
```

3.获得随机数

```java
int num = r.nextInt(10);//获取的范围：[0,10]，包括0，不包括10
```

```java
import java.io.StreamCorruptedException;
import java.util.Random;

public class OrderDemo {
    public static void main(String[] args) {
        Random r = new Random();
        
        int num = r.nextInt(10);
        System.out.println("num="+num);
    }
}
```

用for循环获取10个随机数

```java
import java.util.Random;

public class OrderDemo {
    public static void main(String[] args) {
        Random r = new Random();

        for(int i=0;i<10;i++){
            int num = r.nextInt(10);
            System.out.println("num="+num);
        }
    }
}
```

# 数组

## 数组定义格式

- 一次性要声明大量的用于储存数据的变量
- 要储存的类型通常是 同类型的数据类型 例如：考试分数

a = 100;

b = 100;

c = 100;

d = 100;

e = 100;

f = 100;

g = 100;

- 数组（array）是一个用于存储多个 相同类型 的数据储存模型

```java
数组的的定义模式
格式一：数据类型[] 变量名
int[] arr
阅读方法：定义了一个int类型的数组，名字是arr

格式二：数据类型 变量名[]
int arr[]
阅读方法：定义了一个int类型的变量，名字是arr数组

格式1的读法更好！推荐使用格式1定义数组！
```

## 动态初始化数组

Java中的数组，必须要先初始化，才能使用

所谓初始化，为数组中的元素分配内存空间，并为每个数组元素赋值

初始化方式

- 动态初始化：初始化的时候指定array的长度，由系统为数组分配初始值

```java
格式
数据类型[] 变量名 = new 数据类型[数组长度];
int[] arr = new int[3];
public class ArrayDemo {
    public static void main(String[] args) {
        int[] arr = new int[3];
        /*
        左边
            int:数组中元素类型是int
            []:说明是一个array
            arr：array的名称
        右边
            new:为数组申请内存空间
            int:说明数组的元素是int
            []:说明这个一个array
            3:数组长度，元素个数
         */
    }
}
```

## 数组元素访问

- 数组变量访问方式
- 格式：数组名
- 数组内部保存的数据的访问方式
- 格式：数组名[索引]

例如：

- 刘鑫，大明，小明，小红，被记录在一个 数组中
- 在现实生活中
- 刘鑫为1，大明为2，小明为3，小红为4；
- 在计算机中
- 刘鑫为0，大明为1，小明为2，小红为3；
- 索引就是数组中的编号方式
- 作用：索引用于访问数组中的数据所用，数组名[索引]等同于变量名，是一种特殊的变量名
- 特征1，索引从0开始
- 特征2，索引是连续的
- 特征3，索引逐一增加，每次+1

```java
public class ArrayDemo {
    public static void main(String[] args) {
        int[] arr = new int[3];
        //输出数组名
        System.out.println(arr);//输出[I@7c30a502 这是地址值！
        //输出数组中的元素
        System.out.println(arr[0]);//输出0,第一个元素
        System.out.println(arr[1]);//输出0,第二个元素
        System.out.println(arr[2]);//输出0,第三个元素
    }
}
```

## 内存分配

Java程序在运行的时候，需要在内存中分配空间，为了提高运行效率，就对空间进行了不同的划分，因为每一片区域都有特定的处理数据和内存管理方式

例如 数值在初始化时，会为存储空间添加默认值

- 整数，默认值0
- 浮点数，默认值0.0
- BOOL值，默认值false
- 字符，默认是空字符
- 引用数据类型，默认是NULL

堆内存,存储局部变量

定义在方法中的变量，例如arr

使用完毕立马消失

堆内存,储存new出来的内容（实体，对象）

数值在初始化时，会获得默认值

每一个new出来的东西都会有地址值，使用完毕，会在垃圾回收器空闲时被回收

## 静态数组初始化

静态初始化：初始化时指定每个数组的初始值，由系统决定数组长度

- 格式

```java
数据类型[] 变量名 = new 数据类型[]{数据1，数据2，数据3};
例如 int[] arr = new int[]{1,2,3};

简化格式 (推荐方式)
数据类型[] 变量名 = {数据1，数据2，数据3};
例如 int[] arr = {1,2,3};

public class ArrayDemo {
    public static void main(String[] args) {
        //定义数组
        int[] arr={1,2,3};

        System.out.println(arr);
        System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);

    }
}
```

## 遍历 arr.length

格式：数组名.length

例如：arr.length

```java
public class ArrayDemo {
    public static void main(String[] args) {
        //定义数组
        int[] arr = {11,22,33,44,55};
        //使用通用遍历格式
        for(int x=0;x<arr.length;x++){
            System.out.println(arr[x]);
        }
    }
}
```

## 最值

- 1，定义数组
- 2，创建一个max，以arr[0]作为初始值
- 3，用max和剩余数字对比，如果arr[x]>max，那么将axx[x]赋值给max，也就是更新max
- 4，对比结束，打印max
- 5，最小值同理

```java
public class ArrayDemo {
    public static void main(String[] args) {
        //定义数组
        int[] arr = {11,22,33,44,55};
        //创建一个max,取数组中第一个数据作为变量的初始值
        int max = arr[0];
        //与数组中剩余的数字进行 挨个对比，每次将最大值保存到max中
        for(int x=1;x<arr.length;x++){
            if(arr[x]>max){
                max=arr[x];
            }
        }
        //循环结束后，打印max
        System.out.println("最大值为:"+max);
    }
}
```

# 方法

## 方法的定义和调用

- 方法（method）是将 具有 独立功能的代码块组织为一个整体，使其具有特殊功能的  代码集
- 注意！方法必须先创建才能使用，该过程称为 定义
- 方法创建后并不是立马能直接运行，需要调用后才能执行；
- 先定义再调用；

定义方法

```java
格式：
public static void 方法名(){
	//方法体
}
例如：
public static void isEvenNumber(){
	//方法体
}
```

调用方法

```java
格式: 方法名();
例如：isEvenNumber();
```

```java
//定义一个方法，在方法定义一个变量，判断该数据是奇数还是偶数？
public class MethodDemo {
    public static void main(String[] args) {
        //调用
        isEvenNumber();
    }
    //定义一个方法，在方法定义一个变量，判断该数据是奇数还是偶数？
    public static void isEvenNumber(){
        int number = 10;
        //判断该数据是否是偶数
        if(number%2==0){
            System.out.println(true);
        }else{
            System.out.println(false);
        }
    }
}
```

```java
设计一个方法打印两个数中较大的数
public class MethodDemo {
    public static void main(String[] args) {
        da();
    }
    public static void da(){
        int num1 = 10;
        int num2 = 20;
        if(num1>num2){
            System.out.println(num1);
        }else{
            System.out.println(num2);
        }
    }
}
```

## 带参数的方法的定义和调用

```java
格式：public static void 名(参数){}

单参: public static void 名(数据类型 变量名){}
例如: public static void isEvenNumber(int max){}

多参: public static void 名(数据类型1 1的名字，数据类型2 2的名字){}
例如: public static void isEvenNumber(int a,int b){}
```

- 定义方法的时候，参数中的数据类型和数据名缺一不可，会报错
- 定义方法的时候，多个参数用逗号，来分割；

调用

```java
格式: 方法名（参数）;
单参：方法名（变量名/常量值）;
例如：isEvenNumber(5);

多参：方法名（变量名1/常量值1，变量名2/常量值2）;
例如：isEvenNumber(5,6);
```

调用方法的时候，参数的数量与类型必须和定义的时候匹配，否则报错；

```java
public class MethodDemo {
    public static void main(String[] args) {
        //常量值调用
        isEvenNumber(10);
        //变量调用
        int sb=20;
        isEvenNumber(sb);
    }
    //判断奇偶数
    public static void isEvenNumber(int number){
        if(number%2==0){
            System.out.println(true);
        }else {
            System.out.println(false);
        }
    }
}
```

## 形参和实参

- 形参：方法定义中的参数
- 实参：方法定义中的参数

```java
public class MethodDemo {
    public static void main(String[] args) {
        //常量值调用
        isEvenNumber(10);
        //变量调用
        int sb=20;
        isEvenNumber(sb);
    }
    //判断奇偶数
    public static void isEvenNumber(int number){
        if(number%2==0){
            System.out.println(true);
        }else {
            System.out.println(false);
        }
    }
}
```

int number就是形参

调用后的 10 和 sb都是实参

- 练习题，找最大值

```java
public class MethodDemo {
    public static void main(String[] args) {
        // 第一个方法
        getMax(10,20);
        // 第二个方法
        int a = 22;
        int b = 93;
        getMax(a,b);
    }
    public static void getMax(int a,int b){
        if(a>b){
            System.out.println(a);
        }else{
            System.out.println(b);
        }
    }
}
```

## 带返回值的方法的定义和调用

- 带返回值的定义

```java
格式:
public static 数据类型 方法名 （参数）{
	reutnr 数据
}
例如:
public static boolean isEvenNumber(int number){
	return true
}
例如:
public static int getMax(int a,int b){
	return 100
}
方法返回值return后面的数据类型一定要去上面定义的数据类型相匹配，小心报错~
```

- 带返回值的调用

```java
格式:
isEvenNumber(5);
例如:
boolean flag = isEvenNumber(5);
方法的返回值通常需要变量接收，如果不需要变量接收，那将毫无意义~
```

```java
public class MethodDemo {
    public static void main(String[] args) {
        //1.方法名（参数）
        isEvenNumber(10);
        //2.数据类型 变量名 = 方法名（参数）
        boolean flag = isEvenNumber(3);
        //boolean flag = false; 所以 输出flag=输出true
        System.out.println(flag);
    }
    //定义一个Method，该方法接收一个参数，判断该数据是否为偶数，并返回true or false
    public static boolean isEvenNumber(int num){
        if(num%2==0){
            return true;
        }else{
            return false;
        }
    }

}
```

## 方法的注意事项

- 方法不能被嵌套
- void表示无返回值，也可以省略不用写return，也可以单独书写return，后面不加数据

## 方法的重载

```java
//两个数据求和
public static int sum(int a,int b){
	return a+b;
}
//三个数据求和
public static int sum(int a,int b,int c){
	return a+b+c;
}
```

- 方法重载指同一个class中定义多个方法之间的关系，满足下列条件的多个方法相互构成重载
  - 多个方法在同一个类中
  - 多个方法具有相同的方法名
  - 多个方法的参数不相同，类型不同或者数量不同

- 重载仅对应方法的定义，与方法的调用无关，调用方法参照标准格式
- 重载仅针对同一个类中方法的名称与参数进行识别，与返回值无关，换句话说，不能通过返回值来判定两个方法是否互相构成重载

```java
错误例子：
public class MethodDemo{
	public static void fn(int a){
		方法体
}
	public static int fn(int a){
		方法体
}
}
方法名相同！但是参数也相同~，都是int类型，所以它不是，跟void和int没关系~重点看方法名和参数
```

```java
正确例子:
public class MethodDemo{
	public static void fn(int a){
		方法体
}
	public static int fn(int a,int b){
		方法体
}
}
方法名相同，参数列表不同，这是方法重载
正确例子:
public class MethodDemo{
	public static void fn(int a){
		方法体
}
	public static int fn(double a){
		方法体
}
}
方法名相同，参数列表不同，这是方法重载
```

```java
错误例子:
正确例子:
public class MethodDemo{
	public static void fn(int a){
		方法体
}
	public static int fn2(double a){
		方法体
}
}
方法名不同~~~~~
```

```java
实际操作
public class MethodDemo {
    public static void main(String[] args) {
        //调用方法类型
        int result = sum(1,2);
        System.out.println(result);
        double result1 = sum(1.2,1.3);
        System.out.println(result1);
        int result2 = sum(1,2,3);
        System.out.println(result2);
    }
    //需求1，求2个int类型的和的方法
    public static int sum(int a,int b){
        return a+b;
    }
    //需求2，求2个double类型和的方法
    public static double sum(double a,double b){
        return a+b;
    }
    //需求3，求3个int类型的和的方法
    public static int sum(int a,int b,int c){
        return a+b+c;
    }
}
```

# 面向对象

## 类和对象

- 对象的定义

  - 万物皆为对象，女朋友也是。

- 面向对象

  - 面向对象就是面向对象

- 类

  - 类是对现实生活中，一类具有 共同属性 和 行为的事物抽象
  - 男人和女人，属于class 人类

- 类的特点

  - 类是对象的数据类型
  - 类是具有相同属性和行为的一组对象集合

- 属性

  - 对象具有的各种特征，每个对象的每个属性都有特定的值
  - 对象如果是一个手机，价格，品牌，内存，都是它的属性

- 行为

  - 对象能够执行的操作
  - 例如，手机能够打电话，发短信，都是行为

  ```cpp
  类：手机
  
  属性：品牌，内存，手机
  
  行为：刷抖音，听歌，打电话
  ```

## 类的定义

类的重要性：无类无JAVA，是JAVA程序的基本组成单位

- 类是对现实生活中，一类具有 共同属性 和 行为的事物抽象

类的组成：属性 行为

- 属性：在类中通过 成员变量 来体现（类中方法外的变量）
- 行为：在类中通过 成员方法 来体现（和前面的方法相比去掉static关键字即可）

```java
类的定义步骤
1.定义类
2.编写类的成员变量
3.编写类的成员方法

public class 类名{
	//成员变量
	变量1的数据类型 变量1;
	变量2的数据类型 变量2;
	//成员方法
	方法1；
	方法2；
}

public class 手机{
	//成员变量
	品牌的数据类型 品牌1;
	价格的数据类型 价格2;
	//成员方法
	打电话；
	刷抖音；
}

```

```java
public class Phone {
    //成员变量/属性
    String brand;//品牌
    int price;//价格

    //成员方法
    public void call(){
        System.out.println("打电话");
    }
    public void wechat(){
        System.out.println("聊微信");
    }
}
```

## 对象的使用

- 创建对象

```java
格式：类名 对象名 = new 类名();
例如: Phone p = new Phone();
```

- 使用对象变量

```java
格式: 对象名.变量名
例如: p.brand
```

- 使用对象方法

```java
格式:对象名.方法名()
例如:p.call();
public class Phone {
    //成员变量/属性
    String brand;//品牌
    int price;//价格

    //成员方法
    public void call(){
        System.out.println("打电话");
    }
    public void wechat(){
        System.out.println("聊微信");
    }
}

public class PhoneDemo {
    public static void main(String[] args) {
        //对象创建
        Phone p = new Phone();
        //使用成员变量
        p.brand = "苹果";
        p.price = 1999;
        System.out.println(p.brand);
        System.out.println(p.price);
        //使用成员方法
        p.call();
        p.wechat();
    }
}
```

## Private关键字的定义和使用

- Private关键字的定义

  - 是一个权限修饰符
  - 可以修饰成员（成员变量和方法）
  - 作用是保护成员不被别的类使用，被private修饰的成员只有本类中能访问

- 针对private修饰的成员变量，如果要被其他类使用，提供相对应操作

  - 提供 get变量名() 方法，用于获取成员变量的值，方法用public修饰
  - 提供 set变量名(参数)方法，用于设置成员变量的值，方法用public修饰

  ```java
  在Student的类中
  
  public class Student {
      //学生属性设为私有
      private String m_Name;
      private int m_Age;
  
      //提供get/set方法
      public void setAge(String name,int age){
          m_Name = name;
          if(age<0||age>100){
              System.out.println("您给的年龄有误");
          }else{
          m_Age = age;
          }
      }
      //学生方法
      public void showPerson(){
          System.out.println("学生的名字是"+m_Name);
          System.out.println("学生的年龄是"+m_Age);
      }
  }
  
  在StudentDemo的类中
  public class StudentDemo {
      public static void main(String[] args) {
          //创建对象
          Student p = new Student();
          p.setAge("马牛逼",199);
          p.showPerson();
      }
  }
  ```

- 如何使用private?

- 一般用 类 里面 写好的show就行了，不用在外面用get的方式重写，没啥意义。

```java
//Student类
public class Student {
    //menber变量
    private String name;
    private int age;

    //get/set Name方法
    public void setName(String n){
        name = n;
    }
    public String getName(){
        return name;
    }
    //get/set Age方法
    public void setAge(int a){
        age = a;
    }
    public int getAge(){
        return age;
    }
    //show
    public void showStudent(){
        System.out.println(name + "," + age);
    }
}

//测试类
public class StudentDemo {
    public static void main(String[] args) {
        //创建对象
        Student s = new Student();
        //使用set方法赋值
        s.setName("马牛逼");
        s.setAge(19);
        //展示
        s.showStudent();

        //使用get变量获取menber变量的值
        System.out.println(s.getName()+"-----"+s.getAge());
    }
}
```

## this

- this修饰的变量用于指代成员变量

  - 方法的形参如果与成员变量同名，不带this修饰的变量指的是形参，而不是成员变量
  - 方法的形参没有与成员变量同名，不带this修饰的变量指的是成员变量

- 使用this的时机

  - 局部变量和成员变量同名的时候
  - 解决局部变量隐藏成员变量

- this：代表所在类的对象引用

  - 记住：方法被哪个对象调用，this就指哪个对象

  ```java
  //Student类
  public class Student {
      //menber变量
      private String name;
      private int age;
  
      //get/set Name方法
      public void setName(String name){
          //name=name
          this.name = name;
          //this修饰的name是成员变量的name，没有this的是局部变量，也就是String name
      }
      public String getName(){
          return name;
      }
      //get/set Age方法
      public void setAge(int age){
          //age=age
          this.age = age;
          //this修饰的name是成员变量的name，没有this的是局部变量，也就是String name
      }
      public int getAge(){
          return age;
      }
      //show
      public void showStudent(){
          System.out.println(name + "," + age);
      }
  }
  
  //测试类
  public class StudentDemo {
      public static void main(String[] args) {
          //创建对象
          Student s = new Student();
          //使用set方法赋值
          s.setName("马牛逼");
          s.setAge(19);
          //展示
          s.showStudent();
  
      }
  }
  ```

## 封装

1.封装

- 面向对象三大特征之一，封装继承多态
- 是面向对象编程语言对客观世界的模拟，客观世界里的成员变量都是在对象内部的，外界无法直接操作

2.封装原则

- 将类的某些信息隐藏在内部，不允许外部直接访问，而是通过对应的方式在外部对内部的隐藏信息进行访问
- 例如：成员变量pritave,提供对应的getXxx()/setXxx()

3.封装好处

- 通过代码来控制成员变量的操作，提高代码安全性
- 把代码进行封装，提高了代码的多次使用重复性

## 构造方法

```java
Student s1 = new Student();
这个student有()，因此这是一个方法；
```

构造方法是一个特殊的方法

作用：创建对象

```java
格式
public class 类名{
	修饰符 类名（参数）{
	}
}
```

功能：主要是完成对象的初始化

```java
public class Student {
    public Student(){
        System.out.println("无参构造");
    }
}
```

注意事项

1.如果自己没有写构造方法，那么系统会给出一个默认的无参构造，你看不到而已

2.如果定义了构造方法，系统将不再给出默认的无参构造

3.如果自定义了有参构造，还要使用无参方法，那么得重写一个

4.无论是否使用，都推荐手写一个无参构造（！！！！！！！！！！！！系统有可能不给你写，别问，问就去翻java源代码）

## API

API（Application Programming Interface)应用程序编程接口

编写一个机器人去踢足球，程序向机器人发送，跑，射门，抢球等指令

机器人厂商一定会提供 控制机器人 的接口，这些类中定义好了操作机器人的各种方法

其实，这些接口就是机器人厂商提供给应用程序扁口的接口，称为API

Java API ： 指的是JDK中提供的各种功能的JAVA类

这些类将底层实现封装起来了，所以不用关系如何实现的，通过帮助文档学习使用即可

## 标准类制作

- 1.成员变量

  - 使用private修饰

- 2.构造方法

  - 提供一个无参的构造方法
  - 提供一个带多参数的构造方法

- 3.成员方法

  - 提供每一个成员变量对应的setXxx()/getXxx()
  - 提供一个显示对象信息的showPerson()

- 4.创建对象并为对象变量赋值的两种方式

  - 无参构造方法创建对象后使用setXxx()赋值
  - 直接带参构造创建带有属性值的对象

  ```java
  public class Student {
      //成员变量
      private String name;
      private int age;
  
      //无参构造
      public Student(){
  
      }
      //带参构造
      public Student(String name,int age){
          this.name = name;
          this.age = age;
      }
  
      //成员方法
      public void setName(String name){
          this.name = name;
      }
      public String getName(){
          return name;
      }
      public void setAge(int age){
          this.age = age;
      }
      public int getAge(){
          return age;
      }
  
      public void show(){
          System.out.println(name+"."+age);
      }
  }
  ```

  ```java
  public class StudentDemo {
      public static void main(String[] args) {
          //第一种方式
          Student s1 = new Student();
          s1.setName("马牛逼");
          s1.setAge(19);
          s1.show();
          //第二种方式
          Student s2 = new Student("马牛逼",20);
          s2.show();
      }
  }
  ```

# String类

## String类

String 类 在java.lang包下，所以不用导包

String 类代表字符串，Java程序中所有的文字例如"abc"都被实现为此类的实例

也就是说：Java程序所有""双引号字符串，都是String类的对象。

- 字符串的特点
  - 字符串不可以改版，它们的值在创建后不能被更改（C++万岁）
  - 虽然String值不可以被改变，但是它们可以被共享
  - 字符串效果上相当于 字符数组char[]，但是底层原理是 字节数组byte[]
  - JDK8及以前是字符数组，JDK9以后是字节数组。

## String的构造方法和特点

常用的构造方法，推荐使用第四种方法，直接赋值的方式。

```java
public String() 创建一个空白字符串对象，没有内容
public String(char[] chs) 根据char数组（字符数组）的内容，创建字符串对象
public String(byte[] bys) 根据byte数组（字节数组）的内容，创建字符串对象
String s = "马牛逼"; 直接赋值的方式创建字符串对象，内容是 马牛逼
public class StringDemo {
    public static void main(String[] args) {
        ////public String() 创建一个空白字符串对象，没有内容
        String s1 = new String();
        System.out.println("s1:"+s1);
        //public String(char[] chs) 根据char数组（字符数组）的内容，创建字符串对象
        char[] chs = {'a','b','c'};
        String s2 = new String(chs);
        System.out.println("s2:"+s2);
        //public String(byte[] bys) 根据byte数组（字节数组）的内容，创建字符串对象
        byte[] bys = {'a','b','c'};
        String s3 = new String(bys);
        System.out.println("s3:"+s3);
        //String s = "马牛逼"; 直接赋值的方式创建字符串对象，内容是 马牛逼
        String s4 = "马牛逼";
        System.out.println("s4:"+s4);
    }
}
```

- String 对象的特点

  - 1，通过new创建字符串对象，每次new都会申请一个内存空间，虽然内存相同，但是地址不同。

  ```java
  char[] chs = {'a','b','c'};
  String s1 = new String(chs);
  String s2 = new String(chs);
  ```

  上面的代码中，JVM会先创建一个char数组，每一次new都会有一个新的address，地址，只不过s1和s2的内容是相同，但是地址不同。

  - 2，以” “方式创建字符串，只要字符串顺序相同（大小写也是），无论在程序代码中出现几次，JVM都只会建立一个String对象，并在字符串池中维护。

  ```java
  String s3 = "马牛逼";
  String s4 = "马牛逼";
  ```

  - 3，在上面代码中，针对第一行代码，JVM会建立一个String对象放在字符串池中，并给s3参考，第二行让s4直接参考字符串池中的String对象，也就是说，它们本质上是一个对象

## 字符串的比较equals()

- 使用 == 做比较
  - 基本类型：比较的是 数据值 是否相同
  - 引用类型：比较的是 地址值 是否相同
- 字符串是对象，它比较的内容是否相同，是通过一个方法来实现，这个方法叫equals()
  - public boolean equals(Obejct anObject)
    - 将此字符串与指定对象相比较，由于比较的字符串是对象，所以参数直接传递一个字符串。

```java
public class StringDemo {
    public static void main(String[] args) {
        //构造方法
        char[] chs = {'马','牛','B'};
        String s1 = new String(chs);
        String s2 = new String(chs);
        //赋值方法
        String s3 = "马牛B";
        String s4 = "马牛B";
        //比较字符串对象地址是否相同
        System.out.println(s1 == s2);//地址不同
        System.out.println(s1 == s3);//地址不同
        System.out.println(s3 == s4);//字符串相同
        System.out.println("----------");
        //比较字符串内容是否相同
        System.out.println(s1.equals(s2));//相同
        System.out.println(s1.equals(s3));//相同
        System.out.println(s3.equals(s4));//相同
    }
}
```

## StringBuilder定义和构造

StringBuilder是一个可变化的字符串类，可以看成是一个容器

- 可变是指StringBuilder中对象内容是可变的

String和StringBuilder的区别

- String，内容不可变
- StringBuilder，内容可变
- 4种构造方法，重点讲第一种和第四种。

```java
StringBuilder()
```

构造一个字符串构建器，其中不包含任何字符，初始容量为16个字符。

```java
StringBuilder(int capacity)
```

构造一个字符串构建器，其中没有字符，并且具有 `capacity`参数指定的初始容量。

```java
StringBuilder(CharSequence seq)
```

构造一个字符串构建器，其中包含与指定的 `CharSequence`相同的字符。

```java
StringBuilder(String str)
```

构造一个初始化为指定字符串内容的字符串构建器。

例子：

```java
public class StringDemo {
    public static void main(String[] args) {
        //第一种方式 空构造
        //StringBuilder()
        StringBuilder sb = new StringBuilder();
        System.out.println("马牛逼");
        System.out.println(sb.length());
        //StringBuilder(String str)
        StringBuilder sb2 = new StringBuilder("hello");
        System.out.println(sb2);
        System.out.println(sb2.length());

    }
}
```

## StringBuilder添加和反转

1.StringBuilder 转换为 String

- public String toSring(); 通过toString()就可以把StringBuilder转换成String

2.String转换为 StringBuilder

- public StringBuilder(String s); 就可以把String转换为StringBuilderS

```java
public class StringDemo {
    public static void main(String[] args) {
        //StringBuilder转换为String
        StringBuilder sb = new StringBuilder();
        sb.append("sb");
        String s = sb.toString();
        System.out.println(s);
        //String转换为StringBuilder
        String s1 = new String();
        s1 = "啊这";
        StringBuilder sb1 = new StringBuilder();
        sb = new StringBuilder(s1);
        System.out.println(sb);
    }
}
```

# ArrayList

## ArrayList概述

- 编程的时候，如果存储多个数据，使用长度固定的数组储存格式，满足要求，因此用集合
- 集合类的特点：提供一种存储空间可变的模型，存储的数据容量是可以发生改变的
- 集合类有很多，ArrayList是其中之一

```java
ArrayList<E>:

- 可调整大小的数组实现
- <E>是一种泛型的数据类型

使用:

- 在出现E的地方引用数据类型转换即可
- ArrayList<String>,ArrayList<Student>
```

## ArrayList构造和添加

```java
导包
import java.util.ArrayList;
构造
public ArrayList() 创建一个空的ArrayList对象
添加
public boolean End(E e)将指定元素追加到此集合的末尾
public void add(int index,E element)在此集合中的指定位置插入指定的元素

注意，不能索引值越界！！！！！！！！！！！！！！！！！！！！！！！！！！
```

```java
import java.util.ArrayList;

public class ArrayListDemo{
    public static void main(String[] args){
        //public ArrayList() 创建一个空的ArrayList对象
        ArrayList<String>arrayList = new ArrayList<>();

        //public boolean End(E e)将指定元素追加到此集合的末尾
        arrayList.add("hello");
        arrayList.add("world");
        arrayList.add("java");

        //public void add(int index,E element)在此集合中的指定位置插入指定的元素
        arrayList.add(1,"C++");
        arrayList.add(3,"Python");
        System.out.println(arrayList);
    }
}
```

## ArrayList集合常用方法

```java
public boolean remove(Object o)删除指定元素，返回知否删除成功
public E remove(int dex)删除指定索引处的元素，返回被删除的元素
public E set(int index,E element)修改指定索引处的元素，返回被修改的元素
public E get(int index)返回指定索引处的元素
public int size()返回集合中的元素个数
import java.util.ArrayList;

public class ArrayListDemo{
    public static void main(String[] args){
        ArrayList<String>arrayList = new ArrayList<>();
        arrayList.add("hello");
        arrayList.add("world");
        arrayList.add("java");

        //arrayList.remove("java");
        //arrayList.remove(2);
        //arrayList.set(2,"C++");
        //System.out.println(arrayList.get(2));
        System.out.println(arrayList.size());
        System.out.println(arrayList);
    }
}
```

# 继承extends

## 继承

继承是面向对象三大特性之一，可以使得子类具有父类的属性和方法，还可以在子类重新定义，追加属性和方法。

```java
继承的格式
public class 子类名 extends 父类名()
例如
public class Son extends Dad
```

Dad:是父类，也是基类，超类

Son:是子类，也是派生类

```java
public class Dad{
    public void show(){
        System.out.println("show方法被调用");
    }
}

public class Son extends Dad{
    public void method(){
        System.out.println("method被调用");
    }
}

public class demo{
    public static void main(String[] args){
        Dad dad = new Dad();
        dad.show();
        Son son = new Son();
        son.method();
        son.show();
    }
}
```

## extends的好处和弊端

继承是面向对象三大特性之一，可以使得子类具有父类的属性和方法，还可以在子类重新定义，追加属性和方法。

继承的好处

- 提高了代码的复用性（多个类相同的成员可以放在一个类中）
- 提高了代码的维护性（如果method的代码被修改，修改一处即可）

继承的弊端

- 继承让类和类之间产生关系，类的耦合性变强，当父类发生变化的时候，子类的实现也得跟着变化，削弱了子类的独立性

什么时候用继承？

- 体现继承的关系：is a，做游戏小怪。
- 假设法：有类A和B，如果它们满足A或者B的一种，或者B是A的一种，就说明它们存在继承关系，就可以考虑用继承来体验，否则不要滥用继承。
- 举例：苹果和水果，猫和动物，猫和狗

## extends中变量访问特点

在子类方法中寻找一个变量

- 先在子类局部范围内找
- 如果没有，则去子类成员范围内找
- 如果没有，则去父类成员范围内找
- 如果都没有，即报错（不考虑父亲的父亲= =）

## super

super关键字用法和this关键字的用法相似

- this代表本类的对象引用
- super代表父类储存空间的表示（理解为父类对象引用）
- 也可以使用this(……)访问本类的构造，this.成员方法(……)
- 或者super(……）访问父类的构造，this.父类方法(……）

```java
public class Dad {
    public int age = 20;
}

public class Son extends Dad{
    public int age = 40;

    public void show(){
        int age = 30;
        System.out.println(age);//30
        //要访问成员变量，也就是40
        System.out.println(this.age);//40
        //要访问父类的，也就是20
        System.out.println(super.age);
    }
}

public class Demo {
    public static void main(String[] args) {
        Son s = new Son();
        s.show();
    }
}
```

## extends中构造方法的访问特点

子类中所有的构造方法都会访问父类中无参的构造方法

- 因为子类会继承父类中的数据，可能还会使用父类中的数据，因此，子类初始化前，一定要先完成父类的初始化。
- 每一个子类构造方法的第一条语句默认都是：super()

如果父类中没有无参构造方法，只有带参构造方法，该怎么办呢？

- 通过使用super()关键字去调用父类的带参构造方法
- 在父类自己提供一个无参构造
- 推荐自己写一个无参

```java
public class Dad{
    public Dad(){
        System.out.println("DAD类无参构造被调用");
    }
    public Dad(int age){
        System.out.println("DAD类有参构造被调用");
    }
}
```

```java
public class Son extends Dad{

    public Son(){
//				super();
        System.out.println("Son类无参构造被调用");
    }
    public Son(int age){
//				super();
        System.out.println("Son类带参构造被调用");
    }
}
```

```java
public class demo{
    public static void main(String[] args){
        Son s = new Son();
        Son s1 = new Son(20);
    }
}
```

## extends中成员method的访问特点

通过子类对象访问一个Method

- 先在子类成员范围内找
- 其次在父类成员范围内找
- 都找不到就报错（不考虑父亲的父亲）

```java
public class Dad{
    public void show(){
        System.out.println("Dad类的show（）方法被调用");
    }
}
```

```java
public class Son extends Dad{
    public void method(){
        System.out.println("Son中的method（）方法被调用");
    }

    public void show(){
        //super.show();
        System.out.println("Son类的show（）方法被调用");
    }
}
```

```java
public class demo{
    public static void main(String[] args){
        Son s = new Son();
        s.method();
        s.show();
    }
}
```

## 方法重写

方法重写概述

- 子类中出现了和父类中一模一样的Method声明

方法重写的应用

- 当子类中需要父类的功能，而功能主题子类有自己特有的内容时，可以重写父类中的方法，这样，既沿袭了父类的功能，又定义了子类的内容

注意事项！

- 私有private的method不能被重写（父类的私有成员子类是不能继承的）
- 子类访问私有权限不能更低（public>默认>私有）

```java
@Override
```

- 是一个注解
- 可以帮助检查重写方法的方法声明和正确性

```java
public class Phone{
    public void call(String name){
        System.out.println("给" + name + "打电话");
    }
}
```

```java
public class NewPhone extends Phone{

		//@Override，如果报错，就是错，没错就是重写的没错。
    public void call(String name){
        System.out.println("开启视频功能");
        //System.out.println("给" + name + "打电话");
        super.call(name);
    }
}
```

```java
public class PhoneDemo{
    public static void main(String[] args){
        Phone p = new Phone();
        p.call("马牛逼");

        System.out.println("---------");

        NewPhone np = new NewPhone();
        np.call("曹县666");
    }
}
```

## 继承的注意事项

- Java中，类只支持单继承，不支持多继承
- Java中，类支持等层继承

```java
public class GrandDad{
    public void drink(){
        System.out.println("爷爷爱喝酒");
    }
}
```

```java
public class Mom{
    public void hair(){
        System.out.println("妈妈爱烫头");
    }
}
```

```java
public class Dad extends GrandDad{
    public void Smoke(){
        System.out.println("爸爸爱抽烟");
    }
}
```

```java
//public class Son extends Dad,Mom{}
//错误的，java中不能同时继承多个类

public class Son extends Dad{

}
```

# 修饰符

## package的概述和作用

package其实就是文件夹

- 作用：对类进行分类管理

包的定义格式

- 格式：package 包名;（多级包用.分开）
- 例如：package com.CaoXian;

带包的Java类编译和执行

- 手动建包
  - 按照cmd编译java文件===javac HelloWorld.java
  - 手动创建package，在磁盘建立文件夹com，然后在com下建立文件夹CaoXian
  - 把class放到包的最里面===把HelloWorld.class放到CaoXian这个文件夹下
  - 带包执行，java com.CaoXian.HelloWorld
- 自动建包
  - javac -d . [HelloWorld.java](http://HelloWorld.java)
  - java com.CaoXian.HelloWorld

## import导包

使用不同包下的类，使用的时候要写类的全路径，写起来太麻烦了

为了简化带包的操作，Java就提供了导报的功能

导包的格式

```java
格式 import 包名;
例如 importcn.itcast.Teacher
在文件最上方

又或者

文件夹cn.itcast下的Teacher.java
那么应该
cn.itcast.Teacher t = new cn.itcast.Teachaer();
cn.itcast.Teacher t1 = new cn.itcast.Teachaer();

又或者

java.util.Scanner sc = new java.util.Scanner(System.in);
```

## 权限修饰符

Java语言提供了很多修饰符，主要分为以下两类：

- 访问修饰符
- 非访问修饰符

修饰符用来定义类、方法或者变量，通常放在语句的最前端。我们通过下面的例子来说明：

```java
public class ClassName {
   // ...
}
private boolean myFlag;
static final double weeks = 9.5;
protected static final int BOXWIDTH = 42;
public static void main(String[] arguments) {
   // 方法体
}
```

------

## 访问控制修饰符

Java中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java 支持 4 种不同的访问权限。

- **default** (即默认，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。
- **private** : 在同一类内可见。使用对象：变量、方法。 **注意：不能修饰类（外部类）**
- **public** : 对所有类可见。使用对象：类、接口、变量、方法
- **protected** : 对同一包内的类和所有子类可见。使用对象：变量、方法。 **注意：不能修饰类（外部类）**。

## Final

- Final（最终态）
- static（静态）

final 表示"最后的、最终的"含义，变量一旦赋值后，不能被重新赋值。被 final 修饰的实例变量必须显式指定初始值。

final 修饰符通常和 static 修饰符一起使用来创建类常量。

final的修饰特点

- 修饰方法method，表示该方法是最终的方法，不能被重写
- 修饰变量，表面该变量是最终的常量，不能被再次赋值
- 修饰类，表面该类是最终类，不能被继承

## Final修饰局部变量

- 变量是基本类型：fina修饰指的是基本类型的数据值不能发生改变
- 变量是引用类型：final修饰指的是引用类型的地址值不能发生改变，但是地址里面的内容是可以改变的

```java
public class Student{
    public int age =30;
}

public class FinalDemo{
    public static void main(String[] args){
        //final修饰变量基本类型
        final int age = 20;
        //age = 100;
        System.out.println(age);

        //final修饰引用类型
        final Student s = new Student();
        s.age=100;
        System.out.println(s.age);

        //s = new Student();
    }
}
```

## Static

static 关键字是静态的意思，可以修饰成员方法，成员变量

static 修饰的特点

- 被类的所有对象共享
  - 这也是我们判断是否使用静态关键字的条件
- 可以通过类名调用
  - 当然，也可以通过对象名调用
  - 推荐类名调用

```java
public class Student{
    public int age;
    public String name;
    //public String school;
    public static String school;
    public void show(){
        System.out.println(name+school+age);
    }
}

public class StudentDemo{
    public static void main(String[] args){
        //高手的写法
        Student.school = "nycct";
        Student s = new Student();
        s.name = "马牛逼";
        s.age = 20;
        //s.school = "Nycct";
        s.show();

        Student s2 = new Student();
        s2.name = "二次元";
        s2.age = 19;
        //s2.school = "nycct";
        s2.show();
    }
}
```

## Static访问特点

非静态的成员访问

- 能访问静态的成员变量
- 能访问非静态的成员变量
- 能访问静态的成员方法
- 能访问非静态的成员方法

静态的成员访问

- 能访问静态的成员变量
- 能访问静态的成员方法

总结一句话：静态成员方法只能访问静态成员

```java
public class Student{
    //非静态成员变量
    private String name = "马牛逼";
    //静态成员变量
    private static int age = 20;

    //非静态成员方法
    public void show1(){

    }

    //非静态成员方法
    public void show2(){
        System.out.println(name);
        System.out.println(age);
        show1();
        show3();
    }

    //静态成员方法
    public static void show3(){

    }

    //静态成员方法
    public static void show4(){
        //System.out.println(name);
        System.out.println(age);
        //show1();
        show3();
    }
}
```

# 多态

## 多态

同一个对象，在不同时刻表现出来不同时态

例子：猫

我们可以说是：猫 cat = new 猫();

也可以说是：动物 animal = new 猫();

这里的猫在不同时刻表现出了不同的形态，这就是多态

多态的前提/体现

- 有继承/实现关系
- 有method重写
- 有父类引用指向子类对象

```java
public class Animal{

    public void eat(){
        System.out.println("动物吃东西");
    }
}

public class Cat extends Animal{

    @Override
    public void eat(){
        System.out.println("猫吃鱼");
    }
}

public class AnimalDemo{
    public static void main(String[] args){
        Animal a = new Cat();
        a.eat();
    }
}
```

## 多态中成员访问的特点

- 成员变量：编译看左边，运行看左边
- 成员方法：编译看左边，运行看右边

为什么成员变量和成员方法访问的方法不一样？

- 因为成员方法有重写，成员变量没有

```java
public class Animal {
    public int age = 40;

    public void eat(){
        System.out.println("吃东西");
    }
}

public class Cat extends Animal{

    public int age = 20;
    public int weight = 10;

    public void eat(){
        System.out.println("猫吃鱼");
    }
    public void playgame(){
        System.out.println("猫捉迷藏");
    }
}

public class AnimalDemo {
    public static void main(String[] args) {

        Animal a = new Cat();

        System.out.println(a.age);//40
        //System.out.println(a.weight);
        a.eat();//猫吃鱼
        //a.playgame();
    }
}
```

## 多态的好处和弊端

- 多态的好处：提高了程序的拓展性
  - 具体体现：定义方法的时候，使用Dad类作为参数，将来使用的时候，使用具体的子类进行操作。
- 多态的弊端：不能使用子类的特有功能

```java
public class Animal{

    public void eat(){
        System.out.println("动物吃东西");
    }
}

public class AnimalOperator{
    /*
    public void useAnimal(Cat cat){
        cat.eat();
    }
    public void useAnimal(Dog dog){
        dog.eat();
    }
     */
    public void useAnimal(Animal a){
        //Animal a = new Cat();
        //Animal a = new Dog();
        a.eat();
        //a.lookDoor();
    }
}

public class Cat extends Animal{
    public void eat(){
        System.out.println("猫咪吃东西");
    }
}

public class Pig extends Animal{
    public void eat(){
        System.out.println("猪吃肉");
    }
}

public class Dog extends Animal{
    public void eat(){
        System.out.println("狗吃骨头");
    }
    public void lookDoor(){
        System.out.println("狗会看门");
    }
}

public class AnimalDemo{
    public static void main(String[] args){
        AnimalOperator ao = new AnimalOperator();
        Cat c = new Cat();
        Dog d = new Dog();
        Pig p = new Pig();
        ao.useAnimal(c);
        ao.useAnimal(d);
        ao.useAnimal(p);
        
    }
}
```

## 多态中的转型

- 向上转型

  - 从子到父
  - 父类引用指向子类对象

- 向下转型

  - 从父到子
  - 父类引用转为子类对象

  ```java
  public class Animal{
  
      public void eat(){
          System.out.println("动物吃东西");
      }
  }
  
  public class Cat extends Animal{
  
      @Override
      public void eat(){
          System.out.println("猫吃鱼");
      }
  
      public void playgame(){
          System.out.println("猫捉迷藏");
      }
  }
  ```

  ```java
  public class AnimalDemo{
      public static void main(String[] args){
          //多态
          Animal a = new Cat();//向上转型，把父指向子
          a.eat();
          //a.playgame(); Animal里面没有playgame
          //想使用，必须创建cat的对象
  
  //        弄2个对象没必要
  //        Cat c = new Cat();
  //        c.eat();
  //        c.playgame();
  
          //所以用向下转型
          //强转
          Cat c = (Cat)a;
          c.playgame();
      }
  }
  ```

## 抽象类的概述和优点

在Java中，一个 没有方法体 的方法应该定义为抽象方法，而类中如果有 抽象方法，该类必须定义为 抽象类

- 抽象类 和 抽象方法 必须使用abstract关键字修饰

  - public abstract class 类名{}
  - public abstact void eat()

- 抽象类 不一定有抽象方法，有抽象方法的一定是抽象类

- 抽象类 不能实例化

  - 抽象类 如果想实例化，参照多态的方式，通过子类对象实例化，这叫抽象类多态

- 抽象类的子类

  - 要么重写抽象类中的所有抽象方法
  - 要么是抽象类

  ```java
  public abstract class Animal{
      //抽象关键字 abstract
      public abstract void eat();
  
      public void sleep(){
          System.out.println("睡觉");
      }
  }
  ========================================
  public class Cat extends Animal{
  
      public void eat(){
           System.out.println("猫吃鱼");
       }
  }
  public class Dog extends Animal{
  
      @Override
      public void eat(){
          System.out.println("狗吃饭");
      }
  }
  ========================================
  public class AnimalDemo{
      public static void main(String[] args){
  
          //多态来new一个抽象的对象
          Animal a = new Cat();
          a.eat();
          a.sleep();
          Animal d = new Dog();
          d.sleep();
          d.eat();
      }
  }
  ```

# 接口

## 接口

接口是一种 公共的规范标准，只要符合规范标准，大家都可以使用。

Java中的接口更多的体现在 对行为的抽象

- 接口用关键字interface修饰

  - public interface 接口名 {}

- 类实现接口用implements 表示

  - public class 类名 implements 接口名{}

- 接口不能实例化

  - 接口实例化的方法：参照多态的方式，通过实现类对象实例化，这叫接口多态
  - 多态的形式：具体类多态、抽象类多态、接口多态
  - 多态的前提：有继承或者实现关系，有方法重写，有父（类/接口）引用指向（子/实现）类对象

- 接口类的实现

  - 要么重写接口中所有的抽象方法
  - 要么是抽象类

  ```java
  public interface Jumpping {
      public abstract void jump();
  }
  
  //要么重写接口中所有的方法
  public class Cat implements Jumpping{
      @Override
      public void jump(){
          System.out.println("猫可以跳了");
      }
  }
  
  //要么重写抽象类
  public abstract class Dog implements Jumpping{
  
  }
  
  //go！！
  public class JumppingDemo{
      public static void main(String[] args){
  				Jumpping j = new Cat();
          j.jump();
      }
  }
  ```

- 接口的成员特点

  - 成员变量
    - 只能是常量，默认修饰符是public static final
  - 构造方法
    - 接口没有构造方法，因为接口主要是对行为进行抽象的，是没有具体存在
    - 一个类如果没有父类，默认继承object类
  - 成员方法
    - 只能是抽象方法
    - 默认修饰符：public abstract
    - 在接口中的方法，JDK8 or JDK9 有一些新特性。

## 类和接口的关系

- 类和类的关系

  - 继承关系，只能单继承，但是可以多层继承

- 类和接口的关系

  - 实现关系，可以单实现，也可以多实现，还可以在继承一个类的同时实现多个接口

- 接口和接口的关系

  - 继承关系，可以单继承，也可以多继承

  ```java
  通过逗号，可以 implments多个接口
  public class InterImpl implements Inter1,Inter2,Inter3{
      
  }
  也可以extend一个类
  public class InterImpl extends Object implements Inter1,Inter2,Inter3{
  
  }
  甚至还可以接口和接口的继承
  public interface Inter3 extends Inter1,Inter2{
  
  }
  ```

## 类和接口的区别

- 成员区别
  - 抽象类包含：变量，常量；有构造方法，也有非抽象方法
  - 接口包含： 常量；抽象方法
- 关系区别
  - 类与类：继承，单继承
  - 类与接口：实现，可以单实现，可以多实现
  - 接口与接口：继承，单继承，多继承
- 设计理念区别
  - 抽象类：对类抽象，包括属性，行为
  - 接口：对行为抽象，主要是行为

## 类名作为形参和返回值

- 方法的形参如果是类名，其实需要的是该类的对象
- 方法的返回值如果是类目，其实返回的是该类的对象

```java
public class Cat{

    public void eat(){
        System.out.println("猫吃鱼");
    }
}

public class CatOperator{

    public void useCat(Cat c){ //new Cat ();
        c.eat();
    }

    public Cat getCat() {
        Cat c = new Cat();
        return c;
    }
}

public class CatDemo{
    public static void main(String[] args){

        CatOperator catOperator = new CatOperator();
        Cat c = new Cat();
        catOperator.useCat(c);

        Cat c2 = catOperator.getCat();//new Cat()
        c2.eat();
    }
}
```

## 接口名作为形参和返回值

- 方法的形参是接口名，其实需要的是该接口的实现类对象
- 方法的返回值是接口名，其实返回的是该接口的实现类对象

```java
public interface Jumpping{

    void jump();
}

public class Cat implements Jumpping{

    @Override
    public void jump(){
        System.out.println("猫会跳");
    }
}

public class JumppingOperator{

    public void useJumpping(Jumpping j) { //Jumpping j = new Cat();
        j.jump();
    }

    public Jumpping getJumpping() {
        Jumpping j = new Cat();
        return j;
    }
}

public class JumppingDemo{
    public static void main(String[] args){
        JumppingOperator jo = new JumppingOperator();
        Jumpping j = new Cat();
        jo.useJumpping(j);

        Jumpping j2 = jo.getJumpping(); //new Cat()
        j2.jump();
    }
}
```

## 抽象类名作为形参和返回值

- 方法的形参是抽象类名，其实需要的是该抽象类的子类对象。
- 方法的返回值是抽象类名，其实返回的是该抽象类的子类对象。

```java
public abstract class Animal{

    public abstract void eat();
}

public class AnimalOperator{

    public void useAnimal(Animal a){ // Animal a = new Cat();
        a.eat();
    }

    public Animal getAnimal(){
        Animal a = new Cat();
        return a;
    }
}

public class Cat extends Animal{
    @Override
    public void eat(){
        System.out.println("猫吃鱼");
    }
}

public class AnimalDemo{
    public static void main(String[] args){
        AnimalOperator animalOperator = new AnimalOperator();
        Animal a = new Cat();
        animalOperator.useAnimal(a);

        Animal a2 = animalOperator.getAnimal();//new Cat();
        a2.eat();
    }
}
```

# 类

## 内部类

内部类：就是在一个类中的类。

格式：

```java
public class 类名 {
		修饰符 class 类名 {
		
		}
}

例如：
public class Outer {
		public class Inter {

		}
}
```

- 内部类的特点
  - 内部类可以直接访问外部类的成员，包括私有
  - 外部类要访问内部类的成员，必须创建对象

```java
public class Outer{

    private int num = 10;

    public class Inter{

        public void show(){
            //sout
            System.out.println(num);
        }
    }
    public void method(){
        //show();会报错，不能访问内部的，要创建对象
        Inter i = new Inter();
        i.show();
    }
}
```

## 成员内部类

按照内部类中定义的位置不同，可以分为如下两种形式

- 在类的成员位置：成员内部类
- 在类的局部位置：局部内部类

成员内部类，外部的定义方法

- 格式：外部类名.内部类名.对象名=外部类对象.内部类对象;
- 例如：Outer.Inner oi = new Outer().new.Inner();

```java
public class Outer{

    private int num = 10;

//    public class Inner {
//        public void show(){
//            System.out.println(num);
//        }
//    }

    private class Inner {
        public void show(){
            System.out.println(num);
        }
    }
    public void methoid(){
        Inner i = new Inner();
        i.show();
    }
}

public class InnerDemo{
    public static void main(String[] args){
        //创建内部类对象并且调用方法
//        Inner i = new Inner();
        //Outer.Inner oi = new Outer().new Inner(); 不能针对私有
//        oi.show();

        //调用私有
        Outer o = new Outer();
        o.methoid();
    }
}
```

## 局部内部类

局部内部类是在方法中定义类，所以外界无法直接使用，需要在方法内部创建对象并使用该类可以直接访问外部类的成员，也可以访问方法内的局部变量

```java
public class Outer{

    private int num = 10;

    public void method(){

        int num2 =20;//局部类的变量
        class Inner{
            public void show(){
                System.out.println(num);
                System.out.println(num2);
            }
        }

        Inner i = new Inner();//必须创建局部内部类对象调用方法
        i.show();//必须创建局部内部类对象调用方法
    }
}

public class OuterDemo{
    public static void main(String[] args){
        Outer o = new Outer();
        o.method();

    }
}
```

## 匿名内部类

前提：存在一个类或者接口，这里的类可以具体指的是抽象类

- 格式

```java
new 类名或者接口名() {
		重写方法;
}
```

- 例子

```java
new Inter(){
		public void show(){
		}
}
本质：是一个继承了该类或者该接口的子类匿名对象
```

```java
public interface Inter{

    void show();
}

public class Outer{

    public void method(){

//        new Inter() {
//            @Override
//            public void show(){
//                System.out.println("匿名内部类");
//            }
//        };

        new Inter() {
            @Override
            public void show(){
                System.out.println("匿名内部类");
            }
        }.show();
        new Inter() {
            @Override
            public void show(){
                System.out.println("匿名内部类");
            }
        }.show();

        //多次调用

        Inter i = new Inter() {
            @Override
            public void show(){
                System.out.println("匿名内部类");
            }
        };
        i.show();//用i调用

    }
}

public class OuterDemo{
    public static void main(String[] args){
        Outer o = new Outer();
        o.method();
    }
}
```

## 匿名内部类在开发的使用

```java
public interface Jumpping{

    void jump();
}
```

```java
public class JumppingOperator{

        public void method(Jumpping j){ //new Cat();
                j.jump();
        }
}
```

```java
public class Dog implements Jumpping{

    @Override
    public void jump(){
        System.out.println("狗可以跳高了");
    }
}

public class Cat implements Jumpping{

    @Override
    public void jump(){
        System.out.println("猫可以跳高了");
    }
}
```

```java
public class JumppingDemo{
    public static void main(String[] args){
        JumppingOperator jo = new JumppingOperator();
        Jumpping j = new Cat();
        jo.method(j);

        Jumpping j2 = new Dog();
        jo.method(j2);
        System.out.println("--------");

        jo.method(new Jumpping(){
            @Override
            public void jump(){
                System.out.println("猫可以跳高了");
            }
        });

        jo.method(new Jumpping(){
            @Override
            public void jump(){
                System.out.println("狗可以跳高了");
            }
        });
    }
}
```

# 常用Api

## Math

Math包含一些基本的运算方法：基本指数，对数，平方根，三角函数。

没有构造方法，看类的成员是否是static静态的，如果是，通过类名即可调用。

```java
常用方法：
public static int abs(int a) 说明：返回参数的绝对值

public static double ceil(double a) 说明：返回>or=参数的最小double值，等于一个整数

public static double floor(double a) 说明：返回<or=参数的最大double值，等于一个整数

public static int round(float a) 说明: 按照四舍五入返回最接近参数的int

public static int max(int a,int b) 说明:返回两个int值的较大值

public static int min(int a,int b) 说明:返回两个int值的较小值

public static double pow(double a,double b) 说明:返回a的b次幂

public static double random() 说明: 返回值为double的正值
```

```java
public class MathDemo{
    public static void main(String[] args){
//        public static int abs(int a) 说明：返回参数的绝对值
        System.out.println(Math.abs(88));
        System.out.println(Math.abs(-88));
        System.out.println("--------");
//        public static double ceil(double a) 说明：返回>or=参数的最小double值，等于一个整数
        System.out.println(Math.ceil(12.34));
        System.out.println(Math.ceil(12.56));
        System.out.println("--------");//返回值是double类型！所以是.0
//        public static double floor(double a) 说明：返回<or=参数的最大double值，等于一个整数
        System.out.println(Math.floor(12.34));
        System.out.println(Math.floor(12.56));
        System.out.println("--------");
//        public static int round(float a) 说明: 按照四舍五入返回最接近参数的int
        System.out.println(Math.round(12.34F));
        System.out.println(Math.round(12.56F));
        System.out.println("--------");
//        public static int max(int a,int b) 说明:返回两个int值的较大值
        System.out.println(Math.max(66.6,88.8));
        System.out.println(Math.max(66,88));
        System.out.println("--------");
//        public static int min(int a,int b) 说明:返回两个int值的较小值
        System.out.println(Math.min(66.6,88.8));
        System.out.println(Math.min(66,88));
        System.out.println("--------");
//        public static double pow(double a,double b) 说明:返回a的b次幂
        System.out.println(Math.pow(2.0,3.0));
        System.out.println("--------");
//        public static double random() 说明: 返回值为double的正值
        System.out.println(Math.random());
        System.out.println(Math.random()*100);
        System.out.println((int)(Math.random()*100)+1);
        System.out.println((int)(Math.random()*100)+"%");

    }
}
```

## System

System包含几个有用的类字段和方法，它不能被实例化

```java
常用方法：
public static exit(int status) 终止当前运行的Java虚拟机，非0表示异常终止
public static long currentTimeMillis() 返回当前时间（以毫秒为单位）
```

```java
public class SystemDemo{
    public static void main(String[] args){
//        System.out.println("开始");
////        public static exit(int status) 终止当前运行的Java虚拟机，非0表示异常终止
//        System.exit(0);
//        System.out.println("结束");

//        public static long currentTimeMillis() 返回当前时间（以毫秒为单位）
        //System.out.println(System.currentTimeMillis());
        System.out.println (System.currentTimeMillis () * 1.0 / 1000 / 60 / 60 / 24 / 365 + "年");

        //记录代码的运行时间

        long start = System.currentTimeMillis ();
        for(int i = 0;i<10000;i++){
            System.out.println (i);
        }
        long end = System.currentTimeMillis ();
        System.out.println ("共耗时"+(end-start)+"毫秒");
    }
}
```

## Object类的toString（）用法 一

Object是类层次结构的根，每个类都可以将Object作为超类。所有类都直接或者间接的继承该类。

构造方法：public Object()

toString()，建议所有子类重写一遍方法。

```java
public class Student{ // Student extends Object
    private String name;
    private int age;

    public Student(){
    }

    public Student(String name ,int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    //重写

    @Override
    public String toString(){
        return "Student{" +
                "name='" + name + '\\'' +
                ", age=" + age +
                '}';
    }
}
```

```java
//建议所有子类重写此方法
//自动生成即可

public class ObjectDemo{
    public static void main(String[] args){
        Student s = new Student ();
        s.setName ("林");
        s.setAge (30);
        System.out.println (s);//Student@49e4cb85
        System.out.println (s.toString ());//Student@49e4cb85,默认底层调用了toString方法();
    }
}

//    public void println(Object x) {  // x = s
//        String s = String.valueOf(x);
//        synchronized (this) {
//            print(s);
//            newLine();
//        }
//    }

//    public static String valueOf(Object obj) { // obj = x
//        return (obj == null) ? "null" : obj.toString();
//    }

//    public String toString() {
//        return getClass().getName() + "@" + Integer.toHexString(hashCode());
//    }
```

## Object类的toString（）用法 二

比较对象是否相等，默认比较地址，重写可比较内容，自动生成。

```java
public class Student{ // Student extends Object
    private String name;
    private int age;

    public Student(){
    }

    public Student(String name ,int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    @Override
    public boolean equals(Object o){
        if (this == o) return true;
        if (o == null || getClass () != o.getClass ()) return false;

        Student student = (Student) o;

        if (age != student.age) return false;
        return name != null ? name.equals (student.name) : student.name == null;
    }

    @Override
    public int hashCode(){
        int result = name != null ? name.hashCode () : 0;
        result = 31 * result + age;
        return result;
    }
}
```

```java
//建议所有子类重写此方法
//自动生成即可

public class ObjectDemo{
    public static void main(String[] args){
        Student s1 = new Student ();
        s1.setName ("林");
        s1.setAge (19);

        Student s2 = new Student ();
        s2.setName ("林");
        s2.setAge (19);

        //比较是否 相同
        System.out.println (s1 == s2);//不能实现，因为s1是new出来的，代表是地址，s2也是地址。

        System.out.println (s1.equals (s2));
    }
}
```

## 冒泡排序原理

排序：将一组数据按照固定的规则进行排列

冒泡排序：一种排序方式，对要进行排序的数据中相邻的数据进行比较，将较大的数据放在后面，一次对所有的数据进行操作，直至所有数据按要求完成排序。

- 如果有n个数据进行排序，总共需要进行n-1次排序
- 每一次比较完毕，下一次的比较就会少一个数据参与

```java
public class ArrayDemo{
    public static void main(String[] args){
        int[] arr = {24 ,69 ,80 ,57 ,13};
        System.out.print ("排序前");
        printArray (arr);

        for(int x=0;x<arr.length-1;x++){
            for(int i =0;i<arr.length-1-x;i++){//-1-x;
                if(arr[i]>arr[i+1]) {//如果前面的数字比后面的大，那么交换
                    int temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                }
            }
            System.out.println ("排序后");
            printArray (arr);
        }
    }

    public static void printArray(int[] arr){
        System.out.print("[");
        for(int x=0;x<arr.length;x++){
            if(x==arr.length-1){
                System.out.print(arr[x]);
            }else{
                System.out.print(arr[x]+", ");
            }
        }
        System.out.print("]");
    }

}
```

## ArrayList的概述和常用方法

Array类包含用于数组的各种方法

- 构造方法用private修饰
- 成员用public static修饰

```java
public static String toString(int[] a) 说明：返回指定数组中的内容和字符串表示形式
public static void sort(int[] a) 说明：按照数字顺序排列指定的数组
    
import java.util.Arrays;

public class ArrayDemo{
    public static void main(String[] args){
        int[] arr = {24 ,69 ,80 ,57 ,13};

        System.out.println ("排序前"+ Arrays.toString (arr));

        Arrays.sort(arr);

        System.out.println ("排序后"+ Arrays.toString (arr));

    }
}
```

## 基本类型包装类概述

将基本的数据类型封装成对象的好处是在于可以用对象定义更多的功能方法操作该数据

常用的操作：用于数据类型和字符串之间的转换

```java
基本数据类型         包装类
byte                Byte
short               Short
int                 Integer
long                Long
float               Float
double              Double
char                Character
boolean             Boolean
```

```java
public class IntergeDemo{
    public static void main(String[] args){

        System.out.println (Integer.MIN_VALUE);
        System.out.println (Integer.MAX_VALUE);
    }
}
```

## Integer类的概述和使用

Integer：包装一个对象中的原始类型int的值

```java
public Integer(int value) （过时了）根据int值创建integer对象
public Integer(String s) （过时了）根据String值创建integer对象
public static Integer valueOf(int i) 返回表示指定的int值Ingeter实例
public static Integer valueOf(String s)返回一个保存指定值的Integer对象String
```

```java
//public static Integer valueOf(int i) 返回表示指定的int值Ingeter实例
//public static Integer valueOf(String s)返回一个保存指定值的Integer对象String

public class IntergeDemo{
    public static void main(String[] args){
        //public static Integer valueOf(int i) 返回表示指定的int值Ingeter实例
        Integer i1 = Integer.valueOf (100);
        System.out.println (i1);

        //public static Integer valueOf(String s)返回一个保存指定值的Integer对象String
        Integer i2 = Integer.valueOf ("100");
		Integer i3 = Integer.valueOf ("abc");//会报错，String不能弄。
        System.out.println (i2);

        
    }
}
```

## int和String的相互转换

基本类型包装类最常见的操作是：用于基本类型和字符串之间的互相转换

- int转化为String
  - public static String valueOf(int i):返回int参数的字符串表示形式，该方法是String类的方法
- String转化为int
  - public static int parseInt(String s):将字符串解析为int类型，该方法是Integer类中的方法

```java
//public static Integer valueOf(int i) 返回表示指定的int值Ingeter实例
//public static Integer valueOf(String s)返回一个保存指定值的Integer对象String

public class IntergeDemo{
    public static void main(String[] args){
        // int to String
        int num = 100;
        // 第一种
        String s1 = "" + num;
        System.out.println (s1);
        // 第二种
        // public static String valueOf(int i)
        String s2 = String.valueOf (num);
        System.out.println (s2);
        System.out.println ("--------");
        // String to int
        String s = "100";
        // 第一种
        // String to Integer to int
        Integer i = Integer.valueOf (s);
        System.out.println (i);
        // public int intValue()
        int x = i.intValue ();
        System.out.println (x);

        // 第二种
        //public static int parseInt(String s)
        int y = Integer.parseInt (s);
        System.out.println (y);
    }
}
```

## 自动装箱和开箱

- 装箱：把基本数据类型转化为对应的包装类类型
- 拆箱：把包装类类型转化为对应的基本数据类型

注意：在使用包装类类型的时候，如果做操作，最好先判断是否为NULL。

推荐，只要是对象，在使用前就必须用！=NULL判断

```java
public class Demo{
    public static void main(String[] args){
        //装箱：把基本数据类型转化为对应的包装类类型
        Integer i = Integer.valueOf (100);
        //自动装箱
        Integer ii = 100;//Integer.valueOf (100);
        System.out.println (ii);

        //拆箱：把包装类类型转化为对应的基本数据类型
        // ii+=200;

      //  ii = ii.intValue () + 200;
        ii+=200;//自动装箱 ii = ii.intValue () + 200;
        System.out.println (ii);

        Integer iii = null; //NullPointerException
        if(iii!=null){
            iii += 300; 
        }
    }
}
```

# 日期

## Date类

Date代表了一个特定的时间，精确到毫秒

```java
public Date() 分配一个Date对象，并初始化，以便它代表它被分配的时间，精确到毫秒
public Date(long date) 分配一个Date对象，并将其初始化为表示标准基准时间起指定的毫秒数
import java.util.Date;

public class DateDemo{
    public static void main(String[] args){
//        public Date() 分配一个Date对象，并初始化，以便它代表它被分配的时间，精确到毫秒
        Date d1 = new Date ();
        System.out.println (d1);

//        public Date(long date) 分配一个Date对象，并将其初始化为表示标准基准时间起指定的毫秒数
        long date = 1000 * 60 * 60;
        Date d2 = new Date (date);
        System.out.println (d2);
    }
}
```

## Date类常用方法

```java
public long getTime() 获取的是日期对象从1970年1月1日00：00：00到现在的毫秒值
public void setTime() 设置时间，给的是毫秒值
import java.util.Date;

public class DateDemo{
    public static void main(String[] args){

        //创建日期对象
        Date d = new Date ();
        Date d1 = new Date ();

//      public long getTime() 获取的是日期对象从1970年1月1日00：00：00到现在的毫秒值
        System.out.println (d.getTime ());
        System.out.println (d.getTime ()*1.0/1000/60/60/24/365+"年");

        System.out.println (d1);//Thu Oct 14 23:18:42 EDT 2021
        //long time = 1000*60*60;
        long time = System.currentTimeMillis ();
        d1.setTime (time);
        System.out.println (d1);
    }
}
```

## SimpleDateFormat类

SimpleDateFormat类是一个具体的类，用于以区域设置敏感的方式格式化和解析日期。主要学习日期格式化和解析

日期和时间格式由日期和时间模式字符串指定，在日期和时间模式字符串种，从“A”到“Z”以及从'a'到‘z’引号的字母被解释为表示日期或者时间字符串的组件的模式字母

- y 年
- M 月
- d 日
- H 时
- m 分
- s 秒

```java
构造方法
public SimpleDateFormat() 构造一个SimpleDateFormat，使用默认模式和日期格式
public SimpleDateFormat(String pattern)构造一个SimpleDateFormat使用给定的模式和默认的日期格式
```

## SimpleDateFormat格式化和解析日期

1.格式化（从Date到String）

public final String format(Date date):将日期格式化成 日期/时间字符串

2.解析（从String到Date）

public Date parse(String source):从给定字符串的开始解析文本以日期生成

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateDemo{
    public static void main(String[] args) throws ParseException{

        // 1.格式化（从Date到String）
        Date date = new Date ();
//public SimpleDateFormat() 构造一个SimpleDateFormat，使用默认模式和日期格式
//        SimpleDateFormat sdf = new SimpleDateFormat ();
        SimpleDateFormat sdf = new SimpleDateFormat ("yyyy年MM月dd日HH:mm:ss");
        String s = sdf.format (date);
        System.out.println (s);
        System.out.println ("----------");

        //public Date parse(String source):从给定字符串的开始解析文本以日期生成
        String ss = "2048-08-09 11:11:11";
        //
        SimpleDateFormat sdf22 = new SimpleDateFormat ("yyyy-MM-dd HH:mm:ss");
        Date date1 = sdf22.parse (ss);//alt+enter，抛出异常
        System.out.println (date1);

    }
}
```

## Calendar类

Calendar为某一时刻和某一时段日历字段之间的转换提供了一些方法，并为操作日历字段提供了一些方法

Calendar提供了一个类方法getInstance用于获取Calender对象，其日历字段已使用当前日期和时间初始化

```java
构造方法：Calendar rightNow = Calendar.getInstance();

import java.util.Calendar;

public class CalendarDemo{
    public static void main(String[] args){
        //创建对象
        Calendar c = Calendar.getInstance();
//        System.out.println (c);

        //public int get (int field)
        int year = c.get (Calendar.YEAR);
        int month = c.get (Calendar.MONTH)+1;
        int date = c.get (Calendar.DATE);

        System.out.println (year+"年"+month+"月"+date+"日");
    }
}
```

## Calendar 的常用方法

```java
public int get(int field) 返回给定日历字段的值
public abstract void add(int field,int amount) 根据日历的规则，将指定的时间量添加或者
减去给定的日历字段
public final void set(int year,int month,int date)设置当前日历日期
```

```java
import java.util.Calendar;

public class CalendarDemo{
    public static void main(String[] args){

        //创建对象
        Calendar c = Calendar.getInstance ();
//        System.out.println (c);

        //public int get (int field)
//        int year = c.get (Calendar.YEAR);
//        int month = c.get (Calendar.MONTH)+1;
//        int date = c.get (Calendar.DATE);
//        System.out.println (year+"年"+month+"月"+date+"日");
        //public abstract void add(int field,int amount) 根据日历的规则，将指定的时间量添加或者

//        c.add (Calendar.YEAR,-10);
//        c.add (Calendar.DATE,-5);
//        int year = c.get (Calendar.YEAR);
//        int month = c.get (Calendar.MONTH)+1;
//        int date = c.get (Calendar.DATE);
//        System.out.println (year+"年"+month+"月"+date+"日");

//        public final void set(int year,int month,int date)设置当前日历日期
          c.set(2048,11,12);

          int year = c.get (Calendar.YEAR);
        int month = c.get (Calendar.MONTH)+1;
        int date = c.get (Calendar.DATE);
        System.out.println (year+"年"+month+"月"+date+"日");

    }
}
```

获取任意一年的二月有多少天？

```java
import java.util.Calendar;
import java.util.Scanner;

public class CalendarDemo{
    public static void main(String[] args){

        Scanner sc = new Scanner (System.in);
        System.out.println ("请输入年份");
        int year = sc.nextInt ();

        //设置对象的年月日
        Calendar c = Calendar.getInstance ();
        c.set (year,2,1);

        //3月1日往前推一天
        c.add(Calendar.DATE,-1);

        //获取并输出
        int date = c.get (Calendar.DATE);

        System.out.println (year+"年的二月份有"+date+"天");
    }
}
```

# 异常

## 异常

```java
public class Demo{
    public static void main(String[] args){
        method ();
    }
    public static void method() {
        int[] arr = {1,2,3};
//        System.out.println (arr[3]);//ArrayIndexOutOfBoundsException索引越界异常 Runtime类型的Exception
        System.out.println (arr[2]);
    }
}
```

- Error：严重问题，不需要处理
- Exception：异常类，它表示程序本身可以处理的问题
- RuntimeException：编译器不检查，出问题后，回来改代码
- 非RuntimeException：编译的时候必须处理，否则不能RUN

## JVM的默认处理方案

如果程序报错了，没做任何处理，JVM会做出默认处理

- 把异常的名称，异常原因和出现的位置输出在控制台
- 停止程序执行

```java
public class Demo{
    public static void main(String[] args){
        System.out.println ("开始");
        method ();
        System.out.println ("结束");
    }
    public static void method() {
        int[] arr = {1,2,3};
//        System.out.println (arr[1]);
        System.out.println (arr[3]);

        //开始
//        Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException:原因： Index 3 out of bounds for length 3
//        位置：at Demo.method(Demo.java:10)
//        at Demo.main(Demo.java:4)
    }
}
```

## 伟大的try catch！

如果程序出问题了，需要自己处理，有两种方案

- try……catch
- throws

```java
格式：

try {
			可能出现异常的代码;
} catch(异常类名 变量名) {
			异常的处理代码; 
}
```

执行流程

程序从try里面的代码开始执行，出现异常，会自动生成一个异常类对象，该异常对象将被提交给Java运行时的系统。

当Java运行系统接收到异常对象时，会到catch中去找匹配的异常类，找到后进行异常处理

执行完毕之后，程序还可以继续往下执行。

```java
public class Demo{
    public static void main(String[] args){
        System.out.println ("开始");
        method();
        System.out.println ("结束");
    }
    public static void method(){
        try {
            int[] arr = {1 ,2 ,3};
            System.out.println (arr[3]); //new ArrayIndexOutOfBoundsException();
        } catch (ArrayIndexOutOfBoundsException e){
//            System.out.println ("您访问的数组索引不存在");
            e.printStackTrace ();
        }
    }
}
```

## Throwable

成员方法

```java
public String getMessage() 返回此throwable的详细消息字符串 
public String toString() 返回此可抛出的简短描述
public void printStackTrace() 把异常的错误信息输出在控制台
```

```java
public class Demo{
    public static void main(String[] args){
        System.out.println ("开始");
        method();
        System.out.println ("结束");
    }

    public static void method(){
        try {
            int[] arr = {1 ,2 ,3};
            System.out.println (arr[3]); //new ArrayIndexOutOfBoundsException();
        } catch (ArrayIndexOutOfBoundsException e){
//            e.printStackTrace ();
//            System.out.println (e.getMessage ());//异常原因
            System.out.println (e.toString ());//异常原因和类名
            e.printStackTrace ();//最全的
        }
    }
}
```

## 编译时异常和运行时异常

Java中的异常分为两大类：编译时异常和运行时异常，也被称为受检异常和非受检异常。

所有的RuntimeException类及其子类被称为运行时异常，其他的异常都是编译时异常。

- 编译时异常：必须显示处理，否则程序就会发生错误，无法通过编译
- 运行时异常：无需显示处理，也可以和编译时异常一样处理

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Demo{
    public static void main(String[] args){

			// method();
        method1 ();
    }
    //运行时异常
    public static void method(){
        try {
            int[] arr = {1 ,2 ,3};
            System.out.println (arr[3]);
        }catch (ArrayIndexOutOfBoundsException e){
            e.printStackTrace ();
        }
    }//做不做try catch都一个样

    //编译时异常
    public static void method1(){
        try {
            String s = "2048-08-09";
            SimpleDateFormat sdf = new SimpleDateFormat ("yyyy-MM-dd");
            Date d = sdf.parse (s);
            System.out.println (d);
        }catch (ParseException e){
            e.printStackTrace ();
        }

    }
}
```

## 自定义异常

格式

```java
public class 异常类名 extends Exception {
	无参构造
	带参构造
}
```

例如

```java
public class ScoreException extends Exception {
	public ScoreException() { }
	public ScoreException(String message) {
			super(message);
	}
}
```

## throws和throw的区别

throws

- throws用在方法声明的后面，跟的是异常类名
- 表示抛出异常，由该方法的调用者来处理
- 表示出现异常的一种可能性，并不一定会发生这种异常

throw

- 用在方法体内，跟的是异常对象名
- 表示抛出异常，由方法体内的语句处理
- 执行throw一定抛出了某种异常

```java
public class ScoreException extends Exception{

    public ScoreException(){};

    public ScoreException(String message){
        super(message);
    }
}

public class Teacher{

    public void checkScore(int score) throws Exception{
        if(score<0 || score>100){
//            throw new ScoreException ();
            throw new ScoreException ("你给的分数有误");
        }  else{
            System.out.println ("分数正常");
        }
    }
}

import java.util.Scanner;

public class TeacherTest{
    public static void main(String[] args)throws Exception{
        Scanner sc = new Scanner (System.in);
        System.out.println ("请输入分数");
        int score = sc.nextInt ();

        Teacher t = new Teacher ();

        try {
            t.checkScore (score);
        } catch (ScoreException e){
            e.printStackTrace ();
        }
    }
}
```

# Collection集合

## 集合体系结构

集合类的特点：提供一种存储空间可变的存储模型，存储的数据容量可以随时发生改变。

## Collection集合概述和使用

Collection集合概述

- 是单例集合的顶层接口，它表示一组对象，这些对象也成为Collection的元素
- JDK不提供此接口的任何直接实现，它提供更具体的子接口（如Set和List）实现

```java
boolean add(E e) 添加元素
boolean remove(Object o) 从集合中移除指定元素
void clear() 清空集合中的元素
boolean contains(Object o) 判断集合中是否存在指定元素
boolean isEmpty() 判断集合是否为空
int size() 集合的长度，也就是集合中元素的个数
```

```java
import java.util.ArrayList;
import java.util.Collection;

public class Demo{
    public static void main(String[] args){
        Collection<String> c = new ArrayList<String> ();
//        boolean add(E e) 添加元素
        System.out.println (c.add ("hello"));
        System.out.println (c.add ("world"));
        System.out.println (c.add ("world"));

//        boolean remove(Object o) 从集合中移除指定元素
        System.out.println (c.remove ("world"));//有重复的先移除靠前的。
        System.out.println (c);

//        void clear() 清空集合中的元素
//        c.clear ();
        System.out.println (c);

//        boolean contains(Object o) 判断集合中是否存在指定元素
        System.out.println (c.contains ("world"));

//        boolean isEmpty() 判断集合是否为空
        c.isEmpty ();

        System.out.println (c.size ());
    }
}
```

## Collection 集合的遍历

```java
Iterator:迭代器，集合的专用遍历方式

- Iterator<E> iterator() ：返回此集合中元素的容器，通过集合的iterator()方法得到
- 迭代器是通过集合的iterator()方法得到的，所以我们说他是依赖于集合而存在的
```



Iterator中的常用方法

- E next()：返回迭代器中的下一个元素
- boolean hasNest()：如果迭代具有更多的元素，则返回true

```java
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class Demo{
    public static void main(String[] args){

        //- E next()：返回迭代器中的下一个元素
        //- boolean hasNest()：如果迭代具有更多的元素，则返回true

        Collection<String> c = new ArrayList<String> ();
        c.add ("hello");
        c.add ("world");
        c.add ("java");

        //Iterator<E> iterator() ：返回此集合中元素的容器，通过集合的iterator()方法得到
        Iterator<String> it = c.iterator ();
//        System.out.println (it.next ());//hello
//        System.out.println (it.next ());//world
//        System.out.println (it.next ());//java
////        System.out.println (it.next ());被请求的元素不存在

        //- boolean hasNest()：如果迭代具有更多的元素，则返回true

//        if(it.hasNext ()){
//            System.out.println (it.next ());
//        }
//        if(it.hasNext ()){
//            System.out.println (it.next ());
//        }
//        if(it.hasNext ()){
//            System.out.println (it.next ());
//        }
//        if(it.hasNext ()){
//            System.out.println (it.next ());
//        }//不会报错，因为先做了hasNext()判断有没有元素，没有就返回false

        //用while循环改进
        while(it.hasNext ()){
            String s = it.next ();
            System.out.println (s);
        }
    }
}
```

## List集合概述和特点

- List称为有序集合（序列），用户可以精确的控制列表中每个元素的插入位置。用户可以通过整数索引访问元素，并搜索列表中的元素

- 与Set集合不同，列表通常允许重复的元素

- 特点

  - 有序:存储和取出的顺序一致
  - 可重复:存储的元素可以重复

  ```java
  import java.util.ArrayList;
  import java.util.Iterator;
  import java.util.List;
  
  public class Demo{
      public static void main(String[] args){
  
          //创建对象
          List<String> list = new ArrayList<String> ();
          //添加元素
          list.add ("HELLO");
          list.add ("WORLD");
          list.add ("Java");
          list.add ("WORlD");
  
          System.out.println (list);
  
          //迭代器遍历
          Iterator<String> it = list.iterator ();
          while(it.hasNext ()){
              String s = it.next ();
              System.out.println (s);
          }
      }
  }
  ```

## List集合特有方法

```java
void add(int index , E element) 在此集合的指定位置插入指定的元素
E remove(int index) 删除指定索引处的元素，返回被删除的元素。
E set（int index , E element) 修改指定索引处的元素，返回被修改的元素
E get（int index) 返回指定索引处的元素
```

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Demo{
    public static void main(String[] args){

        //创建对象
        List<String> list = new ArrayList<String> ();
        //添加元素
        list.add ("HELLO");
        list.add ("WORLD");
        list.add ("Java");

//        void add(int index , E element) 在此集合的指定位置插入指定的元素
        list.add(1,"javaee");
        //list.add(11,"javaee");报错

//        E remove(int index) 删除指定索引处的元素，返回被删除的元素。
        list.remove (1);
//        E set（int index , E element) 修改指定索引处的元素，返回被修改的元素
//        System.out.println (list.set (1,"java"));
//        E get（int index) 返回指定索引处的元素
        System.out.println (list.get (1));
        System.out.println (list);

        //遍历
        for(int i=0;i< list.size ();i++){
            String s = list.get (i);
        }
    }
}
```

## 并发修改异常

并发修改异常

- ConcurrentModificationException

产生原因

- 迭代器遍历的过程中，通过集合对象修改了集合中元素的长度，造成了迭代器获取元素中判断预期修改值和实际修改值不一致
- 解决方案
- 用for循环遍历，用集合对象做对应的操作即可

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Demo{
    public static void main(String[] args){

        //创建对象
        List<String> list = new ArrayList<String> ();

        //添加元素
        list.add ("hello");
        list.add ("world");
        list.add ("java");

        Iterator<String> it = list.iterator ();
//        while(it.hasNext ()){
//            String s = it.next ();
//            if(s.equals ("world")){
//                list.add ("javaee");
//            }
//            System.out.println (list);
//        }
        for(int i = 0;i< list.size ();i++){
            String s = list.get (i);
            if(s.equals ("world")){
                list.add ("javaee");
            }

        }

    }
}
```

## ListIterator

ListIterator:列表迭代器

- 通过List集合的listIterator()方法得到，所以说它是List集合特有的迭代器

ListIterator中的常用方法

- E next()：返回迭代中的下一个元素
- boolean hasNext() ：如果迭代具有更多元素，则返回true
- E previous()：返回列表中的上一个元素
- boolean hasPrevious() ：如果此列表迭代器在相反方向遍历列表时具有更多元素，则返回true
- void add(E e)：将指定元素插入列表

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class Demo{
    public static void main(String[] args){

        //创建集合对象
        List<String> list = new ArrayList<String> ();
        //添加元素
        list.add ("hello");
        list.add ("world");
        list.add ("java");

//        通过List集合的listIterator()方法得到
//        ListIterator<String> lit = list.listIterator ();
//        while(lit.hasNext ()){
//            String s = lit.next ();
//            System.out.println (s);
//        }
//        System.out.println ("--------");
//        //boolean hasPrevious() ：如果此列表迭代器在相反方向遍历列表时具有更多元素，则返回true
//        while(lit.hasPrevious ()){
//            //E previous()：返回列表中的上一个元素
//            String s = lit.previous ();
//            System.out.println (s);
//        }

        //void add(E e)：将指定元素插入列表
        ListIterator<String> lit = list.listIterator ();
        while(lit.hasNext ()){
            String s = lit.next ();
            if(s.equals ("world")){
                lit.add ("javaee");
            }
        }
        System.out.println (list);
    }
}
```

## 增强for循环

增强for：简化数组和Collection集合的遍历

- 实现Iterable接口的类允许其对象成为增强型for语句的目标
- 它是JDK5以后出现的，其内部原理是一个Iterator迭代器

格式：

```java
for(元素数据类型 变量名 : 数组或者Collection集合) {
	//在此处使用变量即可，该变量就是元素
}
```

例如：

```java
int[] arr = {1,2,3,4,5}

for(int i : arr) {
	System.out.print(i);
}
```

```java
import java.util.ArrayList;
import java.util.List;
import java.util.ArrayList;

public class Demo{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};

        for(int i:arr){
            System.out.println (i);
        }

        System.out.println ("-------");

        String[] strArray = {"hello","world","java"};
        for(String s:strArray){
            System.out.println (s);
        }

        System.out.println ("-------");

        List<String> list = new ArrayList<String> ();
        list.add ("hello");
        list.add ("world");
        list.add ("java");

        for(String s:list){
            System.out.println (s);
        }

        System.out.println ("-------");
//        //内部是一个iterator迭代器
//        for(String s : list){
//            if(s.equals ("world")){
//                list.add ("1");
//            }
//        }
//        run不起来，所以内部是一个iterator迭代器
    }
}
```

## 三种遍历list方式

```java
public class Student{

    private String name;
    private int age;

    public Student(){
    }

    public Student(String name ,int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }
}
```

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Demo{
    public static void main(String[] args){

        //创建list对象
        List<Student> list = new ArrayList<> ();
        //创建学生对象
        Student s1 = new Student ("是",19);
        Student s2 = new Student ("是d ",192);
        Student s3 = new Student ("是df",1921);

        list.add (s1);
        list.add (s2);
        list.add (s3);
        //迭代器：集合遍历所有方式
        Iterator<Student> it = list.iterator ();
        while(it.hasNext ()){
            Student s = it.next ();
            System.out.println (s.getName ()+s.getAge ());
        }
        System.out.println ("--------");
        //普通for
        for(int i = 0;i<list.size ();i++){
            Student s = list.get (i);
            System.out.println (s.getName ()+s.getAge ());
        }
        System.out.println ("--------");
        //增强for
        for(Student s : list){
            System.out.println (s.getName ()+s.getAge ());
        }

    }
}
```

## List集合子类特点

List集合常用子类：ArrayList、LinkedList

- ArrayList：底层数据结构是数组，查询快，增删慢
- LinkedList：底层数据结构是链表，查询慢，增删快

分别使用ArrayList和LinkedList使用三种方式遍历

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;

public class Demo{
    public static void main(String[] args){
        //创建集合对象
        ArrayList<String> array = new ArrayList<String> ();
        array.add ("hello");
        array.add ("world");
        array.add ("java");

        //遍历

        //增强for
        for(String s : array) {
            System.out.println (s);
        }
        //普通for
        for(int i=0;i< array.size ();i++){
            String s = array.get (i);
            System.out.println (s);
        }
        //While
        Iterator<String> it = array.iterator ();
        while(it.hasNext ()){
            System.out.println (it.next ());
        }
        System.out.println ("----------------");

        LinkedList<String> linkedList = new LinkedList<String> ();
        linkedList.add ("HELLO");
        linkedList.add ("dasd");
        linkedList.add ("das");
        //增强for
        for(String s : linkedList){
            System.out.println (s);
        }
        //普通for
        for(int i = 0;i< linkedList.size ();i++){
            System.out.println (linkedList.get (i));
        }
        //while
        Iterator<String>linkIt = linkedList.iterator ();
        while (linkIt.hasNext ()){
            System.out.println (linkIt.next ());
        }

    }
}
```

## LinkedList集合的特有功能

```java
public void addFirst(E e) 在该列表开头插入指定的元素
public void addLast(E e) 将指定的元素追加到此列表的末尾
public E getFirst() 返回此列表中的第一个元素
public E getLast() 返回此列表中的最后一个元素
public E removeFirst() 从此列表中删除并返回最后一个元素
public E removeLast() 从此列表中删除并返回最后一个元素
```

```java
import java.util.LinkedList;

public class Demo{
    public static void main(String[] args){

        LinkedList<String> linkedList = new LinkedList<String> ();
        linkedList.add ("hello");
        linkedList.add ("world");
        linkedList.add ("java");

        System.out.println (linkedList);

//        public void addFirst(E e) 在该列表开头插入指定的元素
        linkedList.addFirst ("javase");
//        public void addLast(E e) 将指定的元素追加到此列表的末尾
        linkedList.addLast ("javaee");
        System.out.println (linkedList);

//        public E getFirst() 返回此列表中的第一个元素
//        public E getLast() 返回此列表中的最后一个元素
        System.out.println (linkedList.getFirst ());
        System.out.println (linkedList.getLast ());

//        public E removeFirst() 从此列表中删除并返回最后一个元素
//        public E removeLast() 从此列表中删除并返回最后一个元素
        linkedList.removeFirst ();
        linkedList.removeLast ();
        System.out.println (linkedList);

    }
}
```

# Set

## Set集合概述和特点

- 不包含重复元素

```java
import java.util.HashSet;
import java.util.Set;

public class Demo{
    public static void main(String[] args){

        //创建集合对象
        Set<String> set = new HashSet<String> ();
        set.add ("hello");
        set.add ("world");
        set.add ("java");
//        set.add ("java");
        //不包含重复元素

        //遍历
        for(String s : set){
            System.out.println (s);
        }
    }
}
```

## 哈希值

哈希值：是JDK根据对象的地址或者字符串或者数字算出来的int类型数值

Object类中有一个方法获取对象的哈希值

- public int hashCode()：返回对象的哈希值

对象哈希值的特点

- 同一个对象多次调用hashCode()方法返回的哈希值是相同的
- 默认情况下，不同对象的哈希值是不相同的，而重写hashCode()方法，可以让不同对象的哈希值相同

```java
public class Student{
    private String name;
    private int age;

    public Student(){
    }

    public Student(String name ,int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

//    public int hashCode(){
//        return 0;
//    }
}
```

```java
public class Demo{
    public static void main(String[] args){
        //对象
        Student s1 = new Student ("林青霞",19);

//        同一个对象多次调用hashCode()返回的哈希值是相同的
        System.out.println (s1.hashCode ());//1239731077
        System.out.println (s1.hashCode ());//1239731077

//        默认情况下不同的对象哈希值是不同的
//        通过方法重写，可以实现不同对象的哈希值是相同的
        Student s2 = new Student ("林青霞",19);
        System.out.println (s2.hashCode ());//557041912
        System.out.println (s2.hashCode ());//557041912
        System.out.println ("------------------");
        System.out.println ("hello".hashCode ());//99162322
        System.out.println ("world".hashCode ());//113318802
        System.out.println ("java".hashCode ());//3254818
        System.out.println ("world".hashCode ());//113318802
        System.out.println ("----");
        System.out.println ("重".hashCode ());
        System.out.println ("是".hashCode ());

    }
}
```

## 哈希表

- JDK8之前，底层采用 数组+链表实现，可以说是一个元素为链表的数组
- JDK8之后，在长度比较长的时候，底层实现了优化

## LinkedHashSet集合概述特点

LinkedHashSet集合特点

- 哈希表和链表实现的Set接口，具有可预测的迭代次序
- 由链表保证元素有序，也就是说元素的存储和取出是一致的
- 由哈希表保证元素唯一，也就是说没有重复的元素
- 存储字符串并遍历

```java
import java.util.LinkedHashSet;

public class Demo {
    public static void main (String[] args) {
        LinkedHashSet<String> linkedHashSet = new LinkedHashSet<String> ();
        linkedHashSet.add ("hello");
        linkedHashSet.add ("world");
        linkedHashSet.add ("java");

        linkedHashSet.add ("world");//输出不了

        for(String s : linkedHashSet){
            System.out.println (s);
        }
    }
}
```

## TreeSet集合概述和特点

- 元素有序，这里的顺序不是指存储和取出的顺序，而是按照一定的规则进行排序，具体排序方式取决于方法
  - TreeSet()：根据其元素的自然排序进行排序
  - TreeSet(Comparator comparator)：根据指定的比较器进行排序
- 没有带索引的方法，所以不能使用普通for循环遍历
- 由于是Set集合，不包含重复的元素

TreeSet练习，存储Integer并且遍历

```java
import java.util.TreeSet;

public class Demo{
    public static void main (String[] args) {

        //TreeSet<int> ts = new TreeSet<int> ();
        TreeSet<Integer> ts = new TreeSet<Integer> ();
        //添加元素
        ts.add (10);
        ts.add (30);
        ts.add (20);
        ts.add (50);
        ts.add (12);
        ts.add (12);//不能包含重复的

        //遍历
        for(Integer i : ts){
            System.out.println (i);
            //10
            //12
            //20
            //30
            //50
            //自然排序
        }
    }
}
```

## 自然排序Comparable的使用

- 存储Student对象并且遍历，创建TreeSet集合使用无参构造方法
- 按照年龄从小到大排序，年龄相同时，按照名字字母的顺序排序
- 用TreeSet集合存储自定义对象，无参构造方法使用的是自然排序对元素进行排序的
- 自然排序，就是让元素所属的类实现Comparable接口，重写comparaTo(T o)方法
- 重写方法时，一定注意排序规则必须按照要求的主要条件和次要条件来写。

```java
public class Student implements Comparable<Student> {
    private String name;
    private int age;

    public Student () {
    }

    public Student (String name ,int age) {
        this.name = name;
        this.age = age;
    }

    public String getName () {
        return name;
    }

    public void setName (String name) {
        this.name = name;
    }

    public int getAge () {
        return age;
    }

    public void setAge (int age) {
        this.age = age;
    }

    //重写接口

    @Override
    public int compareTo (Student s) {
        //return 0;只能输出1个，因为要对比，Student类型没法对比
        //return 1;按照输入的顺序排序
        //return -1;同上，反过来的

        //按照年龄从小到大排序，年龄相同 时，按照名字字母的顺序排序

        int num = this.age - s.age;//从小到大
//        int num = s.age - this.age; 从大到小

        //按照名字字母的顺序排序
        int num2 = num==0?this.name.compareTo (s.name):num;
        //return num;
        return num2;

    }
}
```

```java
import java.util.TreeSet;

public class TreeSetDemo {
    public static void main (String[] args) {
        //创建集合对象
        TreeSet<Student> ts = new TreeSet<Student> ();
        //创建Student对象
        Student s1 = new Student ("马牛逼",19);
        Student s2 = new Student ("我的",20);
        Student s3 = new Student ("打是的",23);
        Student s4 = new Student ("是是",22);
        Student s5 = new Student ("是三大",20);//输出不了，因为年龄相同，除非对名字也进行比较
        Student s6 = new Student ("是是",22);//输出不了，因为TreeSet的元素唯一性

        ts.add (s1);
        ts.add (s2);
        ts.add (s3);
        ts.add (s4);
        ts.add (s5);
        ts.add (s6);
        //遍历
        for(Student s : ts){
            System.out.println (s.getName ()+s.getAge ());
        }

    }
}
```

## 比较器排序Comparator的使用

- 存储学生对象并且遍历，创建TreeSet集合使用带参构造方法
- 要求：按年龄从小到大排序，年龄相同时，按照姓名的字母顺序排序
- 用TreeSet集合存储自定义对象，带参构造方法使用的是比较器排序对元素进行排序的。
- 比较器排序，就是让集合构造方法接收Comparator的实现类对象，重写compare（T o1，T o2）方法
- 重写方法时候，一定要注意排序规则必须按照要求的主要条件和次要条件来写

```java
import java.util.Comparator;
import java.util.TreeSet;

public class Demo {
    public static void main (String[] args) {
        //创建集合对象
        TreeSet<Student> s = new TreeSet<Student> (new Comparator<Student> () {
            @Override
            public int compare (Student s1 ,Student s2) {
                //this.age - s.age
                //s1 = this
                //s2 = s
                int num = s1.getAge () - s2.getAge ();
                int num2 = num==0?s1.getName ().compareTo (s2.getName ()):num;
                return num2;
            }
        });

        for (Student student : s) {
            System.out.println (student.getName ()+student.getAge ());
        }
    }
}
```

# 泛型

## 泛型概述和好处

泛型：是JDK5中引入的新特性，它提供了编译时类型安全检测机制，该机制允许在编译时检测到非法类型。

它的本质是参数化类型。也就是说所操作的数据类型被指定为一个参数

将类型由原来的具体的类型参数化，然后在使用/调用的时候传入具体的类型

这种参数类型可以用在类，方法和接口中，分别被称为泛型类、泛型方法、泛型接口

```java
- <类型>：指定一种类型的格式，这里的类型可以看成形参

- <类型1,类型2……>：指定多种类型的格式，多种类型之间用逗号隔开，这里的类型可以看成形参

- 将来具体调用的时候给定的类型可以看成实参，并且实参的类型只能是引用数据类型

- 好处：把运行期间的问题提前到了编译期间，避免了强制类型转化
```



```java
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

public class Demo {
    public static void main (String[] args) {

        //创建集合对象
//        Collection cl = new ArrayList ();
        Collection<String> cl = new ArrayList<String> ();
        //添加元素
        cl.add ("hello");
        cl.add ("world");
        cl.add ("java");
//        cl.add (100);
        //遍历集合
//        Iterator iterator = cl.iterator ();
        Iterator<String> iterator = cl.iterator ();

        while(iterator.hasNext ()){
//            Object next = iterator.next ();
//            System.out.println (next);
//            String s = (String) iterator.next ();//ClassCastException
            String next = iterator.next ();
            System.out.println (next);
        }
    }
}
```

## 泛型类

泛型类定义格式

- 格式：修饰符class 类名<类型>{ }

```java
例如：public class Generic<T> { }
```

- 此处的T可以随便写，常见如T/E/K/V等形式通常表示泛型

```java
public class Student {
    String name;

    public String getName () {
        return name;
    }

    public void setName (String name) {
        this.name = name;
    }
}
```

```java
public class Teacher {

    private Integer age;

    public Integer getAge () {
        return age;
    }

    public void setAge (Integer age) {
        this.age = age;
    }
}
```

```java
public class Teacher {

    private Integer age;

    public Integer getAge () {
        return age;
    }

    public void setAge (Integer age) {
        this.age = age;
    }
}
```

```java
public class Demo {
    public static void main (String[] args) {
        Student s = new Student ();
        s.setName ("学生");
        System.out.println (s.getName ());
        Teacher t = new Teacher ();
        t.setAge (30);
//        t.setAge ("30");
        System.out.println (t.getAge ());
        System.out.println ("--------");
        Generic<String> g1 = new Generic<String> ();
        g1.setT ("马牛逼");
        Generic<Integer> g2 = new Generic<Integer> ();
        g2.setT (19);
        Generic<Boolean> g3 = new Generic<Boolean> ();
        g3.setT (true);

        System.out.println (g1.getT ()+g2.getT ()+g3.getT ());
    }
}
```

## 泛型方法

泛型方法定义格式：

```java
- 格式：修饰符<类型>返回值类型 方法名（类型 变量名）{}
- 例如：public<T> void show(T t){ }
```

```java
//public class Generic {
//    public void show(String s){
//        System.out.println (s);
//    }
//    public void show(Integer it){
//        System.out.println (it);
//    }
//    public void show(Boolean b){
//        System.out.println (b);
//    }
//}
//改进1
//public class Generic<T> {
//    public void show(T t){
//        System.out.println (t);
//    }
//}
//改进2
public class Generic {
    public <T> void show(T t){
        System.out.println (t);
    }
}
```

```java
public class GenericDemo {
    public static void main (String[] args) {
//        Generic g = new Generic ();
//        g.show ("马牛逼");
//        g.show (30);
//        g.show (true);
//        g.show (13.14);

        Generic g = new Generic ();
        g.show ("我");
        g.show (1);
        g.show (12.1);
        g.show (true);
    }
}
```

## 泛型接口

泛型接口定义格式

```java
格式：修饰符 interface 接口名<类型>{ }
```

```java
例如：public interface Generic<T> { }
```

```java
public interface Generic<T> {
    void show(T t);
}
```

```java
public class GenericImpl<T> implements Generic<T>{
    @Override
    public void show (T t) {
        System.out.println (t);
    }
}
```

```java
public class GenericDemo {
    public static void main (String[] args) {
        Generic<String> g1 = new GenericImpl<String> ();
        g1.show ("大苏打");
        Generic<Integer> g2 = new GenericImpl<Integer> ();
        g2.show (211);
    }
}
```

## 类型通配符

为了表示各种泛型List父类，可以使用类型通配符

```java
- 类型通配符：<?>

- List<?>：表示元素类型未知的List，它的元素可以匹配任何的类型

- 这种带通配符的List仅表示它是各种泛型List的父类，并不能把元素添加其中
```





```java
如果说不希望List<?>是任何泛型List的父类，只希望它代表某一类泛型List的父类，可以使用类型通配符的上限

- 类型通配符上限：<?extends 类型>
- List<? extends Number>：它表示的类型是Number或者其它子型
```



```java
除了可以指定类型通配符的上限，也可以指定类型通配符的下限

- 类型通配符的下限：<?super 类型>
- List<? super Number>：它表示的类型是Number或者其父类型
```



```java
import java.util.ArrayList;
import java.util.List;

public class GenericDemo {
    public static void main (String[] args) {
//        类型通配符：<?>
        List<?> list1 = new ArrayList<Object> ();
        List<?> list2 = new ArrayList<Number> ();
        List<?> list3 = new ArrayList<Integer> ();
        System.out.println ("--------");
//        类型通配符上限：<?extends 类型>
//        List<? extends Number> list4 = new ArrayList<Object> ();上限是Number，所以不能是Number的父类
        List<? extends Number> list5 = new ArrayList<Number> ();
        List<? extends Number> list6 = new ArrayList<Integer> ();
        System.out.println ("--------");
//        类型通配符的下限：<?super 类型>
        List<? super Number> list7 = new ArrayList<Object> ();
        List<? super Number> list8 = new ArrayList<Number> ();
//        List<? super Number> list9 = new ArrayList<Integer> ();下限！！！
    }
}
```

## 可变参数

可变参数又称参数个数可变，用做方法的形参出现，那么方法参数个数是可变的

- 格式：修饰符 返回值类型 方法名（数据类型...变量名）{ }
- 例如：public static int sum(int...a){ }

注意事项

- 这里的变量其实是一个数组

- 如果一个方法有多个参数，包含可变参数，可变参数要放在最后

  ```java
  public class Demo {
      public static void main (String[] args) {
          System.out.println (sum (10));
          System.out.println (sum (10,20));
          System.out.println (sum (10,20,30));
      }
  //    public static int sum(int... a) {
  ////        System.out.println (a);
  ////        return 0;
  //        int sum = 0;
  //
  //        for (int i : a){
  //            sum += i;
  //        }
  //    return sum;
  //    }
      public static int sum(int b,int... a){
          return 0;
      }
  }
  ```

## 可变参数的使用

```java
Arrays工具类中有一个静态方法：

- public static <T> List <T> asList(T...a)：返回由指定数组支持的固定大小的列表
- 返回的集合不能增删操作，可以修改操作

List接口中有一个静态方法：

- public static <E>List<E> of(E...elements)：返回包含任意数量元素的不可变表
- 返回的集合不能增删改操作

Set接口中有一个静态方法：

- public static <E>Set<E> of(E...elements)：返回一个包含任意数量元素的不可变集合
- 在给元素的时候，不能给重复的元素
- 返回类集合不能做自身操作，没有修改的方法
```



```java
import java.util.Arrays;
import java.util.List;
import java.util.Set;

public class Demo {
    public static void main (String[] args) {

        System.out.println ("------------------------------------------");
//        List<String> list = Arrays.asList ("hello" ,"world" ,"java");
//        System.out.println (list);
////        list.add ("javaee");不能使用添加和删除，因为会修改大小
////        list.remove ("world");不能使用添加和删除，因为会修改大小
//        list.set (1,"javaee");可以改
        System.out.println ("------------------------------------------");
//        - public static <E>List<E> of(E...elements)：返回包含任意数量元素的不可变表
//        List<String> list = List.of ("hello" ,"world" ,"java","world");//List集合可以有重复元素
//        System.out.println (list);
        ////        list.add ("javaee");不能使用添加和删除，因为会修改大小
        ////        list.remove ("world");不能使用添加和删除，因为会修改大小
        ////        list.set (1,"javaee");增删改都不行
        System.out.println ("------------------------------------------");
        //        - public static <T> List <T> asList(T...a)：返回由指定数组支持的固定大小的列表
        Set<String> set = Set.of ("hello" ,"world" ,"java");//不能重复元素
        System.out.println (set);
//        set.add ("javaee");不能添加
//        set.remove ("java");//不能删除
        
    }
}
```

# Map

## Map集合概述和特点

```java
- Interface Map<K,V> K：键的类型；V：值的类型
- 将键映射到值的对象；不能包含重复的键；每个键最多映射一个值
```



创建Map集合的对象

- 多态的方式
- 具体的实现类HashMap

```java
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main (String[] args) {
        //创建集合对象
        Map<String,String> map = new HashMap<String,String> ();
        map.put ("sb","马牛逼");
        map.put ("2b","黑手");
        map.put ("独立sb","虎哥");
        System.out.println (map);
    }
}
```

## Map集合的基本功能

- V put(K key,V value) 添加元素
- V remove(Object Key) 移除元素
- void clear() 清空所有的键值对元素
- boolean containsKey(Object Key) 判断集合是否包含指定的键
- boolean containsValue(Object Key) 判断集合是否包含指定的值
- boolean isEmpty() 判断集合是否为空
- int size() 集合的长度，也就是元素的个数

```java
import java.util.HashMap;
import java.util.Map;

public class Demo {
    public static void main (String[] args) {
        Map<String,String> map = new HashMap<String,String> ();

        map.put ("我是马牛逼","asdsa");
        map.remove ("我是马牛逼");
        map.clear ();
        map.containsKey ("我是马牛逼");
        map.containsValue ("我是马牛逼");
        map.isEmpty ();
        map.size ();
        
    }
}
```

## Map集合的获取功能

```java
- V get(Obejct key) 根据键 获取值
- Set<K> keySet() 获取所有键的集合
- Collection<V> values() 获取所有值的集合
- Set<Map.Entry<K,V>>entrySet() 获取所有键值对对象的集合
```



```java
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Demo {
    public static void main (String[] args) {
        Map<String,String> map = new HashMap<String,String> ();
        map.put ("sss","ss1");
        map.put ("ssss","ss2");
        map.put ("sssss","ss3");

//        System.out.println (map.get ("sss"));

//        Set<String> keySet = map.keySet ();
//        for(String key : keySet){
//            System.out.println (key);
//        }

        Collection<String> values = map.values ();
        for(String value:values){
            System.out.println (value);
        }
    }
}
```

## Map集合的遍历-方式一

- 获取所有Key的值，用KeySet()方法实现
- 遍历Key的集合，获取到每一个Key，用增强for实现
- 根据key去查找，用get(Object key)实现

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Demo {
    public static void main (String[] args) {
        Map<String,String> map = new HashMap<String,String> ();
        map.put ("sss","ss1");
        map.put ("ssss","ss2");
        map.put ("sssss","ss3");

        //获取所有Key的值，用KeySet()方法实现
        Set<String> keySet = map.keySet ();
        for(String key : keySet){
            //根据key去查找，用get(Object key)实现
            String s = map.get (key);
            System.out.println (key+","+s);
        }
    }
}
```

## Map集合的遍历-方式二

```java
- 获取所有Key值对对象的集合
- Set<Map.Entry<K,V>>entrySet()：获取所有Key对对象的集合
- 用增强for获得每一个Map.Entry
- 根据Key值的对象获得Key和Value
- 用getKey()获得Key
- 用getValue()获得Value
```



```java
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Demo {
    public static void main (String[] args) {
        Map<String,String> map = new HashMap<String,String> ();
        map.put ("sss","ss1");
        map.put ("ssss","ss2");
        map.put ("sssss","ss3");

        //获取所有键值对象集合
        Set<Map.Entry<String, String>> entrySet = map.entrySet ();
        //得到每一个Key对对象
        for(Map.Entry<String,String> me : entrySet) {
            //根据Key值对对象获取Key和Value
            String key = me.getKey ();
            String value = me.getValue ();
            System.out.println (key+","+value);
        }
    }
}
```

# Collections

## Collections概述和使用

- 是针对集合操作的工具类

## Collections类的常用方法

- public static <T extends Comparable<? super T>> void sort(List<T> list)：将指定的列表按升序排列
- public static void reverse(List<?> list)：反转指定列表中的元素的顺序
- public static void shuffle(List<?> list)：使用默认的随机源随机排列指定的列表

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Demo {
    public static void main (String[] args) {
        //创建集合对象
        List<Integer> list = new ArrayList<> ();

        //添加元素
        list.add (50);
        list.add (20);
        list.add (30);
        list.add (10);
        list.add (40);
        System.out.println (list);

        //public static <T extends Comparable<? super T>> void sort(List<T> list)：将指定的列表按升序排列
        Collections.sort (list);
        System.out.println (list);
        //public static void reverse(List<?> list)：反转指定列表中的元素的顺序
        Collections.reverse (list);
        System.out.println (list);
        //public static void shuffle(List<?> list)：使用默认的随机源随机排列指定的列表
        Collections.shuffle (list);
        System.out.println (list);
    }
}
```

# File

## File类概述和构造方法

File：他是文件和目录路径名的抽象表示

- 文件和目录是可以通过File封装成对象的
- 对于File而言，其封装的并不是一个真正存在的文件，仅仅是一个路径名而已，它可以是真实存在的，也可以是不存在的。将来是要通过具体的操作把这个路径的内容转换为具体存在的。

File(String pathname) 通过将给定的路径名字字符串转换为抽象路径名来创建新的File实例

File(String parent,String child) 从父路径名字字符串和子路径名字字符串创建新的File实例

File(File parent, String child) 从父抽象路径名和子路径名字字符串创新的File实例

```java
import java.io.File;

public class Demo {
    public static void main (String[] args) {

//        File(String pathname) 通过将给定的路径名字字符串转换为抽象路径名来创建新的File实例
        File f1 = new File ("H:\\untitled4\\src\\java.txt");
        System.out.println (f1);
//        File(String parent,String child) 从父路径名字字符串和子路径名字字符串创建新的File实例
        File f2 = new File ("H:\\\\untitled4","java.txt");
        System.out.println (f2);
//        File(File parent, String child) 从父抽象路径名和子路径名字字符串创新的File实例
        File f3 = new File ("H:\\\\untitled4");
        File f4 = new File (f3,"java.txt");
        System.out.println (f4);

    }
}
```

## File类创建功能

public boolean createNewFile() 当具有该名称的文件不存在时，创建一个由该抽象路径名命名的新空文件

public boolean mkdir() 创建由此抽象路径名命名的目录

public bollean mkdirs() 创建由此抽象路径名命名的目录，包括任何必须但不存在的父目录

```java
import java.io.File;
import java.io.IOException;

public class Demo {
    public static void main (String[] args) throws IOException {

        File f1 = new File ("H:\\untitled4\\java.txt");
        System.out.println (f1.createNewFile ());//alt+enter

        File f2 = new File ("H:\\untitled4\\javaSE");
        System.out.println (f2.mkdir ());

        File f3 = new File ("H:\\untitled4\\javaWeb\\Html");
        System.out.println (f3.mkdir ());//不可以的，因为没有JavaWeb目录，所以创建不了

        File f4 = new File ("H:\\untitled4\\javaWeb\\Html");
        System.out.println (f3.mkdirs ());
        
    }
}
```

## File类判断和获取功能

public boolean isDirectory()：测试此抽象路径名表示的File是否为目录

public boolean isFile()：测试此抽象路径名表示的File是否为文件

public boolean exists()：测试此抽象路径名表示的File是否存在

public String getAbsolutePath()：返回此抽象路径名的绝对路径名字字符串

public String getPath()：将此抽象路径名转换为路径名字字符串

public String getName()：返回由此抽象路径名表示文件或目录的名称

public String[] list()：返回此抽象路径名表示文件的目录中的文件和目录的字符串数组

public File[] listFiles()：返回此抽象路径名表示的目录中的文件和目录的File对象数组

```java
import java.io.File;

public class Demo {
    public static void main (String[] args) {

        File f = new File ("H:\\untitled4\\java.txt");
//        public boolean isDirectory()：测试此抽象路径名表示的File是否为目录
        System.out.println (f.isDirectory ());
//        public boolean isFile()：测试此抽象路径名表示的File是否为文件
        System.out.println (f.isFile ());
//        public boolean exists()：测试此抽象路径名表示的File是否存在
        System.out.println (f.exists ());
//        public String getAbsolutePath()：返回此抽象路径名的绝对路径名字字符串
        System.out.println (f.getAbsolutePath ());
//        public String getPath()：将此抽象路径名转换为路径名字字符串
        System.out.println (f.getPath ());
//        public String getName()：返回由此抽象路径名表示文件或目录的名称
        System.out.println (f.getName ());
        System.out.println ("-----------");
//        public String[] list()：返回此抽象路径名表示文件的目录中的文件和目录的字符串数组
//        public File[] listFiles()：返回此抽象路径名表示的目录中的文件和目录的File对象数组
        File f2 = new File ("H:\\untitled4");

        String[] strArray = f2.list ();
        for(String str : strArray){
            System.out.println (str);
        }

        System.out.println ("---------");
        File[] fileArray = f2.listFiles ();
        for(File file : fileArray){
            if(file.isFile ()){
                System.out.println (file.getName ());
            }
        }

    }
}
```

## File类的删除功能

public boolean detele() 删除由此抽象路径名表示的目录或者文件

绝对路径：完整的路径名，不需要其它信息就可以定位它所表示的文件，例如：C:\\JAVA\JAVA.TXT

相对路径：不完整的路径名，必须使用取自其它路径名的信息进行解释，例如：JAVA\JAVA.TXT

```java
import java.io.File;
import java.io.IOException;

public class Demo {
    public static void main (String[] args) throws IOException {
        File f1 = new File ("src\\Java.txt");
        System.out.println (f1.createNewFile ());

        System.out.println (f1.delete ());
    }
}
```

## File删除的注意事项

如果一个目录中由内容（目录，文件），不能直接删除，应该先删除内容最后删除目录

## 递归

递归概述：以编程角度来看，递归指的是方法定义中调用方法的本身

递归解决问题思路：

把一个复杂的问题层层转化成一个与原问题相似的规模较小的问题来求解

递归策略只需少量的程序就可以描述出解题过程中需要多少次重复计算

递归解决问题要找到两个内容：

- 递归出口：否则会出现内存溢出
- 递归规则：与原问题相似的规模较小的问题

```java
public class Demo {
    public static void main (String[] args) {
        //调用方法
        int score = jc (5);
        //输出结构
        System.out.println ("5的阶层是"+score);
    }
    //定义一个方法，用于递归求阶层，参数作为一个int类型的变量
        //方法内部判断该变量是否为1
    public static int jc(int n){
        if(n==1){
            return 1;
        }
        else {
            return n*jc(n-1);
        }
    }

}

```

# IO流

## IO流概述

- IO：输入 / 输出 (Input/Output)
- 流：是一种抽象概念，对数据传输的总称，也就是说数据在设备间的传输称为流，流的本质是数据传输
- IO流是用来处理设备间数据传输的问题
  - 常见的应用：文件复制，文件上传，文件下载

## IO流分类

- 按照数据的流向
  - 输入流：读数据
  - 输出流：写数据
- 按照数据类型来分
  - 字节流：字节输入流；字节输出流
  - 字符流：字符输入流；字符输出流

一般来说，IO流的分类是根据数据类型来分的

- 如果数据通过Windows自带的TXT打开，能看的懂，就用字符流
- 否则使用字节流。

## 字节流写数据

- InputStream：这个抽象类是表示字节输入流所有类的超类
- OutputStream：这个抽象类是表示字节输出流所有类的超类
- 子类名特点：子类名称都是以其父类名作为子类名的后缀

FileOutputStream：文件输出流将数据写入File

- FileOutputStream(String name)：创建文件输出流以指定的名称写入文件

使用字节输出流写数据的步骤

- 创建字节输出对象（调用系统功能创建了文件夹，创建字节输出流对象，让字节输出流对象指向文件）
- 调用字节输出流对象的写数据方法
- 释放资源（关闭此文件输出流并释放与此流相关的任何系统资源）

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class Demo {
    public Demo() {
    }

    public static void main(String[] args) throws IOException {
        FileOutputStream fos = new FileOutputStream("H:\\untitled4\\fox.txt");
        fos.write(97);
        fos.close();
    }
}
```

## 字节流写数据的三种方式

void write(int b)：将指定的字节写入此文件输出流，一次写一个字节数据

void write(byte[] b)：将b.length字节从指定的字节数组写入此文件输出流，一次写一个字节数组数据

void write(byte[] b,int off,int len)：将len字节从指定的字节数组开始，从偏移量off开始写入此文件输出流，一次写一个字节数组的部分数据

```java
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class Demo {
    public static void main (String[] args) throws IOException {
        FileOutputStream fos = new FileOutputStream ("H:\\untitled4\\javase.txt");
        fos.write (97);
//        byte[] bys = {1,2,3,4,5};
        byte[] bys ="abcde".getBytes();
        fos.write (bys);
        fos.write (bys,0,bys.length);
        
        fos.close ();
    }
}
```

## 字节流写数据的换行和追加写入

- 写完数据后，加换行符
  - widows:\r\n
  - linux:\n
  - mac:\r
- 追加写入
  - public FileOutputStream(String name,boolean append)
  - 创建文件输出流以指定的名称写入文件，如果第二个参数为true，则字节将写入文件的末尾而不是开头

```java
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class Demo {
    public static void main (String[] args) throws IOException {
        FileOutputStream fos = new FileOutputStream ("H:\\untitled4\\javase.txt",true);

        for(int i = 0;i < 10; i++){
            fos.write("hello".getBytes());
            fos.write ("\r\n".getBytes());
        }

        fos.close ();
    }
}
```

## 字节流写数据加异常处理

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class Demo {
    public static void main (String[] args) {
        FileOutputStream fos = null;
        try {
            fos = new FileOutputStream ("H:\\untitled4\\javase.txt" ,true);
            fos.write ("hello".getBytes ());
        }catch (IOException e){
            e.printStackTrace ();
        }finally {
            if(fos!=null){
                try {
                    fos.close ();
                }catch (IOException e) {
                    e.printStackTrace ();
                }
            }
        }
    }
}
```

## 字节流读取数据（一次读一个字节数据）

把fos.txt中的内容输出在控制台

- FileInputStream(String name)：通过打开与实际文件的链接来创建一个FileInputStream，该文件由文件系统中的路径名name命名

```java
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Demo {
    public static void main (String[] args) throws IOException {
        FileInputStream fis = new FileInputStream ("H:\\untitled4\\javase.txt");

//        int read = fis.read ();
//        System.out.println (read);
//        System.out.println ((char)read);
//
//        read = fis.read ();
//        System.out.println (read);
//        System.out.println ((char)read);
//
//        read = fis.read ();
//        System.out.println (read);
//        System.out.println ((char)read);
//
//        read = fis.read ();
//        System.out.println (read);
//        System.out.println ((char)read);

//        int by = fis.read ();
//        while(by!=-1){
//            System.out.println ((char) by);
//            by = fis.read ();
//        }
        //优化
        int by;
        while((by= fis.read ())!=-1){
            System.out.println ((char)by);
        }

        fis.close ();
    }
}
```

## 字节流读取数据（一次读一个字节数组）

```java
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Demo {
    public static void main (String[] args) throws IOException {
        FileInputStream fis = new FileInputStream ("H:\\untitled4\\javase.txt");
        byte[] bys = new byte[1024];

        int len;
        while((len=fis.read (bys))!=-1){
            System.out.println (new String (bys,0,len));
        }

        fis.close ();
    }
}
```



## 字节缓冲流

- BufferOutputStream：该类实现缓冲输出流，通过设置这样的输出流，应用程序可以向底层输出流写入字节，而不必为写入的每个字节导致底层系统的调用
- BufferedInputStream：创建BufferedInputStream将创建一个内部缓冲区数组。当从流中读取或跳过字节时，内部缓冲区将根据需要从所包含的输入流中重新填充，一次很多字节

构造方法：

- 字节缓冲输出流：BufferedOutputStream(OutputStream out)
- 字节缓冲输入流：BufferedInputStream(InputStream in)

- 字节缓冲流仅仅提供缓冲区，而真正读写数据还得依靠基本的字节流对象进行操作

```java
import java.io.*;
import java.nio.charset.StandardCharsets;

public class Demo {
    public static void main (String[] args) throws IOException {
//        //字节缓冲输出流：BufferedOutputStream(OutputStream out)
//
////        FileOutputStream fos = new FileOutputStream ("H:\\untitled4\\javase.txt");
////        BufferedOutputStream bos = new BufferedOutputStream (fos);
//        //合成为1步
//        BufferedOutputStream bos = new BufferedOutputStream (new FileOutputStream ("H:\\\\untitled4\\\\javase.txt"));
//        //写数据
//        bos.write ("hello\r\n".getBytes());
//        bos.write ("hello\r\n".getBytes());
//
//        bos.close ();
//


        //字节缓冲输入流：BufferedInputStream(InputStream in)
        BufferedInputStream bis = new BufferedInputStream (new FileInputStream ("H:\\untitled4\\javase.txt"));
        //一次读取一个字节数据
//        int by;
//        while((by=bis.read ())!=-1){
//            System.out.println (by);
//        }

        //一次读取一个字节数组的数据
        byte[] bys = new byte[1024];
        int len;
        while((len=bis.read (bys))!=-1){
            System.out.println (new String (bys,0,len));
        }

        bis.close ();
    }
}
```

# 字符流

## 为什么出现字符流

由于字节流操作中文不方便，所以Java提供字符流

- 字符流 = 字节流+编码表

用字节流复制文本文件时，文件也会有中文，原因是最终底层操作会自动进行字节拼接成中文。

- 汉字在存储时，无论选择哪种编码存储，第一个字节都是负数

## 编码表

- 计算机中储存的信息是由二进制（Bin）表示。
- 按照某种规则，将字符储存到计算机中，称为编码，反之，将储存在计算机中的二进制数按照某种规则解析显示出来，称为解码。按照X编码存储，必须按照X编码解析，这样才能显示正确的文本符号。否则就乱码。

## 字符集

- 是一个系统支持的所有字符集合，包括所有国家文字，符号。
- 计算机要准确的存储识别各种字符集符号，就需要进行字符解码，一套字符集必然有一套字符编码。
  - 常见字符集有ASCII、GBXXX、Unicode等
- ASCII（American Standard Code for Information Interchange，美国信息交换标准编码）：基于拉丁字母一套编码系统，用于显示现代英语，主要包括控制字符（回车键、退格、换行）和可显示字符（英文大小写字符，阿拉伯数字，西文符号）
- 基本的ASCII字符集，使用7位表示一个字符，共128字符。ASCII的扩展字符集使用8位表示一个字符，共256字符，方便支持欧洲常用字符。是一个系统支持的所有字符的集合，包括各个国家文字，标点符号，图形符号，数字等
- GBXXX字符集（中文的。。。不想写了，手断了）
- Unicode字符集
- 标准万国码，最常用UTF-8。其它不需要知道了。因为太长了，懒得打字。

## 字符串中的编码解码问题

编码

- byte[] getBytes()：使用平台的默认字符集将该String编码为一系列字节，将结果存储的字节数组中
- byte[] getBytes(String charsetName)：使用指定的字符集将该String编码为一系列字节，将结果存储到新的字节数组中。



解码

- String(byte[] bytes)：通过使用平台的默认字符集解码指定的字节数组来构造新的String
- String(byte[] bytes,String charsetName)：通过指定的字符集解码指定的字节数组来构造新的String

```java
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class StringDemo {
    public static void main (String[] args) throws UnsupportedEncodingException {
        String s = "中国";
        //byte[] getBytes()：使用平台的默认字符集将该String编码为一系列字节，将结果存储的字节数组中
        byte[] bys = s.getBytes ();
        System.out.println (Arrays.toString (bys));//[-28, -72, -83, -27, -101, -67]
        //byte[] getBytes(String charsetName)：使用指定的字符集将该String编码为一系列字节，将结果存储到新的字节数组中。
        byte[] bytes = s.getBytes (StandardCharsets.UTF_8);
        byte[] bytes1 = s.getBytes ("GBK");
        System.out.println (Arrays.toString (bytes));//[-28, -72, -83, -27, -101, -67]
        System.out.println (Arrays.toString (bytes1));//[-42, -48, -71, -6]


        System.out.println ("-------------------");
        //String(byte[] bytes)：通过使用平台的默认字符集解码指定的字节数组来构造新的String
        String ss = new String (bys);
        System.out.println (ss);//中国，默认字符集

        //String(byte[] bytes,String charsetName)：通过指定的字符集解码指定的字节数组来构造新的String
        String sss = new String (bys,"UTF-8");//中国
        String ssss = new String (bys,"GBK");//涓浗,因为编码是UTF-8，解码是GBK
        String sssss = new String (bytes1,"GBK");//中国，编码是GBK,解码是GBK

        System.out.println (sss);
        System.out.println (ssss);
        System.out.println (sssss);



    }
}
```

## 字符流中的编码解码问题

字符流抽象基类

- Reader：字符输入流的抽象类
- Writer：字符输出流的抽象类

字符流中的编码解码问题相关的两个类

- InputStreamReader
- OutputStreamWriter

```java
import java.io.*;

public class Demo {
    public static void main (String[] args) throws IOException {
//        FileOutputStream fos = new FileOutputStream ("untitled\\javase.txt");
//        OutputStreamWriter osw = new OutputStreamWriter (fos);
        //合并为一部

//        OutputStreamWriter osw = new OutputStreamWriter (new FileOutputStream ("H:\\untitled4\\javase.txt"),"UTF-8");//中国
        OutputStreamWriter osw = new OutputStreamWriter (new FileOutputStream ("H:\\untitled4\\javase.txt"),"GBK");//�й�
        osw.write ("中国");
        osw.close ();
        InputStreamReader isr = new InputStreamReader (new FileInputStream ("H:\\untitled4\\javase.txt"),"GBK");
        //一次读一个字符
        int ch;
        while((ch=isr.read ())!=-1){
            System.out.print ((char)ch);
        }
        isr.close ();
    }
}
```

## 字符流写数据的5个方式

- void write(int c) 写一个字符

- void write(char[] cbuf) 写入一个字符数组

- void write(char[] cbuf,int off,int len) 写入字符数组的一部分

- void write(String str)写入一个字符串

- void write(String str,int off,int len)写入一个字符串的一部分

- flush() 刷新流，还可以继续写数据

- close() 关闭流，释放资源，但是在关闭之前会刷新流一次，一旦关闭就不能写数据

  ```java
  import java.io.FileNotFoundException;
  import java.io.FileOutputStream;
  import java.io.IOException;
  import java.io.OutputStreamWriter;
  
  public class Demo {
      public static void main (String[] args) throws IOException {
          OutputStreamWriter osw = new OutputStreamWriter (new FileOutputStream ("H:\\untitled4\\javase.txt"));
  
          //void write(int c) 写一个字符
          osw.write (97);
          //void flush()刷新流
          osw.flush ();
          osw.write (98);
          osw.flush ();
          osw.write (99);
  
          //void write(char[] cbuf) 写入一个字符数组
          char[] chs = {'a','b','c'};
          osw.write (chs);
  
  //        void write(char[] cbuf,int off,int len) 写入字符数组的一部分
  //        osw.write (chs,0,chs.length);
  
  //        void write(String str)写入一个字符串
          osw.write ("abcde");
  //        void write(String str,int off,int len)写入一个字符串的一部分
          osw.write ("1234567",0,7);
          osw.write ("abcdef",0,"abcdef".length ());
          osw.close ();
  
      }
  }
  ```

## 字节流读数据的2个方式

- int read() 一次读一个字符数据
- int read(char[] cbuf) 一次读一个字符数组数据

```java
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;

public class Demo {
    public static void main (String[] args) throws IOException {
        InputStreamReader isr = new InputStreamReader (new FileInputStream ("H:\\untitled4\\javase.txt"));

        //int read() 一次读一个字符数据
        int ch;
        while((ch=isr.read ())!=-1){
            System.out.print ((char)ch);
        }

        //int read(char[] cbuf) 一次读一个字符数组数据
        char[] chs = new char[1024];
        int len;
        while((len=isr.read (chs))!=-1){
            System.out.print (new String (chs,0,len));
        }
        isr.close ();
    }
}
```

# 字节缓冲流

## 字符缓冲流

- BufferedWriter：将文本写入字符输出流，缓冲字符，以提供单个字符，数组，字符串的高效写入，可以指定缓冲区大小，或者可以接受默认大小。默认值足够大，可以用于大多数用途。
- BufferedReader：从字符输出流读取文本，缓冲字符，以提供字符，数组和行的高效读取，可以指定缓冲区大小，或者可以使用默认大小。默认值足够大，可以用于大多数用途。

构造方法

- BufferedWriter(Writer out)
- BufferedReader(Reader in)

```java
import java.io.*;

public class Demo {
    public static void main (String[] args) throws IOException {
        //BufferedWriter(Writer out)
//        FileWriter fw = new FileWriter ("H:\\untitled4\\javase.txt");
//        BufferedWriter bw = new BufferedWriter (fw);
//        BufferedWriter bw = new BufferedWriter (new FileWriter ("H:\\untitled4\\javase.txt"));
//        bw.write ("HELLO\r\n");
//        bw.write ("world\r\n");
//        bw.close ();

//        BufferedReader(Reader in)
        BufferedReader br = new BufferedReader (new FileReader ("H:\\untitled4\\javase.txt"));

        //一次读一个字符数据
//        int ch;
//        while ((ch = br.read ())!=-1){
//            System.out.print ((char)ch);
//        };
//        br.close ();
        //一次读取一个字符数组数据
        char[] chs = new char[1024];
        int len;
        while((len= br.read (chs))!=-1){
            System.out.println (new String(chs,0,len));
        }
    }
}
```

## 字符缓冲流特有功能

BufferedWriter:

- void newLine()：写一行行分隔符，行分隔符字符串由系统属性定义

BufferedReader:

- public String readLine()：读一行文字，结果包含行的内容字符串，不包括任何终止字符，如果流的结尾已经到达，则为NULL

```java
import java.io.*;

public class Demo {
    public static void main (String[] args) throws IOException {
//        //创建字符缓冲输出流
//        BufferedWriter bw = new BufferedWriter (new FileWriter ("H:\\untitled4\\javase.txt"));
//
//        //写数据
//        for (int i = 0;i<10;i++){
//            bw.write ("hello"+i);
////            bw.write ("\r\n");
//            bw.newLine ();
//            bw.flush ();
//        }
//
//        bw.close ();

        //创建字符输出流
        BufferedReader br = new BufferedReader (new FileReader ("H:\\untitled4\\javase.txt"));

        //public String readLine()：读一行文字，结果包含行的内容字符串，不包括任何终止字符，如果流的结尾已经到达，则为NULL

        //第一次读取数据
        String line = br.readLine ();
        System.out.println (line);//hello 0

        //第二次读取数据
        line = br.readLine ();
        System.out.println (line);// hello 1

        String lines;
        while((lines=br.readLine ())!=null){
            System.out.print (lines);
        }
        br.close ();
    }
}
```

## 复制文件的异常处理 JDK7和JDK9和Try Catch

```java
import javax.imageio.IIOException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Demo {
    public static void main (String[] args) {

    }

    //JDK9
    private static void JDK9() throws IOException{
        FileReader fr = new FileReader ("javase.txt");
        FileWriter fw = new FileWriter ("javase.txt");
        try(fr;fw){
            char[] chs = new char[1024];
            int len;
            while((len=fr.read ())!=-1){
                fw.write (chs,0,len);
            }
        } catch (IOException e) {
            e.printStackTrace ();
        }
        //不用写close，jdk7以后会自动释放资源
    }
    //JDK7
    private static void JDK7(){
        try(FileReader fr = new FileReader ("javase.txt");
            FileWriter fw = new FileWriter ("javase.txt");){

            char[] chs = new char[1024];
            int len;
            while((len=fr.read ())!=-1){
                fw.write (chs,0,len);
            }
        } catch (IOException e) {
            e.printStackTrace ();
        }
        //不用写close，jdk7以后会自动释放资源
    }

    //try catch
    private static void TRYCATCH(){
        FileReader fr = null;
        FileWriter fw = null;
        try {
            fw = new FileWriter ("javase.txt");
            fr = new FileReader ("javase.txt");

            char[] chs = new char[1024];
            int len;

            while((len = fr.read ())!=-1){
                fw.write (chs,0,len);
            }

        }catch (IOException e){
            e.printStackTrace ();
        }finally {
            if(fw!=null){
                try {
                    fr.close ();
                } catch (IOException e){
                    e.printStackTrace ();
                }

            }
            if(fr!=null){
                try {
                    fr.close ();
                } catch (IOException e){
                    e.printStackTrace ();
                }
            }
        }
    }
}
```

# 特殊操作流

## 标准输入

System类中有两个静态的成员变量

- public static final InputStream in：标准输入流。通常该流对应于键盘输入或由主机环境或用户指定的另一个输入源
- public static final PrintStream ：标准输出流。通常该流对应于显示输出或由主机环境或用户指定的另一个输出目标

自己实现键盘录入数据

```java
BufferedReader br = new BufferedReader (new InputStreamReader (System.in));
```

所以使用万能的Scanner

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Demo {
    public static void main (String[] args) throws IOException {
        //public static final InputStream in：标准输入流。通常该流对应于键盘输入或由主机环境或用户指定的另一个输入源
//        InputStream in = System.in;
////        int by;
////        while((by=in.read ())!=-1){
////            System.out.println ((char)by);
////        }
//
//        //如何把字节流转化为字符流
//        InputStreamReader isr = new InputStreamReader (in);
//
//        //使用字符流实现一次读取一行数据
//        //但是一次读取一行数据的方法是字符缓冲输入流的特有方法
//        BufferedReader br =new BufferedReader (isr);

        //合成为1步
        BufferedReader br = new BufferedReader (new InputStreamReader (System.in));
        System.out.println ("请输入一个字符串");
        String s = br.readLine ();
        System.out.println ("字符串是"+s);

        System.out.println ("请输入一个数");
        int i = Integer.parseInt (br.readLine ());
        System.out.println ("您输入的整数是"+i);

        //自己实现键盘录入数据太麻烦，所以有一个万能的Scanner
        Scanner sc = new Scanner (System.in);

    }
}
```

## 标准输出流

输出语句的本质，是一个标准的输出流

- PrintStream ps = System.out

- PrintStream类有的方法，System.out都能用

- ```java
  import java.io.PrintStream;
  
  public class Demo {
      public static void main (String[] args) {
          //public static final PrintStream out标准输出流
          PrintStream ps = System.out;
  
          ps.println ("hello");
          ps.println (100);
  
          //System.out本质是一个字节输出流
          System.out.println ("hello");
          System.out.println (100);
      }
  }
  ```

## 字节打印流

- 打印流分为：

  - 字节打印流：PrintStream
  - 字符打印流：PrintWriter

- 打印流的特点：

  - 只负责输出数据，不负责读取数据
  - 有自己的特殊方法

- 字节打印流

  - PrintStream(String fileName）：使用指定的文件名创建新的打印流
  - 使用继承父类的方法写数据，查看的时候会转码；使用自己的特有方法写数据，查看的数据原样输出

  ```java
  import java.io.FileNotFoundException;
  import java.io.PrintStream;
  
  public class Demo {
      public static void main (String[] args) throws FileNotFoundException {
          PrintStream ps = new PrintStream ("H:\\untitled4\\javase.txt");
  
          //写数据
          ps.write (97);//a
  
          //特有方法写数据
          ps.print(97);//97
          ps.close ();
      }
  }
  ```

## 字符打印流

字符打印流PrintWriter的构造方法：

- PrintWriter（String fileName）使用指定的文件名创建一个新的PrintWriter，而不需要自动执行刷新
- PrintWriter（Wirter out，boolean autoFlush）
  - 创建一个新的PrintWriter
  - out：字符输出流
    - autoFlush：一个布尔值，如果为真，则为println,printf或者format方法将方法刷新输出缓冲区

```java
import java.io.*;

public class Demo {
    public static void main (String[] args) throws IOException {
//        PrintWriter pw = new PrintWriter ("H:\\untitled4\\java.txt");
//        pw.print (1);
//        pw.println (2);
//        pw.flush ();

        PrintWriter pw = new PrintWriter (new FileWriter ("H:\\untitled4\\java.txt"),true);
        pw.println ("hello");
        pw.println ("hello");
        pw.println ("hello");
        pw.close ();

    }
}
```

## 对象序列化流

对象序列化：就是将对象保存到磁盘中，或者在网络中传输对象

这种机制就是使用一个字节序列表示一个对象，该字节序列包括：对象的类型，对象的数据和对象中存储的属性等信息字节序列写到文件之后，相当于文件中持久保存了一个对象的信息。

反之，该字节序列还可以从文件夹读取回来，重构对象，对它进行反序列化

- 对象序列化流：ObjectOutputStream
- 对象反序列化流：ObjectInputStream

## ObjectOutputStream

- 将Java对象的原始数据类型和图形写入OutputStream。可以使用ObjectInputStream读取（重构）对象。可以通过使用流的文件来实现对象的持久存储，如果对象

- 构造方法

  - OjbectOutputStream（OutputStream out）：创建一个写入指定的OutputStream的ObjectOutputStream

- 序列化对象的方法

  - void writeObject(Object obj)：将指定的对象写入ObjectOutputStream

- 注意

  - 一个对象想要被实例化，该对象所属的类必须实现Serializable接口
  - Serializable是一个标记接口，不需要重写

  ```java
  import java.io.Serializable;
  
  public class Student implements Serializable {
      private String name;
      private int age;
  
      public Student (String name ,int age) {
          this.name = name;
          this.age = age;
      }
  
      public String getName () {
          return name;
      }
  
      public void setName (String name) {
          this.name = name;
      }
  
      public int getAge () {
          return age;
      }
  
      public void setAge (int age) {
          this.age = age;
      }
  }
  
  import java.io.FileNotFoundException;
  import java.io.FileOutputStream;
  import java.io.IOException;
  import java.io.ObjectOutputStream;
  
  public class Demo {
      public static void main (String[] args) throws IOException {
          ObjectOutputStream oos = new ObjectOutputStream (new FileOutputStream ("H:\\untitled4\\javase.txt"));
          Student s = new Student ("马牛逼",19);
          oos.writeObject (s);
          oos.close ();
      }
  }
  
  ```

## ObjectInputStream

对象反序列化流：ObjectInputStream

- OjbectInputStream反序列化先前使用ObjectOutputStream编写的原始数据和对象

构造方法：

- ObjectInputStream（InputStream in）：创建从指定的InputStream读取的ObjectInputStream

反序列化对象的方法：

- Object readObject()：从ObjectInputStream读取一个对象

```java
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;

public class Demo  {
    public static void main (String[] args) throws IOException, ClassNotFoundException {
        //ObjectInputStream（InputStream in）：创建从指定的InputStream读取的ObjectInputStream
        ObjectInputStream ois =new ObjectInputStream (new FileInputStream ("javase.txt"));
        //Object readObject()：从ObjectInputStream读取一个对象
        Object o = ois.readObject ();
        Student s = (Student) o;

        System.out.println (s.getName ()+","+s.getAge ());
        ois.close ();

    }
}
```

## serivalVersionUID &  transient

用对象序列化列化了一个对象后，假如修改了对象所属的类文件后。读取数据会出问题

- 抛出InvalidClassException

- 给对象所属的类加一个serialVersionUID
  - private static final long serialVersionUID = 42L;

如果对象中的某个值不想被序列化，

- 给该成员变量加transient关键字修饰，该关键字标记的成员不会参与序列化过程

## Properties作为Map集合的使用

- 是一个Map体系的集合类

- Properties可以保存到流中或者从流中加载

  

- Object setProperty(String key,String value) 设置集合的Key和Value，都是String类型，底层调用Hashtable方法 put
- String getProperty(String key) 使用此属性列表中的Key搜索属性
- Set<String> stringPropertyNames() 从该属性列表中返回一个不可修改的Key集，其中Key及其对应的值是字符串

```java
import java.util.Properties;
import java.util.Set;

public class Demo {
    public static void main (String[] args) {
        //创建集合对象
        Properties prop = new Properties ();
//        Object setProperty(String key,String value) 设置集合的Key和Value，都是String类型，底层调用Hashtable方法 put
        prop.setProperty ("1","11");
        prop.setProperty ("2","22");
        prop.setProperty ("3","33");

//        String getProperty(String key) 使用此属性列表中的Key搜索属性
        System.out.println (prop.getProperty ("1"));

//        Set<String> stringPropertyNames() 从该属性列表中返回一个不可修改的Key集，其中Key及其对应的值是字符串
        Set<String> nums = prop.stringPropertyNames ();
        for(String key : nums){
//            System.out.println (key);获得key
            String value = prop.getProperty (key);
            System.out.println (value);//获得value
        }

    }
}
```

## Properties和IO流结合方法

- void load(InputStream inStream) 从输入字节流读取属性列表（Key和Value对）
- void load(Reader reader) 从输入字符流读取属性列表（Key和Value对）
- void store(OutputStream out,String comments) 将此属性列表（Key和Value对）写入此Properties表中，以适合于使用load（InputStream）方法的格式写入输出字节流。
- void store(Writer writer,String comments) 将此属性列表（Key和Value对）写入此Properties标中，以适合使用load（Reader）方法的格式写入输出字符流

```java
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Properties;

public class Demo {
    public static void main (String[] args) throws IOException {
        //把集合中的数据保存到文件
        myStore();

        //把文件中的数据加载到集合
        myLoad();
    }

    private static void myLoad () throws IOException {
        Properties prop = new Properties ();
//        void load(Reader reader) 从输入字符流读取属性列表（Key和Value对）
        FileReader fr = new FileReader ("javase.txt");
        prop.load (fr);
        fr.close ();

        System.out.println (prop);
    }
    private static void myStore () throws IOException {
        Properties prop = new Properties ();
        prop.setProperty ("1","a");
        prop.setProperty ("2","b");
        prop.setProperty ("3","c");

//        void store(Writer writer,String comments) 将此属性列表（Key和Value对）写入此Properties标中，以适合使用load（Reader）方法的格式写入输出字符流
        FileWriter fw = new FileWriter ("javase.txt");
        prop.store (fw,null);
        fw.close ();
    }
}
```

# 实现多线程

## 进程

进程：是正在运行的程序

- 是系统进行资源分配和调用的独立单位
- 每一个进程都有它自己的内存空间和系统资源

## 线程

线程：是进程中的单个顺序控制流，是一条执行路径

- 单线程：一个进程如果只有一条执行路径，则称为单线程程序
- 多线程：一个进程如果有多条执行路径，则称为多线程程序

## 多线程的实现方式

方式1：继承Thread类

- 定义一个MyThread继承Thread类
- 在MyThread类中重写run方法
- 创建MyThread类的对象
- 启动线程

两个问题

- 为什么重写run方法
  - 因为run（）是用来封装被线程执行的代码
- run（）和start（）方式的区别
  - run（）：封装线程执行的代码，直接调用，相当于普通方法的调用
  - start（）：启动线程；由JVM调用此线程的Run方法

```java
public class MyThread extends Thread{
    @Override
    public void run () {
        for(int i = 0;i <1000;i++){
            System.out.println (i);
        }
    }
}
public class Demo {
    public static void main (String[] args) {
        MyThread mt1 = new MyThread ();
        MyThread mt2 = new MyThread ();

//        mt1.run ();
//        mt2.run ();

        //void start() 导致此线程开始执行，Java虚拟机调用此run方法
        mt1.start ();
        mt2.start ();
    }
}
```

## 设置和获取线程名称

Thread类中设置和获取线程名称的方法

- void setName（String name）：将此线程的名称更改为等于参数name
- String getName（）：返回此线程的名称

如果获取main（）方法所在的线程名称

- public static Thread currentThread（）：返回对当前正在执行的线程对象的引用

```java
public class MyThread extends Thread{

    public MyThread() {};

    public MyThread(String name){//重写
        super(name);
    }
    @Override
    public void run () {
        for(int i = 0;i <1000;i++){
            System.out.println (getName()+":"+i);
        }
    }
}
public class Demo {
    public static void main (String[] args) {
//        MyThread mt1 = new MyThread ();
//        MyThread mt2 = new MyThread ();
//
//        //void setName(String name)：将此线程的名称更改为等于参数name
//        mt1.setName ("飞机");
//        mt1.setName ("高铁");
//        mt1.start ();
//        mt2.start ();

        //static Thread currentThread() 返回对当前正在执行的线程对象的引用
        System.out.println (Thread.currentThread().getName ());//输出main，是main线程
    }
}
```

## 线程调度

线程有两种调度模型

- 分时调度模型：所有线程轮流使用CPU的使用权，平均分配每个线程占用CPU的时间片
- 抢占式调度模型：优先让优先级高的线程使用CPU，如果线程的优先级相同，那么会随机选择一个，优先级高的线程获取的CPU时间片相对多一些

Java使用的是抢占式调度模型

假如计算机只有一个CPU，那么CPU在某一个时刻只能执行一条指令，线程只有得到CPU的时间片，也就是使用权，才可以执行命令。所以说多线程程序的执行是有随机性的，因为谁先抢到CPU的使用权是不一定的

Thread类中设置和获取线程优先级方法

- public final int getPriority() ：返回此线程的优先级
- public final void setPrioity(int newPriorty) ：更改此线程的优先级

线程默认优先级是5；线程优先级的范围是1-10；

线程优先级高仅仅代表线程获取的CPU时间片的几率高，但是要在次数比较多，或者多次运行的时候才能看出来效果

```java
public class Demo {
    public static void main (String[] args) {
        MyThread mt1 = new MyThread ();
        MyThread mt2 = new MyThread ();
        MyThread mt3 = new MyThread ();

        mt1.setName ("高铁");
        mt2.setName ("飞机");
        mt3.setName ("汽车");

        //public final int getPriority() ：返回此线程的优先级
//        System.out.println (mt1.getPriority ());//5
//        System.out.println (mt2.getPriority ());//5
//        System.out.println (mt3.getPriority ());//5
        //线程默认优先级是5

        //public final void setPrioity(int newPriorty) ：更改此线程的优先级
//        mt1.setPriority (10000);异常
//        System.out.println (Thread.MAX_PRIORITY);//默认是10
//        System.out.println (Thread.MIN_PRIORITY);//默认是1
//        System.out.println (Thread.NORM_PRIORITY);//默认是5

        //设置正确的优先级
        mt1.setPriority (5);
        mt2.setPriority (10);
        mt3.setPriority (1);

        mt1.start ();
        mt2.start ();
        mt3.start ();
    }
}
```

## 线程控制

static void sleep（long millis）使当前正在执行的线程停留（暂停执行）指定的毫秒数

void join（）等待这个线程死亡

void setDeamon（boolean on）将此线程标记为守护线程，当运行的线程都是守护线程时，Java虚拟机（JVM）将退出

```java
public class ThreadSleep extends Thread{
    @Override
    public void run () {
        for( int i = 0;i<100;i++){
            System.out.println (getName ()+","+i);
            try {
                Thread.sleep (1000);
            } catch (InterruptedException e) {
                e.printStackTrace ();
            }
        }
    }
}

public class ThreadSleepDemo {
    public static void main (String[] args) {
        ThreadSleep ts1 = new ThreadSleep ();
        ThreadSleep ts2 = new ThreadSleep ();
        ThreadSleep ts3 = new ThreadSleep ();

        ts1.setName ("线程1");
        ts2.setName ("线程2");
        ts3.setName ("线程3");

        ts1.start ();
        ts2.start ();
        ts3.start ();
    }
}

public class ThreadJoinDemo {
    public static void main (String[] args) {
        ThreadJoin tj1 = new ThreadJoin ();
        ThreadJoin tj2 = new ThreadJoin ();
        ThreadJoin tj3 = new ThreadJoin ();

        tj1.setName ("线程1");
        tj2.setName ("线程2");
        tj3.setName ("线程3");

        tj1.start ();
        try {
            tj1.join ();
        } catch (InterruptedException e) {
            e.printStackTrace ();
        }
        tj2.start ();
        tj3.start ();
    }
}

public class ThreadDeamonDemo{
    public static void main (String[] args) {
        ThreadDeamon td1 = new ThreadDeamon ();
        ThreadDeamon td2 = new ThreadDeamon ();
        ThreadDeamon td3 = new ThreadDeamon ();

        td1.setName ("线程1");
        td2.setName ("线程2");
        td3.setName ("线程3");

        //设置主线程为线程1
        Thread.currentThread ().setName ("线程1");

        //设置守护线程
        td1.setDaemon (true);
        td2.setDaemon (true);

        td1.start ();
        td2.start ();
        td3.start ();

        for(int i  = 0;i<10;i++){
            System.out.println (Thread.currentThread ().getName ()+","+i);
        }

    }
}

```

## 实现Runnable接口的方式

- 定义一个类MyRunnable实现Runnable接口
- 在MyRunnable类中重写run（）方法
- 创建MyRunnable
- 创建Thread类的对象，把MyRunnable对象作为构造方法的参数
- 启动线程

多线程的实现方案的两种

- 继承Thread类
- 实现Runnble接口

相比继承Thread类，实现Runnable接口的好处

- 避免了Java的单继承局限性
- 适合多个相同程序的代码去处理同一个资源的情况，把线程和程序的代码，数据有效分离，较好的体现了面向对象的设计思想

```java
public class MyRunnable implements Runnable{

    @Override
    public void run () {
        for(int i = 0;i<100;i++){
            System.out.println (Thread.currentThread ().getName ()+"i"+i);
            //不能直接用getName（）方法
        }
    }
}

public class Demo {
    public static void main (String[] args) {
        MyRunnable my = new MyRunnable ();

        Thread t1 = new Thread (my,"线程1");
        Thread t2 = new Thread (my,"线程2");

        t1.start ();
        t2.start ();
    }
}

```

## 同步代码块

锁多条语句操作共享数据，可以通过使用同步代码块实现

格式

synchronized（任意对象）{

​		多条语句操作共享数据的代码

}

- 好处：解决了多线程的数据安全问题
- 弊端：线程很多的时候，效率降低。耗费资源

```java
public class SellTicket implements Runnable{
    private int ticket = 100;
    private Object obj = new Object ();

    @Override
    public void run () {
        while(true) {
            try {
                Thread.sleep (100);
            } catch (InterruptedException e) {
                e.printStackTrace ();
            }
            synchronized (obj) {
                if (ticket > 0){
                    System.out.println (Thread.currentThread ().getName () + "正在出售第" + ticket + "张票");
                    ticket--;
                }
            }
        }
    }
}

public class SellTicketDemo {
    public static void main (String[] args) {
        SellTicket st = new SellTicket ();
        Thread t1 = new Thread (st,"窗口1");
        Thread t2 = new Thread (st,"窗口2");
        Thread t3 = new Thread (st,"窗口3");
        t1.start ();
        t2.start ();
        t3.start ();
    }
}

```

## 同步方法

同步方法就是把synchronized加到方法上

- 格式：

修饰符synchronized返回值类型 方法名 （方法参数）{  }

```java
private void sellTicket () {
    try {
        Thread.sleep (100);
    } catch (InterruptedException e) {
        e.printStackTrace ();
    }
    synchronized (obj) {
        if (ticket > 0){
            System.out.println (Thread.currentThread ().getName () + "正在出售第" + ticket + "张票");
            ticket--;
        }
    }
}
```

## 线程安全的类

StringBuffer

- 线程安全，可变的字符序列
- 从JDK5开始，被StringBuffer替代，通常应该使用StringBuffer类，因为它支持所有相同的操作。但是它更快，因为它不执行同步

Vector

- 从Java 2 平台v1.2开始，该类改进了List接口，使其成为Java Collections Framework成员。与新的集合实现不同，Vector被同步。如果不需要线程安全的实现，建议用ArrayList代替Vector

Hashtable

- 该类实现了一个哈希表，它将Key映射到Value，任何非null的对象都可以用作key和value。
- 从Java2平台v1.2开始，该类进行了改进，实现了Map接口，使其成为JavaJava Collections Framework成员。与新的集合实现不同，Hashtable被同步如果不需要线程安全的实现，建议用HashMap代替HashTable

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;

public class Demo {
    public static void main (String[] args) {
        StringBuffer sb1 = new StringBuffer ();
        StringBuilder sb2 = new StringBuilder ();

        Vector<String>v = new Vector<String> ();
        ArrayList<String> array = new ArrayList<String> ();

        Hashtable<String,String> ht = new Hashtable<String ,String> ();
        HashMap<String,String> hm = new HashMap<String ,String> ();

        
    }
}

Ctrl+b 看源代码
```

## 生产者消费者模式

一个多线程协作的经典模式。

包含了两类线程

- 一类是生产者线程用于生产数据
- 一类是消费者线程用于消费数据

为了解耦生产者和消费者的关系，通常会采用共享的数据区域，就像一个仓库

- 生产者生产数据之后直接放到共享数据区域内，并不需要关系消费者的行为
- 消费者只需要从共享数据区中获取数据，并不需要关系生产者的行为

为了体现过程中的等待和唤醒，Java提供了几个方法，在Object类中

- void wait() 导致当前线程等待，直到另一个线程调用该对象的notify()或者notifyAll()方法
- void notify() 唤醒正在等待对象监视器的单个线程
- void notyfyAll() 唤醒正在等待对象监视器的所有线程

```java
public class Producer implements Runnable{

    private Box b;

    public Producer(Box b){
        this.b=b;
    }

    @Override
    public void run () {
        for(int i = 1 ; i<= 5;i++){
            b.put (i);
        }
    }
}

public class Customer implements Runnable {

    private Box b;
    public Customer (Box b) {
        this.b=b;
    }

    @Override
    public void run () {
        while (true){
            b.get ();
        }
    }
}


public class Box {

    private int milk;

    private boolean state = false;

    public synchronized void put(int milk){

        if(state=true){
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace ();
            }
        }

        this.milk = milk;
        System.out.println ("快递小哥将"+this.milk+"瓶放入箱子");

        state=true;

        notifyAll ();//唤醒其它线程
    }

    public synchronized void get(){
        if(!state) {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace ();
            }
        }
        System.out.println ("用户拿到第"+this.milk+"瓶奶");

        state = false;

        notifyAll ();//唤醒其它线程
    }
}

public class BoxDemo {
    public static void main (String[] args) {
        Box b = new Box ();

        Producer p = new Producer (b);

        Customer c = new Customer (b);

        Thread t1 = new Thread (p);
        Thread t2 = new Thread (c);

        t1.start ();
        t2.start ();

    }
}

```

# 网络编程

## 概述

计算机网络

- 是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路链接起来，在网络操作系统，网络管理软件及其网络通信协议的管理和协商下，实现资源共享和传递的计算机系统。

网络编程

- 在网络通信协议下，实现网络互连的不同计算机上运行的程序间可以进行数据交换

## 网络编程三要素

IP地址

- 让计算机互相通信，要为每台计算机指定一个标识号，这个标识号就是IP

端口

- 每台计算机有很多程序，在网络通讯的时候，端口号是唯一表示设备中的应用程序了，也就是程序的标识

协议

- 通过计算机网络可以使用多台计算机链接，位于一个网络计算机在进行链接和通信时需要遵守的约定，这些通信这链接被称为网络通信协议，它对数据的传输格式，传输速率，传输步骤做了一定的规定。通信双方必须遵守才能完成数据交换，常见的协议有UDP协议和TCP协议



## IP地址

IP：网络中设备的唯一识别

IP地址分为两大类

- IPV4：是给每个链接在网络上的主机分配一个32bit地址，按照TCP / IP规定。IP地址用二进制来表示，每个IP地址长32bit，也就是4字节，二进制ip太sb了，所以IP地址经常被写成10进制，中间用“.”分割，上面地址可以表示为192.168.1.66. IP地址的这种表示方法叫 点分十进制表示法。
- IPV6：由于IP需求量越来越多（互联网发展太快），但是网络地址资源有限，为了扩张地址空间。通过IPv6重新定义地址空间，采用128位地址长度，每16个字节一组，分成8组十六进制数，这样就解决了网络地址资源不够的问题

## 常用命令

- ipconfig：查看本机ip
- ping IP地址：检查网络是否联通

## 特殊IP地址

- 127.0.0.1：是回送地址，可以代表本机地址，一般用来测试

## InetAddress使用

Java提供了一个类InetAddress对IP地址的获取和操作

InetAddress：此类表示Internet协议（IP）地址

- static InetAddress getByName(String host)：确定主机名称的IP地址，主机名称可以是机器名称，也可以是IP地址
- String getHostName() ：获取该IP地址的主机名
- String getHostAddress()：返回文本显示中的IP地址字符串

```java
import java.net.InetAddress;
import java.net.UnknownHostException;

public class Demo {
    public static void main (String[] args) throws UnknownHostException {
        //static InetAddress getByName(String host)：确定主机名称的IP地址，主机名称可以是机器名称，也可以是IP地址
        InetAddress address = InetAddress.getByName ("192.168.1.66");
        //- String getHostName() ：获取该IP地址的主机名
        String name = address.getHostName ();
        // - String getHostAddress()：返回文本显示中的IP地址字符串
        String ip = address.getHostAddress ();
        System.out.println (name+","+ip);
    }
}
```

# 协议

## TCP协议

- 传输控制协议（Transmission Control Protocol）
- TCP协议是面向连接的通信协议，即传输数据前，在发送端和接收端建立逻辑连接，然后再传输数据。它提供了两台计算机之间可靠无差错的数据传输，在TCP连接中必须要明确客户端和服务器端，由客户端向服务器端发出连接请求，每次连接的创建需要经过“三次握手”
- 三次握手：TCP协议中，在发送数据的准备阶段，客户端与服务器之间的三次交互，以保证连接的可靠
  - 第一次握手：客户端向服务器端发出连接请求，等待服务器确认
  - 第二次握手：服务器向客户端回送一个响应，通知客户端收到了连接请求
  - 第三次握手：客户端再次向服务器端发送确认信息，确认连接
- 完成三次握手，建立连接后，客户端和服务器端可以进行数据传输，由于这种面向连接的特性。TCP协议可以保证传输数据的安全，所以应用广泛：上传文件，下载文件，浏览网页等

## UDP通信原理

UDP协议是一种不可靠的网络协议，它在通信的两端各建立一个Socket对象，但是这两个Socket对象只是发送，接收数据的对象

因此，对于基于UDP协议通信双方而言，没有所谓的客户端和服务器的概念

Java提供了DatagramSocket类作为基于UDP协议的Socket

## UDP发送数据

发送数据的步骤

1.创建发送端Socket对象（DatagramSocket）

DatagramSocet（）

2.创建数据并且打包

DatagramPacket（byte[] buf,int length,InetAddress adress , int port）

3.调用DatagramSocket的方法发送数据

void sent(DatagramPacket dp)

4.关闭发送端

void close()

```java
import java.io.IOException;
import java.net.*;
import java.nio.charset.StandardCharsets;

public class Demo {
    public static void main (String[] args) throws IOException {
        DatagramSocket ds = new DatagramSocket ();

        byte[] bys = "hello,udp我是你爹".getBytes();
//        int length = bys.length;
//        InetAddress address = InetAddress.getByName ("192.168.1.66");
//        int port = 10086;
//        DatagramPacket dp = new DatagramPacket (bys,length,address,port);
        DatagramPacket dp = new DatagramPacket (bys,bys.length,InetAddress.getByName ("192.168.1.66"),10086);
        ds.send (dp);
        ds.close ();
    }
}
```

## UDP接收数据

1.创建接收端的Socket对象（DatagramSocket）

DatagramSocket（int port）

2.创建一个数据包，用于接收数据

DatagramPacket（byte[] buf ,int length）

3.调用DatagramSocket对象的方法接收数据

void receive (DatagramPacket p)

4.解析数据包

byte[] getData()

int getLength()

5.关闭接收端

void close()

```java
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

public class Demo {
    public static void main (String[] args) throws IOException {
        DatagramSocket ds = new DatagramSocket (10086);

        byte[] bys = new byte[1024];
        DatagramPacket dp = new DatagramPacket (bys,bys.length);

        ds.receive (dp);

//        byte[] data = dp.getData ();
//        String dateString = new String (data);
//        System.out.println ("数据是"+dateString);
        System.out.println ("数据是:"+new String(dp.getData (),0,dp.getLength ()));

        ds.close ();
    }
}
```

## TCP发送数据

TCP通信协议是一种可靠的网络协议，它在通信的两端各建立一个Socket对象，从而在通信的两端形成网络虚拟链路， 一旦建立了虚拟的网络链路，两端的程序就可以通过虚拟链路进行通信。

Java对基于TCP协议的网络提供了封装，使用Socket对象来代表两端的通信接口，并通过Socket产生IO流来进行网络通信

Java为客户端提供了Socket类，为服务器端提供了ServerSocket类

发送数据步骤

1.创建客户端的Socket对象

2.获取输出流，写数据

3.释放资源

```java
package MyPackets;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;

public class Demo {
    public static void main (String[] args) throws IOException {
//        Socket s = new Socket (InetAddress.getByName ("192.168.1.66"),10000);
        Socket s = new Socket ("192.168.1.66",10000);

        //获取输出流，写数据
        OutputStream os = s.getOutputStream ();
        os.write ("TCP我来了".getBytes ());
        s.close ();
    }
}
```

## TCP接收数据

```java
package MyPackets;

import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Demo {
    public static void main (String[] args) throws IOException {
        ServerSocket ss = new ServerSocket (10000);

        Socket s = ss.accept ();

        InputStream is = s.getInputStream ();

        byte[] bys = new byte[1024];

        int len = is.read (bys);

        String date = new String (bys,0,len);

        System.out.println ("数据是"+date);

        s.close ();
        ss.close ();


    }
}
```