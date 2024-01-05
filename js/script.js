var openFormBtn = document.getElementById("open-form-button"),
    formSection = document.getElementById("form-section");

openFormBtn.addEventListener("click", ()=>{
    formSection.classList.toggle("display-form")
})

var darkLightMode = document.getElementById("dark-light-mode");
darkLightMode.addEventListener("click", ()=>{
    if(darkLightMode.checked)
        formSection.style.backgroundColor= "gray"
    else
        formSection.style.backgroundColor= "silver"
})

var single = document.querySelector("#single"),
    married = document.querySelector("#married"),
    isMarried= document.querySelector(".isMarried");
married.addEventListener("click", ()=>{
    if(married.checked && !single.checked)
        isMarried.style.display = "block"
})
single.addEventListener("click", ()=>{
    if(single.checked && !married.checked)
        isMarried.style.display= "none"
})

var child = document.getElementById("child"),
    isChildren= document.getElementsByClassName("isChildren")[0];
child.addEventListener("click",()=>{
    if(child.checked)
        isChildren.style.display = "block"
    else
    isChildren.style.display= "none"
})

var plus= document.getElementById("plus"),
    minus= document.getElementById("minus"),
    childrenInputes= document.getElementById("children-inputes")

plus.addEventListener("click",()=>{
    var input= document.createElement("input")
    input.setAttribute("class", "block-input")
    childrenInputes.appendChild(input)
})

minus.addEventListener("click", ()=>{
    if(childrenInputes.hasChildNodes()){
        childrenInputes.removeChild(childrenInputes.children[0])
    }
})