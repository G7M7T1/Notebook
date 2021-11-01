---
sidebar_position: 1
sidebar_label: 'Improves Part 1st'
---

## 本文由以下元素组成

- Java 数据结构
  - 枚举（Enumeration）
  - 位集合（BitSet）
  - 向量（Vector）
  - 栈（Stack）
  - 字典（Dictionary）
  - 哈希表（Hashtable）
  - 属性（Properties）

------

# Java数据结构

Java工具包提供了强大的数据结构。在Java中的数据结构主要包括以下几种接口和类：

- 枚举（Enumeration）
- 位集合（BitSet）
- 向量（Vector）
- 栈（Stack）
- 字典（Dictionary）
- 哈希表（Hashtable）
- 属性（Properties）

以上这些类是传统遗留的，在Java2中引入了一种新的框架-集合框架(Collection)，

## 枚举（Enumeration）

枚举（Enumeration）接口虽然它本身不属于数据结构,但它在其他数据结构的范畴里应用很广。 枚举（The Enumeration）接口定义了一种从数据结构中取回连续元素的方式。

Enumeration接口中定义了一些方法，通过这些方法可以枚举（一次获得一个）对象集合中的元素。

这种传统接口已被迭代器取代，虽然Enumeration 还未被遗弃，但在现代代码中已经被很少使用了。尽管如此，它还是使用在诸如Vector和Properties这些传统类所定义的方法中，除此之外，还用在一些API类，并且在应用程序中也广泛被使用。 下表总结了一些Enumeration声明的方法：

| **序号** |                         **方法描述**                         |
| :------- | :----------------------------------------------------------: |
| 1        | **boolean hasMoreElements( )**  测试此枚举是否包含更多的元素。 |
| 2        | **Object nextElement( )** 如果此枚举对象至少还有一个可提供的元素，则返回此枚举的下一个元素。 |

### 实例

```java
import java.util.Vector;
import java.util.Enumeration;
 
public class EnumerationTester {
 
   public static void main(String args[]) {
      Enumeration<String> days;
      Vector<String> dayNames = new Vector<String>();
      dayNames.add("Sunday");
      dayNames.add("Monday");
      dayNames.add("Tuesday");
      dayNames.add("Wednesday");
      dayNames.add("Thursday");
      dayNames.add("Friday");
      dayNames.add("Saturday");
      days = dayNames.elements();
      while (days.hasMoreElements()){
         System.out.println(days.nextElement()); 
      }
   }
}
```

以上实例编译运行结果如下：

```java
Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
```

## 位集合（BitSet）

位集合类实现了一组可以单独设置和清除的位或标志。

该类在处理一组布尔值的时候非常有用，你只需要给每个值赋值一"位"，然后对位进行适当的设置或清除，就可以对布尔值进行操作了。

一个Bitset类创建一种特殊类型的数组来保存位值。BitSet中数组大小会随需要增加。这和位向量（vector of bits）比较类似。

这是一个传统的类，但它在Java 2中被完全重新设计。

BitSet定义了两个构造方法。

第一个构造方法创建一个默认的对象：

```java
BitSet()
```

第二个方法允许用户指定初始大小。所有位初始化为0。

```java
BitSet(int size)
```

BitSet中实现了Cloneable接口中定义的方法如下表所列：

| 序号 | 方法描述                                                     |
| :--- | :----------------------------------------------------------- |
| 1    | void and(BitSet set) 对此目标位 set 和参数位 set 执行逻辑与操作。 |
| 2    | void andNot(BitSet set) 清除此 BitSet 中所有的位，其相应的位在指定的 BitSet 中已设置。 |
| 3    | int cardinality( ) 返回此 BitSet 中设置为 true 的位数。      |
| 4    | void clear( ) 将此 BitSet 中的所有位设置为 false。           |
| 5    | void clear(int index) 将索引指定处的位设置为 false。         |
| 6    | void clear(int startIndex, int endIndex) 将指定的 startIndex（包括）到指定的 toIndex（不包括）范围内的位设置为 false。 |
| 7    | Object clone( ) 复制此 BitSet，生成一个与之相等的新 BitSet。 |
| 8    | boolean equals(Object bitSet) 将此对象与指定的对象进行比较。 |
| 9    | void flip(int index) 将指定索引处的位设置为其当前值的补码。  |
| 10   | void flip(int startIndex, int endIndex) 将指定的 fromIndex（包括）到指定的 toIndex（不包括）范围内的每个位设置为其当前值的补码。 |
| 11   | boolean get(int index) 返回指定索引处的位值。                |
| 12   | BitSet get(int startIndex, int endIndex) 返回一个新的 BitSet，它由此 BitSet 中从 fromIndex（包括）到 toIndex（不包括）范围内的位组成。 |
| 13   | int hashCode( ) 返回此位 set 的哈希码值。                    |
| 14   | boolean intersects(BitSet bitSet) 如果指定的 BitSet 中有设置为 true 的位，并且在此 BitSet 中也将其设置为 true，则返回 true。 |
| 15   | boolean isEmpty( ) 如果此 BitSet 中没有包含任何设置为 true 的位，则返回 true。 |
| 16   | int length( ) 返回此 BitSet 的"逻辑大小"：BitSet 中最高设置位的索引加 1。 |
| 17   | int nextClearBit(int startIndex) 返回第一个设置为 false 的位的索引，这发生在指定的起始索引或之后的索引上。 |
| 18   | int nextSetBit(int startIndex) 返回第一个设置为 true 的位的索引，这发生在指定的起始索引或之后的索引上。 |
| 19   | void or(BitSet bitSet) 对此位 set 和位 set 参数执行逻辑或操作。 |
| 20   | void set(int index) 将指定索引处的位设置为 true。            |
| 21   | void set(int index, boolean v)  将指定索引处的位设置为指定的值。 |
| 22   | void set(int startIndex, int endIndex) 将指定的 fromIndex（包括）到指定的 toIndex（不包括）范围内的位设置为 true。 |
| 23   | void set(int startIndex, int endIndex, boolean v) 将指定的 fromIndex（包括）到指定的 toIndex（不包括）范围内的位设置为指定的值。 |
| 24   | int size( ) 返回此 BitSet 表示位值时实际使用空间的位数。     |
| 25   | String toString( ) 返回此位 set 的字符串表示形式。           |
| 26   | void xor(BitSet bitSet) 对此位 set 和位 set 参数执行逻辑异或操作。 |

下面的程序说明这个数据结构支持的几个方法：

### 实例

```java
import java.util.BitSet;
 
public class BitSetDemo {
 
  public static void main(String args[]) {
     BitSet bits1 = new BitSet(16);
     BitSet bits2 = new BitSet(16);
      
     // set some bits
     for(int i=0; i<16; i++) {
        if((i%2) == 0) bits1.set(i);
        if((i%5) != 0) bits2.set(i);
     }
     System.out.println("Initial pattern in bits1: ");
     System.out.println(bits1);
     System.out.println("\nInitial pattern in bits2: ");
     System.out.println(bits2);
 
     // AND bits
     bits2.and(bits1);
     System.out.println("\nbits2 AND bits1: ");
     System.out.println(bits2);
 
     // OR bits
     bits2.or(bits1);
     System.out.println("\nbits2 OR bits1: ");
     System.out.println(bits2);
 
     // XOR bits
     bits2.xor(bits1);
     System.out.println("\nbits2 XOR bits1: ");
     System.out.println(bits2);
  }
}
```

以上实例编译运行结果如下：

```java
Initial pattern in bits1:
{0, 2, 4, 6, 8, 10, 12, 14}

Initial pattern in bits2:
{1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14}

bits2 AND bits1:
{2, 4, 6, 8, 12, 14}

bits2 OR bits1:
{0, 2, 4, 6, 8, 10, 12, 14}

bits2 XOR bits1:
{}
```

## 向量（Vector）

向量（Vector）类和传统数组非常相似，但是Vector的大小能根据需要动态的变化。

和数组一样，Vector对象的元素也能通过索引访问。

使用Vector类最主要的好处就是在创建对象的时候不必给对象指定大小，它的大小会根据需要动态的变化。

Vector 类实现了一个动态数组。和 ArrayList 很相似，但是两者是不同的：

- Vector 是同步访问的。
- Vector 包含了许多传统的方法，这些方法不属于集合框架。

Vector 主要用在事先不知道数组的大小，或者只是需要一个可以改变大小的数组的情况。

Vector 类支持 4 种构造方法。

第一种构造方法创建一个默认的向量，默认大小为 10：

```java
Vector()
```

第二种构造方法创建指定大小的向量。

```java
Vector(int size)
```

第三种构造方法创建指定大小的向量，并且增量用 incr 指定。增量表示向量每次增加的元素数目。

```java
Vector(int size,int incr)
```

第四种构造方法创建一个包含集合 c 元素的向量：

```java
Vector(Collection c)
```

除了从父类继承的方法外 Vector 还定义了以下方法：

| 序号 | 方法描述                                                     |
| :--- | :----------------------------------------------------------- |
| 1    | void add(int index, Object element)   在此向量的指定位置插入指定的元素。 |
| 2    | boolean add(Object o)   将指定元素添加到此向量的末尾。       |
| 3    | boolean addAll(Collection c)  将指定 Collection 中的所有元素添加到此向量的末尾，按照指定 collection 的迭代器所返回的顺序添加这些元素。 |
| 4    | boolean addAll(int index, Collection c)  在指定位置将指定 Collection 中的所有元素插入到此向量中。 |
| 5    | void addElement(Object obj)   将指定的组件添加到此向量的末尾，将其大小增加 1。 |
| 6    | int capacity()  返回此向量的当前容量。                       |
| 7    | void clear()  从此向量中移除所有元素。                       |
| 8    | Object clone()  返回向量的一个副本。                         |
| 9    | boolean contains(Object elem)  如果此向量包含指定的元素，则返回 true。 |
| 10   | boolean containsAll(Collection c)  如果此向量包含指定 Collection 中的所有元素，则返回 true。 |
| 11   | void copyInto(Object[] anArray)   将此向量的组件复制到指定的数组中。 |
| 12   | Object elementAt(int index)  返回指定索引处的组件。          |
| 13   | Enumeration elements()  返回此向量的组件的枚举。             |
| 14   | void ensureCapacity(int minCapacity)  增加此向量的容量（如有必要），以确保其至少能够保存最小容量参数指定的组件数。 |
| 15   | boolean equals(Object o)  比较指定对象与此向量的相等性。     |
| 16   | Object firstElement()  返回此向量的第一个组件（位于索引 0) 处的项）。 |
| 17   | Object get(int index)  返回向量中指定位置的元素。            |
| 18   | int hashCode()  返回此向量的哈希码值。                       |
| 19   | int indexOf(Object elem)   返回此向量中第一次出现的指定元素的索引，如果此向量不包含该元素，则返回 -1。 |
| 20   | int indexOf(Object elem, int index)   返回此向量中第一次出现的指定元素的索引，从 index 处正向搜索，如果未找到该元素，则返回 -1。 |
| 21   | void insertElementAt(Object obj, int index)  将指定对象作为此向量中的组件插入到指定的 index 处。 |
| 22   | boolean isEmpty()  测试此向量是否不包含组件。                |
| 23   | Object lastElement()  返回此向量的最后一个组件。             |
| 24   | int lastIndexOf(Object elem)   返回此向量中最后一次出现的指定元素的索引；如果此向量不包含该元素，则返回 -1。 |
| 25   | int lastIndexOf(Object elem, int index)  返回此向量中最后一次出现的指定元素的索引，从 index 处逆向搜索，如果未找到该元素，则返回 -1。 |
| 26   | Object remove(int index)   移除此向量中指定位置的元素。      |
| 27   | boolean remove(Object o)  移除此向量中指定元素的第一个匹配项，如果向量不包含该元素，则元素保持不变。 |
| 28   | boolean removeAll(Collection c)  从此向量中移除包含在指定 Collection 中的所有元素。 |
| 29   | void removeAllElements()  从此向量中移除全部组件，并将其大小设置为零。 |
| 30   | boolean removeElement(Object obj)  从此向量中移除变量的第一个（索引最小的）匹配项。 |
| 31   | void removeElementAt(int index)  删除指定索引处的组件。      |
| 32   | protected void removeRange(int fromIndex, int toIndex) 从此 List 中移除其索引位于 fromIndex（包括）与 toIndex（不包括）之间的所有元素。 |
| 33   | boolean retainAll(Collection c)  在此向量中仅保留包含在指定 Collection 中的元素。 |
| 34   | Object set(int index, Object element)  用指定的元素替换此向量中指定位置处的元素。 |
| 35   | void setElementAt(Object obj, int index)  将此向量指定 index 处的组件设置为指定的对象。 |
| 36   | void setSize(int newSize)   设置此向量的大小。               |
| 37   | int size()   返回此向量中的组件数。                          |
| 38   | List subList(int fromIndex, int toIndex)  返回此 List 的部分视图，元素范围为从 fromIndex（包括）到 toIndex（不包括）。 |
| 39   | Object[] toArray()  返回一个数组，包含此向量中以恰当顺序存放的所有元素。 |
| 40   | Object[] toArray(Object[] a)  返回一个数组，包含此向量中以恰当顺序存放的所有元素；返回数组的运行时类型为指定数组的类型。 |
| 41   | String toString()  返回此向量的字符串表示形式，其中包含每个元素的 String 表示形式。 |
| 42   | void trimToSize()   对此向量的容量进行微调，使其等于向量的当前大小。 |

### 实例

下面的程序说明这个集合所支持的几种方法：

```java
import java.util.*;

public class VectorDemo {

   public static void main(String args[]) {
      // initial size is 3, increment is 2
      Vector v = new Vector(3, 2);
      System.out.println("Initial size: " + v.size());
      System.out.println("Initial capacity: " +
      v.capacity());
      v.addElement(new Integer(1));
      v.addElement(new Integer(2));
      v.addElement(new Integer(3));
      v.addElement(new Integer(4));
      System.out.println("Capacity after four additions: " +
          v.capacity());

      v.addElement(new Double(5.45));
      System.out.println("Current capacity: " +
      v.capacity());
      v.addElement(new Double(6.08));
      v.addElement(new Integer(7));
      System.out.println("Current capacity: " +
      v.capacity());
      v.addElement(new Float(9.4));
      v.addElement(new Integer(10));
      System.out.println("Current capacity: " +
      v.capacity());
      v.addElement(new Integer(11));
      v.addElement(new Integer(12));
      System.out.println("First element: " +
         (Integer)v.firstElement());
      System.out.println("Last element: " +
         (Integer)v.lastElement());
      if(v.contains(new Integer(3)))
         System.out.println("Vector contains 3.");
      // enumerate the elements in the vector.
      Enumeration vEnum = v.elements();
      System.out.println("\nElements in vector:");
      while(vEnum.hasMoreElements())
         System.out.print(vEnum.nextElement() + " ");
      System.out.println();
   }
}
```

以上实例编译运行结果如下：

```java
Initial size: 0
Initial capacity: 3
Capacity after four additions: 5
Current capacity: 5
Current capacity: 7
Current capacity: 9
First element: 1
Last element: 12
Vector contains 3.

Elements in vector:
1 2 3 4 5.45 6.08 7 9.4 10 11 12
```

## 栈（Stack）

栈（Stack）实现了一个后进先出（LIFO）的数据结构。

你可以把栈理解为对象的垂直分布的栈，当你添加一个新元素时，就将新元素放在其他元素的顶部。

当你从栈中取元素的时候，就从栈顶取一个元素。换句话说，最后进栈的元素最先被取出。

栈是Vector的一个子类，它实现了一个标准的后进先出的栈。

堆栈只定义了默认构造函数，用来创建一个空栈。 堆栈除了包括由Vector定义的所有方法，也定义了自己的一些方法。

```java
Stack()
```

除了由Vector定义的所有方法，自己也定义了一些方法：

| 序号 | 方法描述                                                     |
| :--- | :----------------------------------------------------------- |
| 1    | boolean empty()  测试堆栈是否为空。                          |
| 2    | Object peek( ) 查看堆栈顶部的对象，但不从堆栈中移除它。      |
| 3    | Object pop( ) 移除堆栈顶部的对象，并作为此函数的值返回该对象。 |
| 4    | Object push(Object element) 把项压入堆栈顶部。               |
| 5    | int search(Object element) 返回对象在堆栈中的位置，以 1 为基数。 |

### 实例

下面的程序说明这个集合所支持的几种方法

```java
import java.util.*;
 
public class StackDemo {
 
    static void showpush(Stack<Integer> st, int a) {
        st.push(new Integer(a));
        System.out.println("push(" + a + ")");
        System.out.println("stack: " + st);
    }
 
    static void showpop(Stack<Integer> st) {
        System.out.print("pop -> ");
        Integer a = (Integer) st.pop();
        System.out.println(a);
        System.out.println("stack: " + st);
    }
 
    public static void main(String args[]) {
        Stack<Integer> st = new Stack<Integer>();
        System.out.println("stack: " + st);
        showpush(st, 42);
        showpush(st, 66);
        showpush(st, 99);
        showpop(st);
        showpop(st);
        showpop(st);
        try {
            showpop(st);
        } catch (EmptyStackException e) {
            System.out.println("empty stack");
        }
    }
}
```



以上实例编译运行结果如下：

```java
stack: [ ]
push(42)
stack: [42]
push(66)
stack: [42, 66]
push(99)
stack: [42, 66, 99]
pop -> 99
stack: [42, 66]
pop -> 66
stack: [42]
pop -> 42
stack: [ ]
pop -> empty stack
```

## 字典（Dictionary）

字典（Dictionary） 类是一个抽象类，它定义了键映射到值的数据结构。

当你想要通过特定的键而不是整数索引来访问数据的时候，这时候应该使用Dictionary。

由于Dictionary类是抽象类，所以它只提供了键映射到值的数据结构，而没有提供特定的实现。

Dictionary 类是一个抽象类，用来存储键/值对，作用和Map类相似。

给出键和值，你就可以将值存储在Dictionary对象中。一旦该值被存储，就可以通过它的键来获取它。所以和Map一样， Dictionary 也可以作为一个键/值对列表。

Dictionary定义的抽象方法如下表所示：

| **序号** | **方法描述**                                                 |
| -------- | ------------------------------------------------------------ |
| 1        | **Enumeration elements( )** 返回此 dictionary 中值的枚举。   |
| 2        | **Object get(Object key)** 返回此 dictionary 中该键所映射到的值。 |
| 3        | **boolean isEmpty( )** 测试此 dictionary 是否不存在从键到值的映射。 |
| 4        | **Enumeration keys( )** 返回此 dictionary 中的键的枚举。     |
| 5        | **Object put(Object key, Object value)** 将指定 key 映射到此 dictionary 中指定 value。 |
| 6        | **Object remove(Object key)** 从此 dictionary 中移除 key （及其相应的 value）。 |
| 7        | **int size( )** 返回此 dictionary 中条目（不同键）的数量。   |

Dictionary类已经过时了。在实际开发中，可以实现Map接口来获取键/值的存储功能。

## 哈希表（Hashtable）

Hashtable类提供了一种在用户定义键结构的基础上来组织数据的手段。

例如，在地址列表的哈希表中，你可以根据邮政编码作为键来存储和排序数据，而不是通过人名。

哈希表键的具体含义完全取决于哈希表的使用情景和它包含的数据。

Hashtable是原始的java.util的一部分， 是一个Dictionary具体的实现 。

然而，Java 2 重构的Hashtable实现了Map接口，因此，Hashtable现在集成到了集合框架中。它和HashMap类很相似，但是它支持同步。

像HashMap一样，Hashtable在哈希表中存储键/值对。当使用一个哈希表，要指定用作键的对象，以及要链接到该键的值。

然后，该键经过哈希处理，所得到的散列码被用作存储在该表中值的索引。

Hashtable定义了四个构造方法。第一个是默认构造方法：

```java
Hashtable()
```

第二个构造函数创建指定大小的哈希表：

```java
Hashtable(int size)
```

第三个构造方法创建了一个指定大小的哈希表，并且通过fillRatio指定填充比例。

填充比例必须介于0.0和1.0之间，它决定了哈希表在重新调整大小之前的充满程度：

```java
Hashtable(int size,float fillRatio)
```

第四个构造方法创建了一个以M中元素为初始化元素的哈希表。

哈希表的容量被设置为M的两倍。

```java
Hashtable(Map m)
```

Hashtable中除了从Map接口中定义的方法外，还定义了以下方法：

| **序号** | **方法描述**                                                 |
| :------- | :----------------------------------------------------------- |
| 1        | **void clear( )**  将此哈希表清空，使其不包含任何键。        |
| 2        | **Object clone( )** 创建此哈希表的浅表副本。                 |
| 3        | **boolean contains(Object value)**  测试此映射表中是否存在与指定值关联的键。 |
| 4        | **boolean containsKey(Object key)** 测试指定对象是否为此哈希表中的键。 |
| 5        | **boolean containsValue(Object value)** 如果此 Hashtable 将一个或多个键映射到此值，则返回 true。 |
| 6        | **Enumeration elements( )** 返回此哈希表中的值的枚举。       |
| 7        | **Object get(Object key)**  返回指定键所映射到的值，如果此映射不包含此键的映射，则返回 null. 更确切地讲，如果此映射包含满足 (key.equals(k)) 的从键 k 到值 v 的映射，则此方法返回 v；否则，返回 null。 |
| 8        | **boolean isEmpty( )** 测试此哈希表是否没有键映射到值。      |
| 9        | **Enumeration keys( )**  返回此哈希表中的键的枚举。          |
| 10       | **Object put(Object key, Object value)** 将指定 key 映射到此哈希表中的指定 value。 |
| 11       | **void rehash( )** 增加此哈希表的容量并在内部对其进行重组，以便更有效地容纳和访问其元素。 |
| 12       | **Object remove(Object key)** 从哈希表中移除该键及其相应的值。 |
| 13       | **int size( )**  返回此哈希表中的键的数量。                  |
| 14       | **String toString( )** 返回此 Hashtable 对象的字符串表示形式，其形式为 ASCII 字符 ", " （逗号加空格）分隔开的、括在括号中的一组条目。 |

### 实例

下面的程序说明这个数据结构支持的几个方法：

```java
import java.util.*;

public class HashTableDemo {

   public static void main(String args[]) {
      // Create a hash map
      Hashtable balance = new Hashtable();
      Enumeration names;
      String str;
      double bal;

      balance.put("Zara", new Double(3434.34));
      balance.put("Mahnaz", new Double(123.22));
      balance.put("Ayan", new Double(1378.00));
      balance.put("Daisy", new Double(99.22));
      balance.put("Qadir", new Double(-19.08));

      // Show all balances in hash table.
      names = balance.keys();
      while(names.hasMoreElements()) {
         str = (String) names.nextElement();
         System.out.println(str + ": " +
         balance.get(str));
      }
      System.out.println();
      // Deposit 1,000 into Zara's account
      bal = ((Double)balance.get("Zara")).doubleValue();
      balance.put("Zara", new Double(bal+1000));
      System.out.println("Zara's new balance: " +
      balance.get("Zara"));
   }
}
```

以上实例编译运行结果如下：

```java
Qadir: -19.08
Zara: 3434.34
Mahnaz: 123.22
Daisy: 99.22
Ayan: 1378.0

Zara's new balance: 4434.34
```

## 属性（Properties）

Properties 继承于 Hashtable.Properties 类表示了一个持久的属性集.属性列表中每个键及其对应值都是一个字符串。

Properties 类被许多Java类使用。例如，在获取环境变量时它就作为System.getProperties()方法的返回值。

Properties 继承于 Hashtable。表示一个持久的属性集.属性列表中每个键及其对应值都是一个字符串。

Properties 类被许多 Java 类使用。例如，在获取环境变量时它就作为 System.getProperties() 方法的返回值。

Properties 定义如下实例变量.这个变量持有一个 Properties 对象相关的默认属性列表。

```java
Properties defaults;
```

Properties类定义了两个构造方法. 第一个构造方法没有默认值。

```java
Properties()
```

第二个构造方法使用propDefault 作为默认值。两种情况下，属性列表都为空：

```java
Properties(Properties propDefault)
```

除了从 Hashtable 中所定义的方法，Properties 还定义了以下方法：

| **序号** | **方法描述**                                                 |
| :------- | :----------------------------------------------------------- |
| 1        | **String getProperty(String key)**  用指定的键在此属性列表中搜索属性。 |
| 2        | **String getProperty(String key, String defaultProperty)** 用指定的键在属性列表中搜索属性。 |
| 3        | **void list(PrintStream streamOut)**  将属性列表输出到指定的输出流。 |
| 4        | **void list(PrintWriter streamOut)** 将属性列表输出到指定的输出流。 |
| 5        | **void load(InputStream streamIn) throws IOException**  从输入流中读取属性列表（键和元素对）。 |
| 6        | **Enumeration propertyNames( )** 按简单的面向行的格式从输入字符流中读取属性列表（键和元素对）。 |
| 7        | **Object setProperty(String key, String value)**  调用 Hashtable 的方法 put。 |
| 8        | **void store(OutputStream streamOut, String description)**  以适合使用 load(InputStream)方法加载到 Properties 表中的格式，将此 Properties 表中的属性列表（键和元素对）写入输出流。 |

### 实例

下面的程序说明这个数据结构支持的几个方法：

```java
import java.util.*;
 
public class PropDemo {
 
   public static void main(String args[]) {
      Properties capitals = new Properties();
      Set states;
      String str;
      
      capitals.put("Illinois", "Springfield");
      capitals.put("Missouri", "Jefferson City");
      capitals.put("Washington", "Olympia");
      capitals.put("California", "Sacramento");
      capitals.put("Indiana", "Indianapolis");
 
      // Show all states and capitals in hashtable.
      states = capitals.keySet(); // get set-view of keys
      Iterator itr = states.iterator();
      while(itr.hasNext()) {
         str = (String) itr.next();
         System.out.println("The capital of " +
            str + " is " + capitals.getProperty(str) + ".");
      }
      System.out.println();
 
      // look for state not in list -- specify default
      str = capitals.getProperty("Florida", "Not Found");
      System.out.println("The capital of Florida is "
          + str + ".");
   }
}
```



以上实例编译运行结果如下：

```java
The capital of Missouri is Jefferson City.
The capital of Illinois is Springfield.
The capital of Indiana is Indianapolis.
The capital of California is Sacramento.
The capital of Washington is Olympia.

The capital of Florida is Not Found.
```