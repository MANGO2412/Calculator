//here, all functions are defined 
/**this function is to show all numbers and all math operators  */
function display(e){
    const {textContent}=e.target;

    if(textContent=="+" || textContent=="-"|| textContent=="x" || textContent=="/"){
        view.textContent+=","+textContent+",";
    }else{
        view.textContent+=textContent;
        
        if(view.textContent.split(",").includes("+",) ||view.textContent.split(",").includes("-")  || view.textContent.split(",").includes("/")  ||view.textContent.split(",").includes("x")   ){
          viewResult.textContent=math(view.textContent.split(","));
        }
     
    }

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

function mathOperators(numA,op,numB){
     let result=0;
     numA=Number(numA);
     numB=Number(numB);
     switch (op) {
        case "x":
             result=numA*numB
            break;
        case "/":
            result=numA/numB
            break;
        case "+":
            result=numA+numB;
            break;
        case "-":
             result=numA-numB;
            break;
        default:
            break;
     }
     return result
}

function math(numberValues){
   let arrayValues=numberValues, result=null;
   while(!(result  != null)){
        if(arrayValues.includes("x") || arrayValues.includes("/")){

           for (let i = 0; i < arrayValues.length; i++) {
              if(arrayValues[i]== "x"|| arrayValues[i] == "/"){
                  let res=mathOperators(arrayValues[i-1],arrayValues[i],arrayValues[i+1])
                  arrayValues.splice(i-1,3,res);  
                  break;
              }
           }
        }else{
            for(let i=0;i<arrayValues.length;i++){
                if(arrayValues[i]== "+" || arrayValues[i]== "-"){
                    let res=mathOperators(arrayValues[i-1],arrayValues[i],arrayValues[i+1])
                    arrayValues.splice(i-1,3,res);
                    i=0
                } 
            }
            
            result=Number(arrayValues.join(""))
        }
   }
   return result;
}




//here, all variables are defined
const view=document.querySelector(".cal__viewOperation")//this variable is used to show numbers and operatores on the calculator
const viewResult=document.querySelector(".cal__viewResult")
const clearOne=document.getElementById("clearOne");//this variable is used to get the btn AC
const clearAll=document.getElementById("clearAll");//this varaible is used to get the btn C
const igual=document.getElementById("igual");
const btnNumbers=document.querySelectorAll(".cal__number");//this variable are number buttons to press the number will be pressed to do the math operation


//here is  the calculator's logic
btnNumbers.forEach(elem=>elem.addEventListener('click',display))

clearOne.addEventListener("click",clear);
clearAll.addEventListener("click",clear);
