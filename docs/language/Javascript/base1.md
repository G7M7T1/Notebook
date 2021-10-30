---
sidebar_position: 2
sidebar_label: '基础部分 Part 1'
---

# 基础部分

## 函数

- console.log()
- alert()
- prompt()

### prompt()

跳出输入框  比如年龄等

```jsx
prompt("enter age");
```

### alert()

弹出信息在页面

```jsx
alert("index");
```

## Variables

- =
- let
- var

### Let

标注一个可以被替换的值

```jsx
let x = 5;
x = 6;
```

### Const 常数

不变化的数 不能被二次赋值

### Let and Prompt

```jsx
let name = prompt("Plz Enter your name:");
```

## 运算

```jsx
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);

//余数
console.log(5 % 2);

//power 次方
console.log(7**4)
// 7的4次方

// ++ --
let x = 0;
x = x + 1;
console.log(x);
// or
let x = 0;
x++;
console.log(x);

//  +=  -=  *=  /=
let x = 0;
x = x + 10;
console.log(7**4)
// or
let x = 0;
x+=10
console.log(7**4)
```

## Strings 字符串

- 文字
- 数字

### String Concatenate 串接

就像是物理的串联和并联电路一样 你可以把两个 string 串联到一起 但是和加法不一样 concatenate 是给文字为主的 两个字符串相加

JS string + number = concat

### 字符串顺序

顺序是从左到右的 所以 这里的输出是 50John1015

```csharp
let n1 = 20; let n2 = 30; let name = "John";
let n3 = 10; ; let n4 = 15;
console.log(n1 + n2 + name + n3 + n4)
```

算法是 20 + 30 = 50       50 + John = 50John (由数字串转变为字符串)

50John + 10 = 50John10      50John10 + 15 = 50John1015 这就是最终答案

## Comment 注释

在JS里的注释方式有 单行 和 多行 注释

```csharp
// 注释

/*
123
456
789
*/
```

多行注释

```csharp
/**
 * 12331213213132
 * 1232131313131313
 * 3123213213213213312321
 */
```