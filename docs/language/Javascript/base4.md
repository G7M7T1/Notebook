---
sidebar_position: 4
sidebar_label: '基础部分 Part 4'
---

# 基础部分

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

# Object 物件

- property
- method
- this
- typeof

## Property and Method

```jsx
let Wilson = {
    // properties setting
    name: "Wilson Ren",
    age: 30,
    is_Married: false,
    spouse: null,
    // methods setting
    sayHi() {
        console.log("Wilson says Hi");
    },
    Walke() {
        console.log("Wilson is walking on the street")
    },
    say(word){
        console.log("Wilson say: " + word);
    }
};

// []
console.log(Wilson["name"]);

// dot notation
console.log(Wilson.age);

Wilson.Walke();

Wilson.say("Interesting....");
```

## This

```jsx
let Wilson = {
    // properties setting
    name: "Wilson Ren",
    age: 30,
    // methods setting
    sayAge(){
        console.log("Wilson say I am " + this.age + " years old");
    }
};

Wilson.sayAge();  // Wilson say I am 30 years old
```

但是如果你更改了在下面

```jsx
let Wilson = {
    // properties setting
    name: "Wilson Ren",
    age: 30,
    // methods setting
    sayAge(){
        console.log("Wilson say I am " + this.age + " years old");
    }
};

Wilson.age = 35;
Wilson.sayAge();  // Wilson say I am 35 years old
```

## What is Object

```jsx
let Wilson = {
    // properties setting
    name: "Wilson Ren",
    age: 30,
    // methods setting
    sayAge(){
        console.log("Wilson say I am " + this.age + " years old");
    }
};

console.log(typeof Wilson);  // object
```

## Array or Object

我们知道这里的friend其实是个 Array 但是他依然显示是 Object

```jsx
let Wilson = {
    // properties setting
    name: "Wilson Ren",
    age: 30,
    // methods setting
    sayAge(){
        console.log("Wilson say I am " + this.age + " years old");
    }
};

let friend = ["John", "Josh", "Mike"]

console.log(typeof Wilson);  // object
console.log(typeof friend);  // object
```

在JS里面 Array 其实是一种特别的 Object

# Loop 回圈

提供你非常快速简单的解决方案 为你做重复的事情

- for loop
- while loop

## For Loop

```jsx
for(let i = 0; i < 10; i++){
    console.log(i)
}
```

或者改变 i++

```jsx
for(let i = 0; i <= 20; i += 4){
    console.log(i);
}
// 0 4 8 12 16 20
```

## While Loop

```jsx
let j = 0;
while(j <= 10){
    console.log(j);
    j++;
}
```

## Keywords in Loop

- break
- continue

### Continue

他会马上从 loop 里跳脱出来到 for loop

```jsx
for(let i = 0; i <= 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}
// 0 1 2 3 4   6 7 8 9 10 
```

也就是说在 continue 后面 就跳回 for loop 不再执行 console.log

```jsx
for(let i = 0; i <= 10; i++){
    continue;
    console.log(i);  // 检测到无法访问的代码
}
```

这里就不会出现任何的 console.log

### Break

终止掉程序

```jsx
for(let i = 0; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}
// 0 1 2 3 4 
```

## Other Basic Topics About Loop

- Nested Loop
- How to Loop through an array?

### Nested Loop

在 loop 当中还有一个loop 就是 Nested Loop

```jsx
for(let i = 0; i <= 20; i += 4){
    for(let j = 0; j < 5; j++){
        console.log(i,j);
    }
}
```

计数

```jsx
let count = 0;
for(let i = 0; i <= 20; i += 4){
    for(let j = 0; j < 5; j++){
        console.log(i,j);
        count++;
    }
}
console.log(count);
// 0 4 8 12 16 20
```

### How to Loop through an array?

```jsx
let friend = ["Josh", "John", "Mike"];

for(let i = 0; i < friend.length; i++){
    console.log(friend[i].toUpperCase());
}
```

# Math Object

- Math.PI                    3.1415926...
- Math.pow(a, b)        a 的 b 次方
- Math.random()        随机0-1 其实不到1
- Math.sqrt()              根号 Math.sqrt(64) = 8
- Math.abs()               absolute 绝对值
- Math.floor()             1.18 就会变成 1     100.33 就会变成 100
- Math.ceil()               1.18 就会变成 2     100.33 就会变成 101

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84a2e21d-86b8-4366-a225-bd830352d388/Untitled.png](https://media.discordapp.net/attachments/705034399200313465/903995123241746502/unknown.png?width=1286&height=600)

```jsx
//PI
console.log(Math.PI)
//Pow
let n1 = Math.pow(2,10);  // 会 return 一个值回来 所以需要变量接住
console.log(n1)
//Random
for(let i = 0; i < 10; i++){
    console.log(Math.random());
}
//Sqrt
let n2 = Math.sqrt(64);
console.log(n2);
//Abs
let n3 = Math.abs(-64);
console.log(n3);
//Floor  and  Ceil
let n4 = Math.floor(100.99);
console.log(n4)
let n5 = Math.ceil(1.18);
console.log(n5)
```

## Random 0-100

```jsx
Math.floor(Math.random() * 101
```