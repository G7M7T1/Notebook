---
sidebar_position: 3
sidebar_label: 'Improves Part 3st'
---

## 本文由以下元素组成

- ArrayList
- LinkedList

------

## ArrayList

### ArrayList基本概念

ArrayList 类是一个可以动态修改的数组，与普通数组的区别就是它是没有固定大小的限制，我们可以添加或删除元素。

ArrayList 继承了 AbstractList ，并实现了 List 接口。

![](https://github.com/G7M7T1/Notebook/blob/main/docs/language/Java/JavaSEEE/imges/6.png)

ArrayList 类位于 java.util 包中，使用前需要引入它，语法格式如下：

```java
import java.util.ArrayList; // 引入 ArrayList 类

ArrayList<E> objectName =new ArrayList<>();　 // 初始化
```

- **E**: 泛型数据类型，用于设置 objectName 的数据类型，**只能为引用数据类型**。
- **objectName**: 对象名。

ArrayList 是一个数组队列，提供了相关的添加、删除、修改、遍历等功能。

### 添加元素

ArrayList 类提供了很多有用的方法，添加元素到 ArrayList 可以使用 add() 方法:

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Wechat");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

```java
[Google, Wechat, Taobao, Weibo]
```

### 访问元素

访问 ArrayList 中的元素可以使用 get() 方法：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("twly");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites.get(1));  // 访问第二个元素
    }
}
```

**注意**：数组的索引值从 0 开始。

以上实例，执行输出结果为：

```
twly
```

### 修改元素

如果要修改 ArrayList 中的元素可以使用 set() 方法：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("twly");
        sites.add("Taobao");
        sites.add("Weibo");
        sites.set(2, "laoxu"); // 第一个参数为索引位置，第二个为要修改的值
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

```java
[Google, twly, laoxu, Weibo]
```

### 删除元素

如果要删除 ArrayList 中的元素可以使用 remove() 方法：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("twly");
        sites.add("Taobao");
        sites.add("Weibo");
        sites.remove(3); // 删除第四个元素
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

```java
[Google, twly, Taobao]
```

### 计算大小

如果要计算 ArrayList 中的元素数量可以使用 size() 方法：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("twly");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites.size());
    }
}
```

以上实例，执行输出结果为：

```java
4
```

### 迭代数组列表

可以使用 for 来迭代数组列表中的元素：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        for (int i = 0; i < sites.size(); i++) {
            System.out.println(sites.get(i));
        }
    }
}
```

以上实例，执行输出结果为：

```java
Google
Twly
Taobao
Weibo
```

也可以使用 for-each 来迭代元素：

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        for (String i : sites) {
            System.out.println(i);
        }
    }
}
```

以上实例，执行输出结果为：

```java
Google
Twly
Taobao
Weibo
```

### 其他的引用类型

ArrayList 中的元素实际上是对象，在以上实例中，数组列表元素都是字符串 String 类型。

如果我们要存储其他类型，而

```java 
<E>
```

只能为引用数据类型，这时我们就需要使用到基本类型的包装类。

基本类型对应的包装类表如下：

| 基本类型 | 引用类型  |
| :------- | :-------- |
| boolean  | Boolean   |
| byte     | Byte      |
| short    | Short     |
| int      | Integer   |
| long     | Long      |
| float    | Float     |
| double   | Double    |
| char     | Character |

此外，BigInteger、BigDecimal 用于高精度的运算，BigInteger 支持任意精度的整数，也是引用类型，但它们没有相对应的基本类型。

```java
ArrayList<Integer> li=new Arraylist<>();     // 存放整数元素
ArrayList<Character> li=new Arraylist<>();   // 存放字符元素
```

以下实例使用 ArrayList 存储数字(使用 Integer 类型):

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<Integer> myNumbers = new ArrayList<Integer>();
        myNumbers.add(10);
        myNumbers.add(15);
        myNumbers.add(20);
        myNumbers.add(25);
        for (int i : myNumbers) {
            System.out.println(i);
        }
    }
}
```

以上实例，执行输出结果为：

```java
10
15
20
25
```

### ArrayList 排序

Collections 类也是一个非常有用的类，位于 java.util 包中，提供的 sort() 方法可以对字符或数字列表进行排序。

以下实例对字母进行排序：

```java
import java.util.ArrayList;
import java.util.Collections;  // 引入 Collections 类

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Taobao");
        sites.add("Twly");
        sites.add("Runoob");
        sites.add("Weibo");
        sites.add("Google");
        Collections.sort(sites);  // 字母排序
        for (String i : sites) {
            System.out.println(i);
        }
    }
}
```

以上实例，执行输出结果为：

```java
Google
Twly
Taobao
Weibo
Wiki
```

以下实例对数字进行排序：

```java
import java.util.ArrayList;
import java.util.Collections;  // 引入 Collections 类

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<Integer> myNumbers = new ArrayList<Integer>();
        myNumbers.add(33);
        myNumbers.add(15);
        myNumbers.add(20);
        myNumbers.add(34);
        myNumbers.add(8);
        myNumbers.add(12);

        Collections.sort(myNumbers);  // 数字排序

        for (int i : myNumbers) {
            System.out.println(i);
        }
    }
}
```

以上实例，执行输出结果为：

```java
8
12
15
20
33
34
```

ArrayList 方法

Java ArrayList 常用方法列表如下：

| 方法             | 描述                                          |
| :--------------- | :-------------------------------------------- |
| add()            | 将元素插入到指定位置的 arraylist 中           |
| addAll()         | 添加集合中的所有元素到 arraylist 中           |
| clear()          | 删除 arraylist 中的所有元素                   |
| clone()          | 复制一份 arraylist                            |
| contains()       | 判断元素是否在 arraylist                      |
| get()            | 通过索引值获取 arraylist 中的元素             |
| indexOf()        | 返回 arraylist 中元素的索引值                 |
| removeAll()      | 删除存在于指定集合中的 arraylist 里的所有元素 |
| remove()         | 删除 arraylist 里的单个元素                   |
| size()           | 返回 arraylist 里元素数量                     |
| isEmpty()        | 判断 arraylist 是否为空                       |
| subList()        | 截取部分 arraylist 的元素                     |
| set()            | 替换 arraylist 中指定索引的元素               |
| sort()           | 对 arraylist 元素进行排序                     |
| toArray()        | 将 arraylist 转换为数组                       |
| toString()       | 将 arraylist 转换为字符串                     |
| ensureCapacity() | 设置指定容量大小的 arraylist                  |
| lastIndexOf()    | 返回指定元素在 arraylist 中最后一次出现的位置 |
| retainAll()      | 保留 arraylist 中在指定集合中也存在的那些元素 |
| containsAll()    | 查看 arraylist 是否包含指定集合中的所有元素   |
| trimToSize()     | 将 arraylist 中的容量调整为数组中的元素个数   |
| removeRange()    | 删除 arraylist 中指定索引之间存在的元素       |
| replaceAll()     | 将给定的操作内容替换掉数组中每一个元素        |
| removeIf()       | 删除所有满足特定条件的 arraylist 元素         |
| forEach()        | 遍历 arraylist 中每一个元素并执行特定操作     |

## LinkedList

### LinkedList基本概念

链表（Linked list）是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的地址。

链表可分为单向链表和双向链表。

一个单向链表包含两个值: 当前节点的值和一个指向下一个节点的链接。

![](https://github.com/G7M7T1/Notebook/blob/main/docs/language/Java/JavaSEEE/imges/3.png)

一个双向链表有三个整数值: 数值、向后的节点链接、向前的节点链接。

![](https://github.com/G7M7T1/Notebook/blob/main/docs/language/Java/JavaSEEE/imges/4.png)

Java LinkedList（链表） 类似于 ArrayList，是一种常用的数据容器。

与 ArrayList 相比，LinkedList 的增加和删除的操作效率更高，而查找和修改的操作效率较低。

### 以下情况使用 ArrayList 

- 频繁访问列表中的某一个元素。
- 只需要在列表末尾进行添加和删除元素操作。

### 以下情况使用 LinkedList 

- 需要通过循环迭代来访问列表中的某些元素。
- 需要频繁的在列表开头、中间、末尾等位置进行添加和删除元素操作。

LinkedList 继承了 AbstractSequentialList 类。

LinkedList 实现了 Queue 接口，可作为队列使用。

LinkedList 实现了 List 接口，可进行列表的相关操作。

LinkedList 实现了 Deque 接口，可作为队列使用。

LinkedList 实现了 Cloneable 接口，可实现克隆。

LinkedList 实现了 java.io.Serializable 接口，即可支持序列化，能通过序列化去传输。

![](https://github.com/G7M7T1/Notebook/blob/main/docs/language/Java/JavaSEEE/imges/5.png)

LinkedList 类位于 java.util 包中，使用前需要引入它，语法格式如下：

```java
// 引入 LinkedList 类
import java.util.LinkedList; 

LinkedList<E> list = new LinkedList<E>();   // 普通创建方法
或者
LinkedList<E> list = new LinkedList(Collection<? extends E> c); // 使用集合创建链表
```

### 创建一个简单的链表实例

// 引入 LinkedList 类

```java
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

```java
[Google, Twly, Taobao, Weibo]
```

更多的情况下使用 ArrayList 访问列表中的随机元素更加高效，但以下几种情况 LinkedList 提供了更高效的方法。

### 在列表开头添加元素：

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        // 使用 addFirst() 在头部添加元素
        sites.addFirst("Wiki");
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

```java
[Wiki, Google, Twly, Taobao]
```

### 在列表结尾添加元素

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        // 使用 addLast() 在尾部添加元素
        sites.addLast("Wiki");
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

```java
[Google, Twly, Taobao, Wiki]
```

### 在列表开头移除元素

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        // 使用 removeFirst() 移除头部元素
        sites.removeFirst();
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

```java
[Twly, Taobao, Weibo]
```

### 在列表结尾移除元素

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        // 使用 removeLast() 移除尾部元素
        sites.removeLast();
        System.out.println(sites);
    }
}
```

以上实例，执行输出结果为：

```java
[Google, Twly, Taobao]
```

### 获取列表开头的元素

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        // 使用 getFirst() 获取头部元素
        System.out.println(sites.getFirst());
    }
}
```

以上实例，执行输出结果为：

```java
Google
```

### 获取列表结尾的元素

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        // 使用 getLast() 获取尾部元素
        System.out.println(sites.getLast());
    }
}
```

以上实例，执行输出结果为：

```java
Weibo
```

### 迭代元素

可以使用 for 配合 size() 方法来迭代列表中的元素：

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        for (int size = sites.size(), i = 0; i < size; i++) {
            System.out.println(sites.get(i));
        }
    }
}
```

size() 方法用于计算链表的大小。

以上实例，执行输出结果为：

```java
Google
Twly
Taobao
Weibo
```

也可以使用 for-each 来迭代元素：

```java
// 引入 LinkedList 类
import java.util.LinkedList;

public class RunoobTest {
    public static void main(String[] args) {
        LinkedList<String> sites = new LinkedList<String>();
        sites.add("Google");
        sites.add("Twly");
        sites.add("Taobao");
        sites.add("Weibo");
        for (String i : sites) {
            System.out.println(i);
        }
    }
}
```

以上实例，执行输出结果为：

```java
Google
Twly
Taobao
Weibo
```

### 常用方法

| 方法                                           | 描述                                                         |
| :--------------------------------------------- | :----------------------------------------------------------- |
| public boolean add(E e)                        | 链表末尾添加元素，返回是否成功，成功为 true，失败为 false。  |
| public void add(int index, E element)          | 向指定位置插入元素。                                         |
| public boolean addAll(Collection c)            | 将一个集合的所有元素添加到链表后面，返回是否成功，成功为 true，失败为 false。 |
| public boolean addAll(int index, Collection c) | 将一个集合的所有元素添加到链表的指定位置后面，返回是否成功，成功为 true，失败为 false。 |
| public void addFirst(E e)                      | 元素添加到头部。                                             |
| public void addLast(E e)                       | 元素添加到尾部。                                             |
| public boolean offer(E e)                      | 向链表末尾添加元素，返回是否成功，成功为 true，失败为 false。 |
| public boolean offerFirst(E e)                 | 头部插入元素，返回是否成功，成功为 true，失败为 false。      |
| public boolean offerLast(E e)                  | 尾部插入元素，返回是否成功，成功为 true，失败为 false。      |
| public void clear()                            | 清空链表。                                                   |
| public E removeFirst()                         | 删除并返回第一个元素。                                       |
| public E removeLast()                          | 删除并返回最后一个元素。                                     |
| public boolean remove(Object o)                | 删除某一元素，返回是否成功，成功为 true，失败为 false。      |
| public E remove(int index)                     | 删除指定位置的元素。                                         |
| public E poll()                                | 删除并返回第一个元素。                                       |
| public E remove()                              | 删除并返回第一个元素。                                       |
| public boolean contains(Object o)              | 判断是否含有某一元素。                                       |
| public E get(int index)                        | 返回指定位置的元素。                                         |
| public E getFirst()                            | 返回第一个元素。                                             |
| public E getLast()                             | 返回最后一个元素。                                           |
| public int indexOf(Object o)                   | 查找指定元素从前往后第一次出现的索引。                       |
| public int lastIndexOf(Object o)               | 查找指定元素最后一次出现的索引。                             |
| public E peek()                                | 返回第一个元素。                                             |
| public E element()                             | 返回第一个元素。                                             |
| public E peekFirst()                           | 返回头部元素。                                               |
| public E peekLast()                            | 返回尾部元素。                                               |
| public E set(int index, E element)             | 设置指定位置的元素。                                         |
| public Object clone()                          | 克隆该列表。                                                 |
| public Iterator descendingIterator()           | 返回倒序迭代器。                                             |
| public int size()                              | 返回链表元素个数。                                           |
| public ListIterator listIterator(int index)    | 返回从指定位置开始到末尾的迭代器。                           |
| public Object[] toArray()                      | 返回一个由链表元素组成的数组。                               |
| public T[] toArray(T[] a)                      | 返回一个由链表元素转换类型而成的数组。                       |