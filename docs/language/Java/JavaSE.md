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
