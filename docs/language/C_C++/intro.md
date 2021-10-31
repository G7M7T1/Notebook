---
sidebar_position: 1
sidebar_label: '介绍 C 和 C++'
---

# C / C++介绍

## C 介绍
C是一种通用的编程语言，广泛用于系统软件与应用软件的开发。于1969年至1973年间，为了移植与开发UNIX操作系统，由丹尼斯·里奇与肯·汤普逊，以B语言为基础，在贝尔实验室设计、开发出来

C语言具有高效、灵活、功能丰富、表达力强和较高的可移植性等特点，在程序设计中备受青睐，成为最近25年使用最为广泛的编程语言。目前，C语言编译器普遍存在于各种不同的操作系统中，例如Microsoft Windows、macOS、Linux、Unix等。C语言的设计影响了众多后来的编程语言，例如C++、Objective-C、Java、C#等

二十世纪八十年代，为了避免各开发厂商用的C语言的语法产生差异，由美国国家标准局为C语言订定了一套完整的国际标准语法，称为ANSI C，作为C语言的标准。二十世纪八十年代至今的有关程序开发工具，一般都支持符合ANSI C的语法

## C++ 介绍
C++是一种被广泛使用的计算机程序设计语言。它是一种通用程序设计语言，支持多重编程模式，例如过程化程序设计、数据抽象、面向对象程序设计、泛型程序设计和设计模式等

比雅尼·斯特劳斯特鲁普博士在贝尔实验室工作期间在20世纪80年代发明并实现了C++。起初，这种语言被称作“C with Classes”（“包含‘类’的C语言”），作为C语言的增强版出现。随后，C++不断增加新特性。虚函数（virtual function）、运算符重载（operator overloading）、多继承（multiple inheritance）、标准模板库（standard template library, STL）、异常处理（exception）、运行时类型信息（runtime type information）、名字空间（namespace）等概念逐渐纳入标准。1998年，国际标准组织（ISO）颁布了C++程序设计语言的第一个国际标准ISO/IEC 14882:1998，目前最新标准为ISO/IEC 14882:2020。根据《C++编程思想》（Thinking in C++）一书，C++与C的代码执行效率往往相差在±5%之间


```cpp
#include <iostream>

int main() {
  std::cout << "Hello World!\n";
} 
```

```c++
#include <iostream>

int main() {
  std::cout << "Hello World!\n";
} 
```
