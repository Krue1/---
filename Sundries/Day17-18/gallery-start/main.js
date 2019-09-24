const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
function replaceImg(e) {
    var newSrc = e.target.getAttribute("src");
    displayedImage.setAttribute("src", newSrc);
}

for (var i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i + ".jpg");
    newImage.addEventListener("click", replaceImg);
    thumbBar.appendChild(newImage);
}

/* 编写 变亮/变暗 按钮 */
function btnFunc(e) {
    var btnClass = e.target.getAttribute("class");
    if (btnClass == "dark") {
        e.target.setAttribute("class", "light");
        e.target.textContent = "变亮";
        e.target.style.color = "#ddd";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        e.target.setAttribute("class", "dark");
        e.target.textContent = "变暗";
        e.target.style.color = "#111";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
btn.addEventListener("click", btnFunc);