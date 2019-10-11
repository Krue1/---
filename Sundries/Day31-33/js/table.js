let regionWrapper = document.querySelector("#region-radio-wrapper");
let productWrapper = document.querySelector("#product-radio-wrapper");
let table = document.querySelector("#table");
let thead = table.querySelector("thead");
let tbody = table.querySelector("tbody");

function isCheckAll(wrapper) {
    let inputs = wrapper.querySelectorAll("input");
    for (let i = 0; i < inputs.length - 1; i++) {
        if (!inputs[i].checked) {
            return false;
        }
    }
    return true;
}

function isNoCheck(wrapper) {
    let inputs = wrapper.querySelectorAll("input");
    let count = 0;
    for (let i in inputs) {
        if (inputs[i].checked) {
            count++;
        }
    }
    return count === 0;
}

function isSingleCheck(wrapper) {
    let inputs = wrapper.querySelectorAll("input");
    let count = 0;
    for (let i in inputs) {
        if (inputs[i].checked) {
            count++;
        }
    }
    return count === 1;
}

function getData(wrapper) {
    let arr = [];
    let inputs = wrapper.querySelectorAll("input");
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].checked) {
            arr.push(inputs[i].value);
        }
    }
    return arr;
}

function renderTable() {
    //移除当前商品行
    tbody.innerHTML = "";
    let region = getData(regionWrapper);
    let product = getData(productWrapper);

    let regionL = region.length;
    let productL = product.length;
    let th1 = thead.querySelectorAll("tr")[0].querySelectorAll("th")[0];
    let th2 = thead.querySelectorAll("tr")[0].querySelectorAll("th")[1];
    if (regionL === 1 && productL === 1) {
        th1.textContent = "商品";
        th2.textContent = "地区";
        let newRow = document.createElement("tr");
        for (let k in sourceData) {
            if (sourceData[k].product === product[0] && sourceData[k].region === region[0]) {
                let newTd = document.createElement("td");
                newTd.textContent = sourceData[k].product;
                newRow.appendChild(newTd);
                newTd = document.createElement("td");
                newTd.textContent = sourceData[k].region;
                newRow.appendChild(newTd);
                for (let z in sourceData[k].sale) {
                    let newTd = document.createElement("td");
                    newTd.textContent = sourceData[k].sale[z];
                    newRow.appendChild(newTd);
                }
                break;
            }
        }
        tbody.appendChild(newRow);
    } else if (regionL === 1 && productL !== 1) {
        th1.textContent = "地区";
        th2.textContent = "商品";
        for (let j = 0; j < productL; j++) {
            let newRow = document.createElement("tr");
            if (j === 0) {
                let newTd = document.createElement("td");
                newTd.textContent = region[0];
                newTd.setAttribute("rowspan", productL);
                newRow.appendChild(newTd);
            }
            for (let k in sourceData) {
                if (sourceData[k].product === product[j] && sourceData[k].region === region[0]) {
                    let newTd = document.createElement("td");
                    newTd.textContent = sourceData[k].product;
                    newRow.appendChild(newTd);
                    for (let z in sourceData[k].sale) {
                        let newTd = document.createElement("td");
                        newTd.textContent = sourceData[k].sale[z];
                        newRow.appendChild(newTd);
                    }
                    break;
                }
            }
            tbody.appendChild(newRow);
        }
    } else if (productL === 1 && regionL !== 1) {
        th1.textContent = "商品";
        th2.textContent = "地区";
        for (let j = 0; j < regionL; j++) {
            let newRow = document.createElement("tr");
            if (j === 0) {
                let newTd = document.createElement("td");
                newTd.textContent = product[0];
                newTd.setAttribute("rowspan", regionL);
                newRow.appendChild(newTd);
            }
            for (let k in sourceData) {
                if (sourceData[k].product === product[0] && sourceData[k].region === region[j]) {
                    let newTd = document.createElement("td");
                    newTd.textContent = sourceData[k].region;
                    newRow.appendChild(newTd);
                    for (let z in sourceData[k].sale) {
                        let newTd = document.createElement("td");
                        newTd.textContent = sourceData[k].sale[z];
                        newRow.appendChild(newTd);
                    }
                    break;
                }
            }
            tbody.appendChild(newRow);
        }
    } else {
        th1.textContent = "商品";
        th2.textContent = "地区";
        for (let i = 0; i < productL; i++) {
            let newRow = document.createElement("tr");
            let newTd = document.createElement("td");
            newTd.textContent = product[i];
            newTd.setAttribute("rowspan", regionL);
            newRow.appendChild(newTd);
            for (let j = 0; j < regionL; j++) {
                if (j !== 0) {
                    newRow = document.createElement("tr");
                }
                for (let k in sourceData) {
                    if (sourceData[k].product === product[0] && sourceData[k].region === region[j]) {
                        let newTd = document.createElement("td");
                        newTd.textContent = sourceData[k].region;
                        newRow.appendChild(newTd);
                        for (let z in sourceData[k].sale) {
                            let newTd = document.createElement("td");
                            newTd.textContent = sourceData[k].sale[z];
                            newRow.appendChild(newTd);
                        }
                        break;
                    }
                }
                tbody.appendChild(newRow);
            }
        }
    }
}