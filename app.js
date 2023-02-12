var list=document.querySelector('ul')
var input=document.querySelector('input')
var button=document.getElementById('add')
const callbackfun=()=>{
    const inputValue=input.value
    const element=document.createElement('li')
    const textNode=document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)
}
button.addEventListener('click',callbackfun)