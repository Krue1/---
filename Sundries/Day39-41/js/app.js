addCheckBoxFunc(regionWrapper);
addCheckBoxFunc(productWrapper);
renderTable();

let regionCheckboxs = regionWrapper.querySelectorAll("input");
let productCheckboxs = productWrapper.querySelectorAll("input");

function getHash() {
    let hashContent = decodeURIComponent(location.hash).slice(1).split("_");
    for (let i = 0; i < 2; i++) {
        if (!hashContent[i]) {
            hashContent[i] = "";
        }
    }
    return hashContent;
}

function setHash1() {
    let hashContent = getHash();
    let hashContent1 = [];
    let hashContent2 = hashContent[1].split(",");
    location.hash = "";
    for (let i = 0; i < regionCheckboxs.length; i++) {
        if (regionCheckboxs[i].checked) {
            hashContent1.push(regionCheckboxs[i].value);
        }
    }
    for (let i = 0; i < hashContent1.length; i++) {
        if (i === hashContent1.length - 1) {
            location.hash = location.hash + hashContent1[i] + "_";
        } else {
            location.hash = location.hash + hashContent1[i] + ",";
        }

    }
    for (let i = 0; i < hashContent2.length; i++) {
        if (i === hashContent2.length - 1) {
            location.hash = location.hash + hashContent2[i];
        } else {
            location.hash = location.hash + hashContent2[i] + ",";
        }
    }
}

function setHash2() {
    let hashContent = getHash();
    let hashContent1 = hashContent[0].split(",");
    let hashContent2 = [];
    location.hash = "";
    for (let i = 0; i < productCheckboxs.length; i++) {
        if (productCheckboxs[i].checked) {
            hashContent2.push(productCheckboxs[i].value);
        }
    }
    for (let i = 0; i < hashContent1.length; i++) {
        if (i === hashContent1.length - 1) {
            location.hash = location.hash + hashContent1[i] + "_";
        } else {
            location.hash = location.hash + hashContent1[i] + ",";
        }
    }
    for (let i = 0; i < hashContent2.length; i++) {
        if (i === hashContent2.length - 1) {
            location.hash = location.hash + hashContent2[i];
        } else {
            location.hash = location.hash + hashContent2[i] + ",";
        }
    }
}

function renderPage() {
    let hashContent = getHash();
    let hashContent1 = hashContent[0].split(",");
    let hashContent2 = hashContent[1].split(",");
    for (let j = 0; j < regionCheckboxs.length - 1; j++) {
        regionCheckboxs[j].checked = false;
    }
    for (let j = 0; j < productCheckboxs.length - 1; j++) {
        productCheckboxs[j].checked = false;
    }
    for (let i = 0; i < hashContent1.length; i++) {
        for (let j = 0; j < regionCheckboxs.length; j++) {
            if (hashContent1[i] === regionCheckboxs[j].value) {
                regionCheckboxs[j].checked = true;
                break;
            }
        }
    }
    for (let i = 0; i < hashContent2.length; i++) {
        for (let j = 0; j < productCheckboxs.length; j++) {
            if (hashContent2[i] === productCheckboxs[j].value) {
                productCheckboxs[j].checked = true;
                break;
            }
        }
    }
}
window.addEventListener("hashchange", renderPage);
renderPage();