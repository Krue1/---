function drawBarChart(barData) {
    var nameSpace = 'http://www.w3.org/2000/svg';
    var max = Math.max.apply(null, barData);
    var proportion = 300 / max;
    var interval = 87; //每根柱子开始的x坐标
    var xx = 1;
    var columnStyle = 'fill: rgb(101,161,215)';
    let embedSVG = document.querySelector("svg");
    //清除之前画的柱
    let previousRect = embedSVG.querySelectorAll("rect");
    for (let i = 0; i < previousRect.length; i++) {
        embedSVG.removeChild(previousRect[i]);
    }
    //关键代码：embedSVG的赋值。最后的getElementById('svgColumn')，是svg文件中，svg标签的id
    for (let i in barData) {
        var rect = document.createElementNS(nameSpace, 'rect');//creat新的svg节点，rect。
        rect.style = columnStyle; //给rect节点设置style
        height = barData[i] * proportion;
        rect.setAttribute('width', '40'); //使用setAttribute来设置rect节点属性
        rect.setAttribute('height', height);
        rect.setAttribute('x', interval);
        rect.setAttribute('y', 435.5 - height);
        embedSVG.appendChild(rect); //将这个新的rect节点 添加到svg节点里
        interval = interval + 73 + xx;
        xx += 0.2;
    }
}