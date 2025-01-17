# 前端学习Day4

因为这节内容都是些对于选择器的补充，还有一些样式的介绍，对于我代码本身无多大变化，但仍然用了许多时间阅读资料学习
先引用IFE的一篇精选笔记

背景 background

    背景指的是元素内容、内边距和边界下层的区域
    (可用background-clip修改)
    属性	说明	值	备注
    background-color	背景色		建议加上，作为后备，以防背景图像无法加载
    background-image	背景图像	url(...)、渐变: linear-gradient(to 渐变的方向,开始的颜色,结尾的颜色)	渐变可以在中途选择其他的点
    background-repeat	背景重复	repeat(默认)、repeat-x、repeat-y、no-repeat	
    background-position	背景定位	关键字、百分数值、长度值	坐标系为x坐标从左到右,y坐标从上到下;可以用于雪碧图
    background-attachment	背景附着	scroll(默认)、fixed	
    background-size	背景图像大小	长度值、百分数值、cover、contain	
    background	背景简写		可按任意顺序放置
    边框 border
    属性	说明	值	备注
    border	边框简写	[border-width border-style border-color /inherit]	三角形和梯形可以使用border+transparent来做
    border-style	边框样式	none、hidden、dotted、dashed、solid、double、(groove、ridge、inset、outset、)inherit	样式预览
    border-width	边框宽度		不支持百分比、默认为medium(3px)
    border-color	边框颜色	透明:transparent	默认颜色同color
    border-radius	边界圆角		
    列表 list
    属性	说明	值	备注
    list-style-type	列表标志	标志值	
    list-style-image	列表项图像	url()	可用background代替
    list-style-position	列表项位置	inside(文本内文本环绕)、outside(默认)、inherit	
    list-style	列表简写	顺序:list-style-type list-style-position list-style-image(可省略某个值)
    
    连接 a
    根据所处状态决定样式
    a:link {color:#FF0000;}        /* 未被访问的链接 */
    a:visited {color:#00FF00;}    /* 已被访问的链接 */
    a:hover {color:#FF00FF;}    /* 鼠标指针移动到链接上 */
    a:active {color:#0000FF;}    /* 正在被点击的链接 */
    注意: 一定要按照LVHA的顺序指定！

可用background为连接增加小图标

制作导航条的方法

选择器(2)
选择器参考手册

分组和继承
分组: 选择器用逗号分开，被分组的选择器可以分享相同的声明
继承: 正常情况下，子元素从父元素继承属性
但也会出现特殊情况，只能通过组选择器来对待
派生选择器
/* 根据文档的上下文关系来确定某个标签的样式 */
li p {

}
伪类选择器
CSS 伪类用于向某些选择器添加特殊的效果。
CSS 伪元素用于将特殊的效果添加到某些选择器。

两者区别在于: 伪类的效果可以通过添加一个实际的类来达到，而伪元素的效果则需要通过添加一个实际的元素才能达到

伪类
伪类

p:first-child指的是p元素是某元素的第一个子元素

组合器
Combinators	Select

    A,B	匹配满足A（和/或）B的任意元素（参见下方 同一规则集上的多个选择器）.
    A B	匹配任意元素，满足条件：B是A的后代结点（B是A的子节点，或者A的子节点的子节点）
    A > B	匹配任意元素，满足条件：B是A的直接子节点
    A + B	匹配任意元素，满足条件：B是A的下一个兄弟节点（AB有相同的父结点，并且B紧跟在A的后面）
    A ~ B	匹配任意元素，满足条件：B是A之后的兄弟节点中的任意一个（AB有相同的父节点，B在A之后，但不一定是紧挨着A)

层叠

    ①找出所有相关的规则，这些规则包含于一个给定元素匹配的选择器
    ②对显式权重对所有声明排序。标志!important的规则的权重要高于没有!important标志的规则。创作人员的样式>读者的样式。有!important的读者样式强于其他所有样式（读者的重要声明>创作人员的重要声明>创作人员的普通声明>读者的普通声明>用户代理声明）
    ③按特殊性排序，特殊性高的优先
    ④按出现顺序排序，越后出现的权重就越大。

重要性

    !important总是优先于其他规则
特殊性

    内联样式1000;
    ID属性100;
    类属性/属性选择/伪类010;
    元素/伪元素001

---
下面是我的代码

    <!Doctype html>
    <html>

    <head>
        <title>我的简历</title>
        <style>
            body {
                background-image: url(https://cdn.52ppt.com/ypppt/beijing/2015-06/0pcnmpou2mf.jpg);
                background-size: cover;
                background-attachment: fixed;
            }

            #title {
                text-align: center;
                font-family: "黑体";
                color: #22c3aa;
                text-shadow: 1px 1px 2px black;
            }

            #name {
                /* text-align: center; */
                color: #443387;
            }

            #my {
                color: #122311;
                font-style: italic;
                font-weight: lighter;
                font-size: 1rem;
            }

            #EmailAndTel {
                /* text-align: center; */
                color: #332266;
            }

            a:link#myE {
                text-decoration: none;
                background-color: bisque;
                color: #332266;
            }

            a:visited#myE {
                border-bottom: 1px solid black;
                background-color: bisque;
                color: #1f153d;
            }
            a:focus#myE {
                border-bottom:1px solid tomato;
            }
            a:hover#myE {
                text-decoration: underline;
                background-color: transparent;
                color: white;
            }

            a:active#myE {
                text-decoration: none;
                background-color: transparent;
                color: black;
            }

            #myI {
                line-height: 2rem;
            }

            #degree {
                /* text-align: center; */
                color: #332266;
            }

            #experience {
                text-align: center;
                color: #22c3aa;
            }

            #introduction {
                text-align: center;
                color: #22c3aa;
            }

            h5 {
                text-indent: 0.4rem;
            }

            #box_h5 {
                text-align: center;
                color: black;
                font-weight: normal;
                background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567574026993&di=c4e68e20466b9054f4f4894e0c779180&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F07%2F14%2F1257871ba09b372.jpg);
                background-size: contain;
                background-repeat: no-repeat;
                background-position: 50%, 50%;
            }

            .box {
                border: 10px solid black;
                height: 100px;
                background: burlywood;
                border-width: 10px 15px 20px 25px;
            }

            .description {
                text-align: left;
            }

            .person {
                text-align: left;
            }

            ul {
                list-style-type: circle;
                list-style-position: inside;
            }

            ol {
                list-style-type: lower-roman;
                list-style-position: inside;
            }
        </style>
    </head>

    <body>
        <h1 id="title">简历</h1>
        <div class="person">
            <h3 id="name">姓名: <span id="my">我名字</span></h3>
            <p id="EmailAndTel">
                <!-- Email: <a href="mailto:1234567@163.com?subject=Hello%20again" id="myE">1234567@163.com</a><br /> -->
                Email: <a href="https://baidu.com" target="_blank" id="myE">1234567@163.com</a><br />
                Tel: 12345678901
            </p>
            <p id="degree">
                学历：本科就读于百度前端学院
            </p>
        </div>
        <hr />

        <h3 id="experience">项目经验</h3>
        <h5>项目1</h5>
        <ul class="description">
            <li>xxxx1</li>
            <li>xxxx2</li>
            <li>xxxx3</li>
        </ul>
        <h5>项目2</h5>
        <ol class="description">
            <li>xxxx1</li>
            <li>xxxx2</li>
            <li>xxxx3</li>
        </ol>
        <hr />

        <h3 id="introduction">个人简介</h3>
        <p id="myI">我不断地完善自己，提高自身素质。我在学好专业课与公共课的基础上，
            还阅读了超多的课外书籍，不断地增加新知识，陶冶情操开拓视野。不仅仅仅如此，
            我还用心参加社会实践活动，和各种文体活动，培养了我务必的组织与社交潜力。
            本人热爱篮球羽毛球跑步下棋唱歌。
            我不断地完善自己，提高自身素质。我在学好专业课与公共课的基础上，
            还阅读了超多的课外书籍，不断地增加新知识，陶冶情操开拓视野。不仅仅仅如此，
            我还用心参加社会实践活动，和各种文体活动，培养了我务必的组织与社交潜力。
            本人热爱篮球羽毛球跑步下棋唱歌。</p>
        <hr />

        <h3 id="introduction">盒子测试</h3>
        <div class="box">
            <h5 id="box_h5">这是一个盒子</h5>
        </div>
    </body>

    </html>