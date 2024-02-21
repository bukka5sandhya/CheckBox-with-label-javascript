let checkboxWithLabelContainerEle = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainerEle.classList.add("text-center" ,"p-5");

let inputEle = document.createElement("input");
inputEle.id = "checkbox";
inputEle.type ="checkbox";
checkboxWithLabelContainerEle.appendChild(inputEle);

let labelEle = document.createElement("label");
labelEle.id = "checkboxLabel";
labelEle.setAttribute("for","chexkbox");
labelEle.textContent ="Click Me";
checkboxWithLabelContainerEle.appendChild(labelEle);
