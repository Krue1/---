function drawLineChart(lineData) {
    //定义好折线图绘制区域的高度，宽度，轴的高度，宽度
    let canvas = document.querySelector("#canvas");
    //清除上一张画布
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // ctx.scale(0.7,0.7);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.font="16px Arial";
    //x axis
    ctx.beginPath();
    ctx.moveTo(10, 310);
    ctx.lineTo(610, 310);
    ctx.stroke();
    let xInterval = 60;
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(xInterval, 310);
        ctx.lineTo(xInterval, 316);
        ctx.stroke();
        ctx.fillStyle = "#000";
        ctx.fillText(i+1+"月",xInterval-10,338);
        xInterval += 40;
    }

    //y axis
    let max = Math.max.apply(null, lineData);
    ctx.beginPath();
    ctx.moveTo(20, 59);
    ctx.lineTo(20, 320);
    ctx.stroke();
    let yInterval = 260;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(8, yInterval);
        ctx.lineTo(20, yInterval);
        ctx.stroke();
        yInterval -= 50;
    }

    //定义好每一个数据点的直径，颜色，线的颜色，宽度
    let dotR = 3;
    ctx.lineWidth = 2;
    ctx.fillStyle = "#82a4f3";
    ctx.strokeStyle = "#82a4f3";

    let proportion = 250 / max;
    let last = [];
    for (let i in lineData) {
        ctx.beginPath();
        ctx.arc(60 + 40 * i, 310 - lineData[i] * proportion, dotR, 0, Math.PI * 2, true);
        ctx.fill();
        if (i !== 0) {
            ctx.beginPath();
            ctx.moveTo(last[0], last[1]);
            ctx.lineTo(60 + 40 * i ,310 - lineData[i] * proportion);
            ctx.stroke();
        }
        last[0] = 60 + 40 * i ;
        last[1] = 310 - lineData[i] * proportion;
    }
}