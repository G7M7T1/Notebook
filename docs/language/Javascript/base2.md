---
sidebar_position: 3
sidebar_label: '基础部分 Part 2'
---

# 基础部分

# Primitive Data Types

在JavaScript之中的原始资料类型的种类有以下 (最基本的储存资料的方式)

- Number
- String
- Boolean
- Undefined
- Null
- Symbol

## Number

数字相关的变化 在 JavaScript 中

### toString

选择转换为字符串

```jsx
let age = 27;
console.log(age.toString());
```

### toFixed

选择小数点后的几位数

```jsx
let pi = 3.1415926;
console.log(pi.toFixed(2))
```

## String

- length
- retrieve character
- slice()
- indexOf()
- toLowerCase()
- toUpperCase()
- split()

### length  长度

```jsx
let name = "Will";
console.log(name.length)
```

### Index 索引 Retrieve Character

在JS中也有这样的例子 比如 "Will" 0123 index number

```jsx
let name = "Will";
console.log(name[0])
```

这里的话就会输出 W 因为JS是从 0  开始计算的 如果超出了文字后 就会变成 Undefined 未定义的 因为他长度必须在之内

### Slice 切

第一刀切在你想要的字母上 第二刀切在你想要的字母后

```jsx
let name = "Willson";
console.log(name.slice(3,5));
//Anser ls
//         W i l l s o n
//         0 1 2 3 4 5 6
//               l s
//       Begin Index    End Index
//       Inclusive      Exclusive     
```

```jsx
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
```

### IndexOf

```jsx
let name = "Willson";
console.log(name.indexOf("i"));
// 查看 i 的位置在字符串中
// 第一个找到的 发生的 回传回来
// 如果有多个字符 只会回传第一个找到的
```

### toUpperCase toLowerCase

转换成 大写 或者 转换成 小写 把字符串

```jsx
// willson
let name = "Willson";
console.log(name.toLowerCase());
```

```jsx
// WILLSON
let name = "Willson";
console.log(name.toUpperCase());
```

旧的方法

```jsx
let name = "Willson has lived in Canada for many years";
console.log(name.indexOf("c"));
console.log(name.indexOf("C"));

//-1
//21
```

新的方法

```jsx
let name = "Willson has lived in Canada for many years";
console.log(name.toLowerCase().indexOf("c"));
console.log(name.toUpperCase().indexOf("C"));
```

### Split

```jsx
let name = "Willson has lived in Canada for many years";
console.log(name.split(" "));

// 结果

Array(8) [ "Willson", "has", "lived", "in", "Canada", "for", "many", "years" ]

0: "Willson"

1: "has"

2: "lived"

3: "in"

4: "Canada"

5: "for"

6: "many"

7: "years"

length: 8
```

无空格

```jsx
let name = "Willson has lived in Canada for many years";
console.log(name.split(""));

// 结果

Array(42) [ "W", "i", "l", "l", "s", "o", "n", " ", "h", "a", … ]

0: "W"

1: "i"

2: "l"

3: "l"

4: "s"

5: "o"

6: "n"

7: " "

8: "h"

9: "a"

10: "s"

11: " "

12: "l"

13: "i"

14: "v"

15: "e"

16: "d"

17: " "

18: "i"

19: "n"

20: " "

21: "C"

22: "a"

23: "n"

24: "a"

25: "d"

26: "a"

27: " "

28: "f"

29: "o"

30: "r"

31: " "

32: "m"

33: "a"

34: "n"

35: "y"

36: " "

37: "y"

38: "e"

39: "a"

40: "r"

41: "s"

length: 42
```

## Boolean

True or False 真 或 假 

```jsx
let isPremium = true;
console.log(isPremium);
/////////////////////////////
let isPremium = false;
console.log(isPremium);
```

### typeof Operator

```jsx
Data Type 类型

// Boolean
let isPremium = false;

// String
let isPremium = "false";
```

查看数据类型在 Javascript 中

```jsx
let x = false;
let y = "false";

console.log(typeof x); // boolean
console.log(typeof y); // string
```

### Undefined and Null

未定义 和 无 在 Javascript 中

在你没有给任何值之前 他都是未定义的 并且等待被定义

```jsx
let x
console.log(x);  // undefined
```

Null 的定义

相当于你建立了一个箱子 y 然后告诉他这个箱子里是 空的 不可以有任何东西

```jsx
let y = null;
console.log(y); // null
```

## Symbol

Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法

```jsx
let y = Symbol();
console.log(y); // Symbol()
```

```jsx
const symbol1 = Symbol();  // const 常数 不变化的数 不能被二次赋值
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false
```