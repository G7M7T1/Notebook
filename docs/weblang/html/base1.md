---
sidebar_position: 2
sidebar_label: '基础部分 Part 1'
---

# 基础部分
HTML是 Hypertext Markup Language 当前的版本是HTML 5

## 标签

- `<p>Hello World</p>`       在HTML里的p就是段落paragraph
- `<h1>Hello World</h1>`   标题Heading1
- `<base>`

## 物件

- 属性 Attributes + 行为 Methods
    - 在HTML里 所有的标签都是物件
    - 物件分为两个部分 属性 和 行为
    - 你需要去定义它的 属性 和 它的 行为
    
    ```html
    <h1 class = "heading" style="color: cornflowerblue;"></h1>
    ```
    
    行为的定义
    
    ```html
    <h1 class="heading" style="color: cornflowerblue;" onclick="alert('You just click it')">111</h1>
    ```
    
    这里会在点击后执行一条信息进行反馈
    

## HTML Skeleton(Boilerplate)

- Head
- Body
- Footer

所谓的HTML骨架 每个网站都需要包含 Head 和 Body 可以额外添加Footer

网站的必须包含项

```html
<!DOCTYPE html>
```

声明你接下来要写的是什么类型的文件

接下来是你要完成 head 和 body 在html

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
```

写完之后我们还没有结束 那么下面是全部需要写的内容

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width = device-width,initial-scale = 1" />
    <title>Hello World</title>
</head>

<body></body>

</html>
```

Meta标签的是定义文件的属性

```html
<meta charset="utf-8" />
<meta name="viewport" content="width = device-width,initial-scale = 1" />
```

UTF-8 是Unicode 它把世界上大部分语言都编译进去了

但是如果你没有定义UTF-8 可能会出现一些乱码在你的网页

文字中viewport的意思是视窗 也就是眼睛所示范围

width就是宽度的意思 device-width 其实就是设备的宽度

initial-scale的意思缩放概念 基本就是1 不用进行更改

## 找到网页

其他常用的meta tag

```html
<meta name="robots" content="index, follow">
```

让搜索引擎更容易找到你的网页

## 链接行为

网站的详细描述 主要用于搜索引擎

```html
<meta name="description" content="Hello World in HTML">
```

## 网站名称

Title的意思是网页的网页名称 它必须存在于 head 标签里

```html
<title>Hello World</title>
```

## 网站开头

不过上面的内容偏多 如果不经常写网站估计不能写出来 那么 有个简单的方法

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5276c001-9c2a-4faf-8fff-501cd3fbc891/Untitled.png](https://cdn.discordapp.com/attachments/705034399200313465/904192594718904370/unknown.png)

其实我们在打!时会出来一个选择 我们点击它 我们就会获得

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

超链接参考 网页链接

```html
<a href="https://www.youtube.com/">Youtube</a>
```

这里的href = hypertext reference  意思就是你的超文字要参考在哪里去

## 链接行为

- 关于target的替换
    - _self
    - _blank
    - _parent
    - _top
    
    ```html
    <a target="_self" href="https://www.youtube.com/">Youtube</a>
    <a target="_blank" href="https://www.youtube.com/">Youtube</a>
    ```
    
    以上两种一种self是默认值 会覆盖自己 一种是开启新的一页
    

## 图片附加

```html
<img width="500" height="300" src="./richard-tao-jlJFU9QBfFc-unsplash.jpg" alt="city">
```

先声明图片类型 然后 宽度 和 高度 然后 src 是来源  最后 alt  alternative 另一个选项的意思

其实 alt 就是一个附加的说明信息 但是它的用处是如果图片无法显示或者找不到图片 就替换成文字

## 档案路径

档案路径英文为File Path 在HTML档案里有时候你需要知道档案的路径在哪里

- Absolute File Path     绝对的   类型网站...
- Relative File Path       相对的   相对你目前的folder 你档案的位置

```html
<img width="500" height="300" src="https://images.unsplash.com/photo-1614583225683-69db8b9965e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1614&q=80" alt="city1">
```

这种就是一个绝对档案路径 这里直接是图片的路径网址

或者相对路径里的某文件夹中

```html
<img width="500" height="300" src="./img/city.jpg" alt="city1">
```

目录切换的方式

```html
<img width="500" height="300" src="../img/city.jpg" alt="city1">
```

这里的 . 就是切换目录的上一层 你可以用它来获取上一层的东西

## HTML List

- `<ol><ol/>`    1. 2. 3.
- `<ul></ul>`    点 点 点

```html
		<ol>
        <li>2018</li>
        <li>2019</li>
    </ol>

    <ul>
        <li>2018</li>
        <li>2019</li>
    </ul>
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/91fa3723-e166-438c-bcd6-4b167165d638/Untitled.png](https://cdn.discordapp.com/attachments/705034399200313465/904192743843196958/unknown.png)

## Table表格

四个表格的标签  做表格一定需要的

- `<table>`
- `<tr>`   table row
    
                                              ➞ row                  🠗 column
    
- `<th>`  table heading
- `<td>`  table data
- `<thead>` (可选)
- `<tbody><tfoot>`（可选）

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e5f5292-c382-446f-aabe-b98d1ae3e640/Untitled.png](https://cdn.discordapp.com/attachments/705034399200313465/904192869378707476/unknown.png)

```html
<table>
        <tr>
            <th>Name1</th><th>Name2</th><th>Name3</th>
        </tr>
        <tr>
            <td>1</td><td>2</td><td>3</td>
        </tr>
        <tr>
            <td>4</td><td>5</td><td>6</td>
        </tr>
</table>
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e3d81d5-a09d-474b-a968-5c74c775e6b3/Untitled.png](https://cdn.discordapp.com/attachments/705034399200313465/904192993936949268/unknown.png)

那么这还不够好看 所以我们现在要用CSS来完善它 (head 里)

```html
<style>
        table,th,td{
            border-collapse: collapse;
            border: 1px solid black;
        }
</style>
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/044ec9cb-7471-4195-9b2f-163b44b8bc43/Untitled.png](https://cdn.discordapp.com/attachments/705034399200313465/904193023708102656/unknown.png)

或者更宽一点的表格线

```html
<style>
        table,th,td{
            border-collapse: collapse;
            border: 1px solid black;
        }
        th,td{
            padding: 0.25rem;
        }
    </style>
```

如果我们想再在上面加一个total

```html
<tr>
     <th>Total</th>
</tr>
```

但是显示的实际情况是这样的

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6ea5d84-c716-4186-962f-ef5f4465b8b6/Untitled.png](https://media.discordapp.net/attachments/705034399200313465/904193199160066088/unknown.png)

这时候就要用到th的一个特性 占格

占格 表格占格

```html
<th colspan="3">Total</th>
```

这里是占了 3 格子 因为 th 一共有 3 个 结果

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77d4028d-c64a-4dc7-9bb5-d351c0c9c209/Untitled.png](https://media.discordapp.net/attachments/705034399200313465/904193226313969805/unknown.png)

这里的colspan是 向下 扩展 的

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88370896-246c-429d-b673-cd47ec0d9aa8/Untitled.png](https://cdn.discordapp.com/attachments/705034399200313465/904193252889083904/unknown.png)

所以这里colspan 3 的情况下 就拿到了所有的格子

而且既然有colspan的话 那么就肯定有 rowspan

最后的 tfoot

```html
<tfoot>
            <td>Total</td><td>7</td><td>9</td>
</tfoot>
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/234ffdc4-66af-43e4-a47e-d4b77f77b365/Untitled.png](https://cdn.discordapp.com/attachments/705034399200313465/904193296904093716/unknown.png)
