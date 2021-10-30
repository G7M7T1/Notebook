---
sidebar_position: 2
sidebar_label: '反射和注解' 
---



# Junit单元测试

## 测试分类

1.黑盒测试：不需要写代码，给输入值，看程序是否能够输出期望的值

2.白盒测试：需要写代码，关注程序的具体执行流程。

## Junit使用

Junit使用：白盒测试

步骤：

1.定义一个测试类（测试用例）建议 被测试的类名＋一个Test

2.定义测试方法 可以独立运行 建议 被测试的方法名+一个Test，返回值建议void，参数列表建议空参

3.给方法加一个@test

4.导入junit依赖环境

- 判定结果：
  - 红色：失败
  - 绿色：成功
  - 一般用断言来处理操作
    - Asset.assertEquals（期望的结果，运算的结果）

## @Before / @After

- @Before：
  - 修饰的方法会在测试方法之前被自动执行
- @After
  - 修饰的方法会在测试方法执行之后自动被执行

# 反射

## 反射概念

反射：框架设计的灵魂

- 框架：半成品软件，可以在框架的基础上进行软件开发，简化编码
- 反射：将类的各个组成部分封装为其它对象，这就是反射机制
  - 好处：
  - 1.在程序运行过程中，操作对象
    2.可以解耦，提高程序的可拓展性

## 获取class对象的方式

1.Class.forName("全类名")：将字节码文件加载进内存，返回Class对象

* 多用于配置文件，将类名定义在配置文件中，读取文件，加载类

2.类名.class：类名的属性class来获取

- 多用于参数的传递

3.对象.getClass()：getClass()方法在Object类中定义着

- 多用于对象的获取字节码的方式

结论：同一个字节码文件（*.class）在一次程序运行中，只会被加载一起，无论通过哪种方式获取的Class对象都是同一个

```java
//        1.Class.forName("全类名")：将字节码文件加载进内存，返回Class对象
        Class cls1 = Class.forName ("cn.itcast.domain.Person");
        System.out.println (cls1);
//        2.类名.class：类名的属性class来获取
        Class cls2 = Person.class;
        System.out.println (cls2);
//        3.对象.getClass()：getClass()方法在Object类中定义着
        Person p = new Person ();
        Class cls3 = p.getClass ();
        System.out.println (cls3);

// == 比较三个对象
System.out.println (cls1==cls2);//比的是内存地址
System.out.println (cls1==cls3);//比的是内存地址
```



## Class对象功能：

- 获取功能：

  1.获取成员变量们

  ​	 Field[ ] getFields( ) ：用来获取所有public修饰的成员变量

  ​	 Field getField（String name）：用来获取指定名称的public修饰的成员变量

  

  ​	 Field[ ] getDeclaredFields( )：不考虑访问权限修饰符，获取所有成员变量

  ​     Field getDeclaredField(String name )

  

  2.获取构造方法们

  ​	 Constructor<?>[ ] getConstructors( ) 获取所有的成员变量，不考虑修饰符

  ​	 Constructor<T> getConstructor(<类<?>... parameterTypes）

  

  ​	 Constructor<T> getDeclaredConstructor(类<?>... parameterTypes)

  ​     Constructor<?>[ ] getDeclaredConstuctor( ）

  3.获取成员方法们

  ​	 Method[ ] getMethods( )

  ​	 Method[ ] getMethod(String name , 类<?>... parameterTypes)

  

  ​	 Method[ ] getDeclaredMethods( )

  ​	 Method[ ] getDeclaredMethod(String name , 类<?>... parameterTypes)

  ​	 

  4.获取类名

  ​	 String getName( )

- Field：成员变量
  - 操作：
    - 1.设置值
      - void set（Object obj , Object value）
    - 2.获取值
      - get(Object obj)
    - 3.暴力反射，忽略访问权限修饰符的安全检查
      - setAccessible(true)
- Constructor：构造方法
  - 创建对象：
    - T newInstance（Object......initargs）
  - 如果使用空参数构造方法创建对象，操作可以简化：Class对象的newInstance方法
- Method：方法对象
  - 执行方法：
    - Object invoke（Object obj , Object... args）
  - 获取方法名：
    - String getName：获取方法名

# 注解

## 注解概念

定义：

从JDK5开始,Java增加对元数据的支持，也就是注解，注解与注释是有一定区别的，可以把注解理解为代码里的特殊标记，这些标记可以在编译，类加载，运行时被读取，并执行相应的处理。通过注解开发人员可以在不改变原有代码和逻辑的情况下在源代码中嵌入补充信息。

概念描述：

- JDK1.5以后的新特性
- 说明程序的
- 使用注解：@注解名称

作用分类：

- 编写文档：通过代码里标识的注解生成doc文档



- 代码分析：通过代码里标识的注解对代码分析（使用反射）



- 编译检查：通过代码里标识的注解让编译器能够实现基本的编译检查（Override）

JDK中预定义的一些注解

- @Override ：检测被该注解标注的方法是否是继承自父类（父接口）的
- @Deprecated ：将该注解标注的内容，已过时
- @SuppressWarmings ：压制警告
  - 一般传递参数 “all” @SuppressWarnings ("all")

自定义注解

- 格式：

  - 元注解
  - public @interface 注解名称

- 本质：本质上就是一个接口interface，该接口默认继承Annotation

  - public interface MyAnno extends java.lang.annotation.Annotation {

    - 属性列表

       }

- 属性：接口中可以定义的成员方法

  - 要求：
    - 1.属性的返回值类型由下列取值
      - 基本数据类型
      - 字符串String
      - 枚举
      - 注解
      - 以上类型的数组
    - 2.定义了属性，使用时需要给属性赋值
      - 如果定义属性时，使用default关键字，给属性默认初始化值则使用注解时可以不用赋值
      - 如果只有一个属性需要赋值，并且属性名称为value，则value直接省略，直接写值即可
      - 数组赋值时，使用{ }进行包裹，如果数组就1个值，大括号可以不写

- 元注解：用于描述注解的注解

  - @Target：描述注解能够作用的位置

    - ElementType取值：
      - TYPE：可以作用于类上
      - METHOD ：可以作用于方法上
      - FIELD：可以作用于成员变量上

  - @Retention：描述注解被保留的阶段

    - ```java
      @Retention (RetentionPolicy.RUNTIME)：当前被描述的注解，会保留到Class字节码文件中，被JVM读取到，一般用RUNTIME
      ```

  - @Documentd：描述注解是否被抽取到API文档中

  - @Inherited：描述注解是否被子类继承

在程序使用（解析）注解：获取注解中定义的属性值

​	1.获取注解定义的位置的对象（Class，Method，Field）

​	2.获取指定的注解

- getAnnotation（Class）



​	3.调用注解中的抽象方法获取配置的属性值

