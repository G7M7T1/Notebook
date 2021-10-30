---
sidebar_position: 4
sidebar_label: '基础部分 Part 3'
---

# 基础部分

# Logical Operator

- returns a Boolean value  (true or false)
- ==   ===
- !=   !==
- >   <   >=   <=

== is comparing if the values are the same on both sides

```jsx
console.log(3 == 3);  // true
console.log(3 == "3"); //true
// 就算他们资料类型不一样 他们本质上一样
```

===

```jsx
console.log(3 === "3");  // false 
// 因为资料类型 不一样
```

同理

```jsx
console.log(3 != "3");  // false
console.log(3 !== "3");  // true       value and type

console.log(3 >= 2);  // true.............
```

# And &&且       or ||或

```jsx
let condition1 = 3>2;
let condition2 = 5>6;
console.log(condition1 && condition2)  // false
console.log(condition1 || condition2)  // true
```

```jsx
let isPremium = true;
let isOver18 = false;
console.log(isPremium && isOver18);  // false
console.log(isPremium || isOver18); // true
```

# If Statement and condition

```jsx
let isTinter = false;

if(isTinter == true){
    //code here
    console.log("Execute the running game")
} else{
    console.log("Display the google search page")
}

//////////////////////////////////////////////////////

let isTinter = false;

if(isTinter){
    //code here
    console.log("Execute the running game")
} else{
    console.log("Display the google search page")
}
```

进阶内容

```jsx
//0-12    100$
//12-65   250$
//65+     150$

let age = prompt("Enter your age: ");

if((age > 0) && (age <= 12)){
    alert("100$")
} else if((age > 12) && (age <= 65)){
    alert("250$")
} else if((age > 65) && (age <= 120)) {
    alert("150$")
} else{
    alert("Enter real age")
}
```

```jsx
//0-12    100$
//12-65   250$
//65+     150$

let age = prompt("Enter your age: ");

age = Number(age);
console.log(typeof(age));

if((age > 0) && (age <= 12)){
    alert("100$")
} else if((age > 12) && (age <= 65)){
    alert("250$")
} else if((age > 65) && (age <= 120)) {
    alert("150$")
} else{
    alert("Enter real age")
}
```

```jsx
//0-12    100$
//12-65   250$
//65+     150$

let age = prompt("Enter your age: ");

if(isNaN(age)){
    alert("Enter number only")
}

age = Number(age);
console.log(age,typeof(age));

if((age > 0) && (age <= 12)){
    alert("100$")
} else if((age > 12) && (age <= 65)){
    alert("250$")
} else if((age > 65) && (age <= 120)) {
    alert("150$")
} else{
    alert("Enter real age")
}
```

# Truthy and Falsy Values

Falsy会被认定为是false 以下的就是falsy values 其他都是truthy

- false
- 0
- ""   (empty string)
- null
- undefined
- NaN

# Variable Naming Convention

- camelCase
- underline
- const with uppercase

## 驼峰命名

```jsx
underWater  isPremium
```

## 下划线命名

```jsx
under_water is_premium
```

## 全部大写

```jsx
const PI = 3.1415926     WATER
```

# Variable Naming Restriction

- starts with number            数字开头
- hyphen in JS                      - 号

```jsx
let price = 30;
let 2price = 30; X 不能这样
```

# Array

- index
- length
- push()
- pop()
- shift()
- unshift

储存资料的方式 将多个资料放在一起

```jsx
let friend1 = "John";
let friend2 = "Sandy";
let friend3 = "Alex";
/////////////////////////////////////
let friend = ["John","Sandy","Alex"];
```

index

```jsx
let friend = ["John","Sandy","Alex"];
console.log(friend[0]);  // John

//////////////////////////////////////

let friend = ["John","Sandy","Alex"];
console.log(friend);
///
Array(3) [ "John", "Sandy", "Alex" ]

0: "John"

1: "Sandy"

2: "Alex"

length: 3

<prototype>: Array []
```

length

```jsx
let friend = ["John","Sandy","Alex"];
console.log(friend.length);  // 3
```

## push and pop     shift and unshift

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c65ff8e6-5ca5-4e6e-a01f-a8d9eca3dfb7/Untitled.png](https://media.discordapp.net/attachments/705034399200313465/903994598794354699/unknown.png)

### push and unshift

```jsx
let friend = ["John","Sandy","Alex"];
friend.push("Harry"); friend.unshift("Gura");
console.log(friend)
// Array(5) [ "Gura", "John", "Sandy", "Alex", "Harry" ]
```

### pop and shift

```jsx
let friend = ["John","Sandy","Alex"];
friend.pop(); friend.shift();
console.log(friend)
// Array [ "Sandy" ]
```

# Function 函数

一个函数就像是一个程序 JS 内建了很多自己的函数

```jsx
function sayHi()
{
    console.log("Hello World");
}

// 执行 invoke, execute

sayHi();
```

## Function Knowledge

- parameter    参数
- return

### Parameter

像是pop里面就没有 parameter 有些有有些没有

```jsx
let friend = ["Alex", "Line", "Done"];
friend.push("John");
//  这里的John就是parameter
```

```jsx
function sayHi(name)
{
    console.log("Hello World " + name);
}
sayHi("JS");
```

在 JS 里 Parameter 可以不止有一个

```jsx
function sayHi(name,age)
{
    console.log("Hello World " + name + " I'm " + age + " years old");
}
sayHi("JS","18");
```

转换

```jsx
// F = C * 1.8 + 32

function convert(oc)
{
    console.log(oc * 1.8 + 32);
}

convert(0)
convert(100)
```

### Return

如果要用 return 返回的话 需要用一个变量接住 return 回来的值

```jsx
function convert(oc)
{
    return oc * 1.8 + 32;
}

let of = convert(100)
console.log(of)
```

输入后返回值

```jsx
function convert(oc)
{
    return oc * 1.8 + 32;
}

let input = prompt("Enter tempertuce: ");
let result = convert(input);

alert("After convert the tempertuce is " + result);
```

简化

```jsx
function convert(oc)
{
    return oc * 1.8 + 32;
}
alert("After convert the tempertuce is " + convert(prompt("Enter value:")));
```

在 JS 中 其实 prompt 也需要一个变量来借助值 那么他其实也有 return 在内部

```jsx
let friend = ["Josh", "John", "Mike"]
let returnWord = friend.push("Bryant")

console.log(friend);  // Array(4) [ "Josh", "John", "Mike", "Bryant" ]
console.log(returnWord);  // 4
```