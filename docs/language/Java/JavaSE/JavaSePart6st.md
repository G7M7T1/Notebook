---
sidebar_position: 6
sidebar_label: 'JavaSE Part 6st'
---

## 本文由以下元素组成

- Number & Math 类
  - Math类
  - Number & Math类方法
  - Math的floor，round和ceil方法实例比较
  - floor，round和ceil实例
- Character类
  - Character类
  - 转义序列
  - Character方法
- String类
  - 创建字符串
  - 字符串长度
  - 连接字符串
  - 创建格式化字符串
  - String方法
- StringBuffer & StringBuilder 类
  - StringBuffer方法

------

# Java Number & Math 类

## Number & Math 类

一般地，当需要使用数字的时候，我们通常使用内置数据类型，如：**byte、int、long、double** 等。

```java
实例
int a = 5000;
float b = 13.65f;
byte c = 0x4a;
```

然而，在实际开发过程中，我们经常会遇到需要使用对象，而不是内置数据类型的情形。为了解决这个问题，Java 语言为每一个内置数据类型提供了对应的包装类。

所有的包装类**（Integer、Long、Byte、Double、Float、Short）**都是抽象类 Number 的子类。

| 包装类    | 基本数据类型 |
| :-------- | :----------- |
| Boolean   | boolean      |
| Byte      | byte         |
| Short     | short        |
| Integer   | int          |
| Long      | long         |
| Character | char         |
| Float     | float        |
| Double    | double       |

![](1.png)

这种由编译器特别支持的包装称为装箱，所以当内置数据类型被当作对象使用的时候，编译器会把内置类型装箱为包装类。相似的，编译器也可以把一个对象拆箱为内置类型。Number 类属于 java.lang 包。

下面是一个使用 Integer 对象的实例：

```java
public class Test{
 
   public static void main(String[] args){
      Integer x = 5;
      x =  x + 10;
      System.out.println(x); 
   }
}
```

以上实例编译运行结果如下：

```java
15
```

当 x 被赋为整型值时，由于x是一个对象，所以编译器要对x进行装箱。然后，为了使x能进行加运算，所以要对x进行拆箱。

### Java Math 类

Java 的 Math 包含了用于执行基本数学运算的属性和方法，如初等指数、对数、平方根和三角函数。

Math 的方法都被定义为 static 形式，通过 Math 类可以在主函数中直接调用。

```java
public class Test {  
    public static void main (String []args)  
    {  
        System.out.println("90 度的正弦值：" + Math.sin(Math.PI/2));  
        System.out.println("0度的余弦值：" + Math.cos(0));  
        System.out.println("60度的正切值：" + Math.tan(Math.PI/3));  
        System.out.println("1的反正切值： " + Math.atan(1));  
        System.out.println("π/2的角度值：" + Math.toDegrees(Math.PI/2));  
        System.out.println(Math.PI);  
    }  
}
```

以上实例编译运行结果如下：

```java
90 度的正弦值：1.0
0度的余弦值：1.0
60度的正切值：1.7320508075688767
1的反正切值： 0.7853981633974483
π/2的角度值：90.0
3.141592653589793
```

### Number & Math 类方法

下面的表中列出的是 Number & Math 类常用的一些方法：

| 序号 | 方法与描述                                                   |
| :--- | :----------------------------------------------------------- |
| 1    | xxxValue()将 Number 对象转换为xxx数据类型的值并返回。        |
| 2    | compareTo()将number对象与参数比较。                          |
| 3    | equals()判断number对象是否与参数相等。                       |
| 4    | valueOf()返回一个 Number 对象指定的内置数据类型              |
| 5    | toString()以字符串形式返回值。                               |
| 6    | parseInt()将字符串解析为int类型。                            |
| 7    | abs()返回参数的绝对值。                                      |
| 8    | ceil()返回大于等于( >= )给定参数的的最小整数，类型为双精度浮点型。 |
| 9    | floor()返回小于等于（<=）给定参数的最大整数 。               |
| 10   | rint()返回与参数最接近的整数。返回类型为double。             |
| 11   | round()它表示**四舍五入**，算法为 **Math.floor(x+0.5)**，即将原来的数字加上 0.5 后再向下取整，所以，Math.round(11.5) 的结果为12，Math.round(-11.5) 的结果为-11。 |
| 12   | min()返回两个参数中的最小值。                                |
| 13   | max()返回两个参数中的最大值。                                |
| 14   | exp()返回自然数底数e的参数次方。                             |
| 15   | log()返回参数的自然数底数的对数值。                          |
| 16   | pow()返回第一个参数的第二个参数次方。                        |
| 17   | sqrt()求参数的算术平方根。                                   |
| 18   | sin()求指定double类型参数的正弦值。                          |
| 19   | cos()求指定double类型参数的余弦值。                          |
| 20   | tan()求指定double类型参数的正切值。                          |
| 21   | asin()求指定double类型参数的反正弦值。                       |
| 22   | acos()求指定double类型参数的反余弦值。                       |
| 23   | atan()求指定double类型参数的反正切值。                       |
| 24   | atan2()将笛卡尔坐标转换为极坐标，并返回极坐标的角度值。      |
| 25   | toDegrees()将参数转化为角度。                                |
| 26   | toRadians()将角度转换为弧度。                                |
| 27   | random()返回一个随机数。                                     |

------

### Math 的 floor,round 和 ceil 方法实例比较

| 参数 | Math.floor | Math.round | Math.ceil |
| :--- | :--------- | :--------- | :-------- |
| 1.4  | 1          | 1          | 2         |
| 1.5  | 1          | 2          | 2         |
| 1.6  | 1          | 2          | 2         |
| -1.4 | -2         | -1         | -1        |
| -1.5 | -2         | -1         | -1        |
| -1.6 | -2         | -2         | -1        |

### floor,round 和 ceil 实例

```java
public class Main {   
  public static void main(String[] args) {   
    double[] nums = { 1.4, 1.5, 1.6, -1.4, -1.5, -1.6 };   
    for (double num : nums) {   
      test(num);   
    }   
  }   
  
  private static void test(double num) {   
    System.out.println("Math.floor(" + num + ")=" + Math.floor(num));   
    System.out.println("Math.round(" + num + ")=" + Math.round(num));   
    System.out.println("Math.ceil(" + num + ")=" + Math.ceil(num));   
  }   
}
```

以上实例执行输出结果为：

```java
Math.floor(1.4)=1.0
Math.round(1.4)=1
Math.ceil(1.4)=2.0
Math.floor(1.5)=1.0
Math.round(1.5)=2
Math.ceil(1.5)=2.0
Math.floor(1.6)=1.0
Math.round(1.6)=2
Math.ceil(1.6)=2.0
Math.floor(-1.4)=-2.0
Math.round(-1.4)=-1
Math.ceil(-1.4)=-1.0
Math.floor(-1.5)=-2.0
Math.round(-1.5)=-1
Math.ceil(-1.5)=-1.0
Math.floor(-1.6)=-2.0
Math.round(-1.6)=-2
Math.ceil(-1.6)=-1.0
```

# Java Character 类

## Character 类

Character 类用于对单个字符进行操作。

Character 类在对象中包装一个基本类型 **char** 的值

```java
char ch = 'a';
 
// Unicode 字符表示形式
char uniChar = '\u039A'; 
 
// 字符数组
char[] charArray ={ 'a', 'b', 'c', 'd', 'e' };
```

然而，在实际开发过程中，我们经常会遇到需要使用对象，而不是内置数据类型的情况。为了解决这个问题，Java语言为内置数据类型char提供了包装类Character类。

Character类提供了一系列方法来操纵字符。你可以使用Character的构造方法创建一个Character类对象，例如：

```java
Character ch = new Character('a');
```

在某些情况下，Java编译器会自动创建一个Character对象。

例如，将一个char类型的参数传递给需要一个Character类型参数的方法时，那么编译器会自动地将char类型参数转换为Character对象。 这种特征称为装箱，反过来称为拆箱。

### 实例

```java
// 原始字符 'a' 装箱到 Character 对象 ch 中
Character ch = 'a';
 
// 原始字符 'x' 用 test 方法装箱
// 返回拆箱的值到 'c'
char c = test('x');
```

## 转义序列

前面有反斜杠（\）的字符代表转义字符，它对编译器来说是有特殊含义的。

下面列表展示了Java的转义序列：

| 转义序列 | 描述                     |
| :------- | :----------------------- |
| \t       | 在文中该处插入一个tab键  |
| \b       | 在文中该处插入一个后退键 |
| \n       | 在文中该处换行           |
| \r       | 在文中该处插入回车       |
| \f       | 在文中该处插入换页符     |
| \'       | 在文中该处插入单引号     |
| \"       | 在文中该处插入双引号     |
| \\       | 在文中该处插入反斜杠     |

### 实例

当打印语句遇到一个转义序列时，编译器可以正确地对其进行解释。

以下实例转义双引号并输出：

```java
public class Test {
 
   public static void main(String[] args) {
      System.out.println("访问\"贪玩蓝月!\"");
   }
}
```

以上实例编译运行结果如下：

```java
访问"贪玩蓝月!"
```

## Character 方法

下面是Character类的方法：

| 序号 | 方法与描述                                         |
| :--- | :------------------------------------------------- |
| 1    | isLetter()是否是一个字母                           |
| 2    | isDigit()是否是一个数字字符                        |
| 3    | isWhitespace()是否是一个空白字符                   |
| 4    | isUpperCase()是否是大写字母                        |
| 5    | isLowerCase()是否是小写字母                        |
| 6    | toUpperCase()指定字母的大写形式                    |
| 7    | toLowerCase() 指定字母的小写形式                   |
| 8    | toString() 返回字符的字符串形式，字符串的长度仅为1 |

# Java String 类

## String 类

字符串广泛应用 在 Java 编程中，在 Java 中字符串属于对象，Java 提供了 String 类来创建和操作字符串。

### 创建字符串

创建字符串最简单的方式如下:

```java
String str = "贪玩蓝月";
```

在代码中遇到字符串常量时，这里的值是 "**贪玩蓝月**""，编译器会使用该值创建一个 String 对象。

和其它对象一样，可以使用关键字和构造方法来创建 String 对象。

用构造函数创建字符串：

```java
String str2=new String("贪玩蓝月");
```

String 创建的字符串存储在公共池中，而 new 创建的字符串对象在堆上：

```java
String s1 = "贪玩蓝月";              // String 直接创建
String s2 = "贪玩蓝月";              // String 直接创建
String s3 = s1;                    // 相同引用
String s4 = new String("贪玩蓝月");   // String 对象创建
String s5 = new String("贪玩蓝月");   // String 对象创建
```

String 类有 11 种构造方法，这些方法提供不同的参数来初始化字符串，比如提供一个字符数组参数:

```java
public class StringDemo{
   public static void main(String args[]){
      char[] helloArray = { 't', 'w', 'l', 'y', 'n', 'b'};
      String helloString = new String(helloArray);  
      System.out.println( helloString );
   }
}
```

以上实例编译运行结果如下：

```
twlynb
```

**注意:**String 类是不可改变的，所以你一旦创建了 String 对象，那它的值就无法改变了（详看笔记部分解析）。

如果需要对字符串做很多修改，那么应该选择使用 StringBuffer & StringBuilder 类。

### 字符串长度

用于获取有关对象的信息的方法称为访问器方法。

String 类的一个访问器方法是 length() 方法，它返回字符串对象包含的字符数。

下面的代码执行后，len 变量等于 14:

```java
public class StringDemo {
    public static void main(String args[]) {
        String site = "贪玩蓝月";
        int len = site.length();
        System.out.println( "贪玩蓝月的长度 : " + len );
   }
}
```

以上实例编译运行结果如下：

```java
贪玩蓝月的长度 : 4
```

### 连接字符串

String 类提供了连接两个字符串的方法：

```java
string1.concat(string2);
```

返回 string2 连接 string1 的新字符串。也可以对字符串常量使用 concat() 方法，如：

```java
"我的名字是 ".concat("贪玩蓝月");
```

更常用的是使用'+'操作符来连接字符串，如：

```java
"Hello," + " 贪玩蓝月" + "!"
```

结果如下:

```java
"Hello, 贪玩蓝月!"
```

下面是一个例子:

```java
public class StringDemo {
    public static void main(String args[]) {     
        String string1 = "贪玩蓝月：";     
        System.out.println("1、" + string1 + "GK我爱你");  
    }
}
```

以上实例编译运行结果如下：

```java
1、贪玩蓝月:GK我爱你
```

### 创建格式化字符串

我们知道输出格式化数字可以使用 printf() 和 format() 方法。

String 类使用静态方法 format() 返回一个String 对象而不是 PrintStream 对象。

String 类的静态方法 format() 能用来创建可复用的格式化字符串，而不仅仅是用于一次打印输出。

如下所示：

```java
System.out.printf("浮点型变量的值为 " +
                  "%f, 整型变量的值为 " +
                  " %d, 字符串变量的值为 " +
                  "is %s", floatVar, intVar, stringVar);
```

你也可以这样写

```java
String fs;
fs = String.format("浮点型变量的值为 " +
                   "%f, 整型变量的值为 " +
                   " %d, 字符串变量的值为 " +
                   " %s", floatVar, intVar, stringVar);
```

### String 方法

下面是 String 类支持的方法

| SN(序号) | 方法描述                                                     |
| :------- | :----------------------------------------------------------- |
| 1        | char charAt(int index) 返回指定索引处的 char 值。            |
| 2        | int compareTo(Object o)] 把这个字符串和另一个对象比较。      |
| 3        | int compareTo(String anotherString)]按字典顺序比较两个字符串。 |
| 4        | int compareToIgnoreCase(String str)按字典顺序比较两个字符串，不考虑大小写。 |
| 5        | String concat(String str)将指定字符串连接到此字符串的结尾。  |
| 6        | boolean contentEquals(StringBuffer sb)当且仅当字符串与指定的StringBuffer有相同顺序的字符时候返回真。 |
| 7        | static String copyValueOf(char[\] data) 返回指定数组中表示该字符序列的 String。 |
| 8        | static String copyValueOf(char[\] data, int offset, int count)返回指定数组中表示该字符序列的 String。 |
| 9        | boolean endsWith(String suffix) 测试此字符串是否以指定的后缀结束。 |
| 10       | boolean equals(Object anObject)将此字符串与指定的对象比较。  |
| 11       | boolean equalsIgnoreCase(String anotherString) 将此 String 与另一个 String 比较，不考虑大小写。 |
| 12       | byte[\] getBytes()  使用平台的默认字符集将此 String 编码为 byte 序列，并将结果存储到一个新的 byte 数组中。 |
| 13       | byte[\] getBytes(String charsetName) 使用指定的字符集将此 String 编码为 byte 序列，并将结果存储到一个新的 byte 数组中。 |
| 14       | void getChars(int srcBegin, int srcEnd, char[\] dst, int dstBegin)]将字符从此字符串复制到目标字符数组。 |
| 15       | int hashCode()返回此字符串的哈希码。                         |
| 16       | int indexOf(int ch)]返回指定字符在此字符串中第一次出现处的索引。 |
| 17       | int indexOf(int ch, int fromIndex)返回在此字符串中第一次出现指定字符处的索引，从指定的索引开始搜索。 |
| 18       | int indexOf(String str)  返回指定子字符串在此字符串中第一次出现处的索引。 |
| 19       | int indexOf(String str, int fromIndex) 返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始。 |
| 20       | String intern() 返回字符串对象的规范化表示形式。             |
| 21       | int lastIndexOf(int ch) 返回指定字符在此字符串中最后一次出现处的索引。 |
| 22       | int lastIndexOf(int ch, int fromIndex)返回指定字符在此字符串中最后一次出现处的索引，从指定的索引处开始进行反向搜索。 |
| 23       | int lastIndexOf(String str)返回指定子字符串在此字符串中最右边出现处的索引。 |
| 24       | int lastIndexOf(String str, int fromIndex) 返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索。 |
| 25       | int length() 返回此字符串的长度。                            |
| 26       | boolean matches(String regex) 告知此字符串是否匹配给定的正则表达式。 |
| 27       | boolean regionMatches(boolean ignoreCase, int toffset, String other, int ooffset, int len)测试两个字符串区域是否相等。 |
| 28       | boolean regionMatches(int toffset, String other, int ooffset, int len)测试两个字符串区域是否相等。 |
| 29       | String replace(char oldChar, char newChar) 返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所有 oldChar 得到的。 |
| 30       | String replaceAll(String regex, String replacement) 使用给定的 replacement 替换此字符串所有匹配给定的正则表达式的子字符串。 |
| 31       | String replaceFirst(String regex, String replacement)  使用给定的 replacement 替换此字符串匹配给定的正则表达式的第一个子字符串。 |
| 32       | String[\] split(String regex)]根据给定正则表达式的匹配拆分此字符串。 |
| 33       | String[\] split(String regex, int limit)根据匹配给定的正则表达式来拆分此字符串。 |
| 34       | boolean startsWith(String prefix)]测试此字符串是否以指定的前缀开始。 |
| 35       | boolean startsWith(String prefix, int toffset) 测试此字符串从指定索引开始的子字符串是否以指定前缀开始。 |
| 36       | CharSequence subSequence(int beginIndex, int endIndex) 返回一个新的字符序列，它是此序列的一个子序列。 |
| 37       | String substring(int beginIndex) 返回一个新的字符串，它是此字符串的一个子字符串。 |
| 38       | String substring(int beginIndex, int endIndex)返回一个新字符串，它是此字符串的一个子字符串。 |
| 39       | char[\] toCharArray()] 将此字符串转换为一个新的字符数组。    |
| 40       | String toLowerCase()使用默认语言环境的规则将此 String 中的所有字符都转换为小写。 |
| 41       | String toLowerCase(Locale locale)]使用给定 Locale 的规则将此 String 中的所有字符都转换为小写。 |
| 42       | String toString() 返回此对象本身（它已经是一个字符串！）。   |
| 43       | String toUpperCase()使用默认语言环境的规则将此 String 中的所有字符都转换为大写。 |
| 44       | String toUpperCase(Locale locale)使用给定 Locale 的规则将此 String 中的所有字符都转换为大写。 |
| 45       | String trim()返回字符串的副本，忽略前导空白和尾部空白。      |
| 46       | static String valueOf(primitive data type x)返回给定data type类型x参数的字符串表示形式。 |
| 47       | contains(CharSequence chars)判断是否包含指定的字符系列。     |
| 48       | isEmpty() 判断字符串是否为空。                               |

# Java StringBuffer & StringBuilder 类

## StringBuffer & StringBuilder 类

当对字符串进行修改的时候，需要使用 StringBuffer 和 StringBuilder 类。

和 String 类不同的是，StringBuffer 和 StringBuilder 类的对象能够被多次的修改，并且不产生新的未使用对象。

![](2.png)

在使用 StringBuffer 类时，每次都会对 StringBuffer 对象本身进行操作，而不是生成新的对象，所以如果需要对字符串进行修改推荐使用 StringBuffer。

StringBuilder 类在 Java 5 中被提出，它和 StringBuffer 之间的最大不同在于 StringBuilder 的方法不是线程安全的（不能同步访问）。

由于 StringBuilder 相较于 StringBuffer 有速度优势，所以多数情况下建议使用 StringBuilder 类。

### 实例

```java
public class RunoobTest{
    public static void main(String args[]){
        StringBuilder sb = new StringBuilder(10);
        sb.append("Twlynb..");
        System.out.println(sb);  
        sb.append("!");
        System.out.println(sb); 
        sb.insert(8, "Java");
        System.out.println(sb); 
        sb.delete(5,8);
        System.out.println(sb);  
    }
}
```

以上实例编译运行结果如下：

```java
Twlynb..
Twlynb..!
Twlynb..Java!
TwlynJava!
```

然而在应用程序要求线程安全的情况下，则必须使用 StringBuffer 类。

```java
public class Test{
  public static void main(String args[]){
    StringBuffer sBuffer = new StringBuffer("贪玩蓝月牛逼：");
    sBuffer.append("www");
    sBuffer.append(".twlynb");
    sBuffer.append(".com");
    System.out.println(sBuffer);  
  }
}
```

以上实例编译运行结果如下：

```java
贪玩蓝月牛逼：www.twlynb.com
```

## StringBuffer 方法

以下是 StringBuffer 类支持的主要方法：

| 序号 | 方法描述                                                     |
| :--- | :----------------------------------------------------------- |
| 1    | public StringBuffer append(String s) 将指定的字符串追加到此字符序列。 |
| 2    | public StringBuffer reverse()  将此字符序列用其反转形式取代。 |
| 3    | public delete(int start, int end) 移除此序列的子字符串中的字符。 |
| 4    | public insert(int offset, int i) 将 `int` 参数的字符串表示形式插入此序列中。 |
| 5    | insert(int offset, String str) 将 `str` 参数的字符串插入此序列中。 |
| 6    | replace(int start, int end, String str) 使用给定 `String` 中的字符替换此序列的子字符串中的字符。 |

以下列表列出了 StringBuffer 类的其他常用方法：

| 序号 | 方法描述                                                     |
| :--- | :----------------------------------------------------------- |
| 1    | int capacity() 返回当前容量。                                |
| 2    | char charAt(int index) 返回此序列中指定索引处的 `char` 值。  |
| 3    | void ensureCapacity(int minimumCapacity) 确保容量至少等于指定的最小值。 |
| 4    | void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin) 将字符从此序列复制到目标字符数组 `dst`。 |
| 5    | int indexOf(String str) 返回第一次出现的指定子字符串在该字符串中的索引。 |
| 6    | int indexOf(String str, int fromIndex) 从指定的索引处开始，返回第一次出现的指定子字符串在该字符串中的索引。 |
| 7    | int lastIndexOf(String str) 返回最右边出现的指定子字符串在此字符串中的索引。 |
| 8    | int lastIndexOf(String str, int fromIndex) 返回 String 对象中子字符串最后出现的位置。 |
| 9    | int length()  返回长度（字符数）。                           |
| 10   | void setCharAt(int index, char ch) 将给定索引处的字符设置为 `ch`。 |
| 11   | void setLength(int newLength) 设置字符序列的长度。           |
| 12   | CharSequence subSequence(int start, int end) 返回一个新的字符序列，该字符序列是此序列的子序列。 |
| 13   | String substring(int start) 返回一个新的 `String`，它包含此字符序列当前所包含的字符子序列。 |
| 14   | String substring(int start, int end) 返回一个新的 `String`，它包含此序列当前所包含的字符子序列。 |
| 15   | String toString() 返回此序列中数据的字符串表示形式。         |
