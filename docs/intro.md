---
sidebar_position: 1
sidebar_label: '介绍文档'
---

# 介绍文档
下载文档内容后 可以通过以下命令运行本地服务器
```bash
yarn start (确保你这么做前先 cd 到目录)
```

## 规则写法
目前可以放入 Markdown 文件和 MDX 文件的位置在 `Notebook/blog` 和 `Notebook/docs` 中, 那么具体的规则也很简单, 尽量不要在 Markdown 中使用 **HTML** 语法, 尽量不要出现任何 `<X>` 这样的字符, 就算出现也可以用 **``** 来解决, 或者注释和使用代表列包裹

## 文件要求
在 `docs` 中的文件可以在 Markdown 的开头时使用以下的代码来出主题和位置
```md
---
sidebar_position: 1
sidebar_label: '介绍文档'
---
```
这个例子其实就是我们现在的介绍文档的写法, 第一个行代码表示位置排序, 第二行代码代表了主题和网页中的显示, 比如我们例子写的是 **文档介绍** 那么我们所看到的网页里显示的题目就是文档介绍

## 文档要求
当然也还有一类情况, 比如你需要写一个类, 这个类里面包含了很多小的 Markdown 文件, 那么我们可以通过创建文件夹来完成此操作. 但是文件夹中需要包含文件 `_category_.json` 和至少一个可读的 Markdown 文件, 这样你才能看到类别显示出来
```md
{
  "label": "编程语言",
  "position": 2
}
```
那么这里其实也很好解释, 位置 **2** 代表了它在我们刚刚例子中的 **介绍文档** 的下方, 而第一行代码则代表了显示的名称. 至于为什么这么写其实主要是为了不妨碍文件夹中其他的 Markdown 文件排序, 或者你想做一个类中类你也会明白我的意思. 如果我们不有一个专门的文件来说明这个类的位置那么又能写在哪里呢? 毕竟文件夹里的 Markdown 文件也需要 `sidebar_position` 来进行排序

## 文档包含
以下类别每个类里都会有一个或者多个目录, 在添加新的 Markdown 文件时请尽量多目录. 不要弄的一个文件里几万几十万行代码或者说明, 这样会造成一些延迟方面的问题

`编程语言 - 网页编程 - 移动编程 - 桌面编程 - 游戏编程 - 数据管理 - 项目列表`

## 目前需定
目前我们需要确定很多的地方应该写成什么或者换成什么, 比如网站的详细说明, 如下是我临时写来凑字的, 如果有更好的建议可以自己去替换一下, 文件在 `src/pages/index.js` 之中的 **description**
```html
      <meta property="og:description" 
      content="Notebook - Made by G7M7T1 and Xpakeb13 and AsheOne - Welcome to the website, here are our study notes and our blog"/>
```