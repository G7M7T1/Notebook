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

