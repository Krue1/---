function addCheckBoxFunc(wrapper) {
    wrapper.addEventListener("click", function (e) {
        let t = e.target;
        if (t.type === "checkbox") {
            let value = t.value;
            let inputs = wrapper.querySelectorAll("input");
            if (value === "全选" && t.checked === true) {
                for (let i = 0; i < inputs.length - 1; i++) {
                    // inputs[i].setAttribute("checked", "checked");
                    inputs[i].checked = true;
                }
            } else {
                if (isCheckAll(wrapper)) {
                    // inputs[inputs.length-1].setAttribute("checked","checked");
                    inputs[inputs.length - 1].checked = true;
                } else {
                    inputs[inputs.length - 1].checked = false;
                }
                //若当前checkbox取消勾选后没有任何勾选项，则不允许取消勾选
                if (isNoCheck(wrapper)) {
                    t.checked = true;
                }
            }
            renderTable();
        }
    });

    if (wrapper.getAttribute("id") === "region-radio-wrapper") {
        wrapper.addEventListener("click", setHash1);
    }

    if (wrapper.getAttribute("id") === "product-radio-wrapper") {
        wrapper.addEventListener("click", setHash2)
    }

}