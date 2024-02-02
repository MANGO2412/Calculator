//here, all functions are defined 
/**this function is to show all numbers and all math operators  */
function display(e){
    const {textContent}=e.target;
    view.textContent+=textContent;
}
/**this function is used to clear the view  when the  user make a mistake*/
function clear(e){
    const {textContent}=e.target;
   
    if(textContent==='C')
        view.textContent=''
    else{
      let arr= view.textContent.split("");
      arr.pop();
      view.textContent=arr.join("")
    }
           
}

//here, all variables are defined
const view=document.querySelector(".cal__viewOperation")//this variable is used to show numbers and operatores on the calculator
const clearOne=document.getElementById("clearOne");//this variable is used to get the btn AC
const clearAll=document.getElementById("clearAll");//this varaible is used to get the btn C
const btnNumbers=document.querySelectorAll(".cal__number");//this variable are number buttons to press the number will be pressed to do the math operation



//here is  the calculator's logic
btnNumbers.forEach(elem=>elem.addEventListener('click',display))


clearOne.addEventListener("click",clear);
clearAll.addEventListener("click",clear);
