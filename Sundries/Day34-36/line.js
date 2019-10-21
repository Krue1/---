function drawLineChart(lineData) {
    //定义好折线图绘制区域的高度，宽度，轴的高度，宽度
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");
    //ctx.scale(0.5,0.5);
    //x axis
    ctx.beginPath();
    ctx.moveTo(100, 450);
    ctx.lineTo(700, 450);
    ctx.stroke();
    let xInterval = 150;
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(xInterval, 450);
        ctx.lineTo(xInterval, 456);
        ctx.stroke();
        xInterval += 40;
    }

    //y axis
    ctx.beginPath();
    ctx.moveTo(110, 50);
    ctx.lineTo(110, 460);
    ctx.stroke();
    let yInterval = 370;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(110, yInterval);
        ctx.lineTo(104, yInterval);
        ctx.stroke();
        yInterval -= 80;
    }

    //定义好每一个数据点的直径，颜色，线的颜色，宽度
    let dotR = 3;
    ctx.lineWidth = 2;
    ctx.fillStyle = "#82a4f3";
    ctx.strokeStyle = "#82a4f3";

    let max = Math.max.apply(null, lineData);
    let proportion = 400 / max;
    let last = [];
    for (let i in lineData) {
        ctx.beginPath();
        ctx.arc(150 + 40 * i, 450 - lineData[i] * proportion, dotR, 0, Math.PI * 2, true);
        ctx.fill();
        if (i !== 0) {
            ctx.beginPath();
            ctx.moveTo(last[0], last[1]);
            ctx.lineTo(150 + 40 * i ,450 - lineData[i] * proportion);
            ctx.stroke();
        }
        last[0] = 150 + 40 * i ;
        last[1] = 450 - lineData[i] * proportion;
    }
}
drawLineChart([120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]);