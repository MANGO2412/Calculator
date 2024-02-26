//here, all functions are defined 

/**this function is to show all numbers and all math operators  */
function display(e){
    const {textContent}=e.target;

    if( ( (textContent=="+" || textContent=="x" || textContent=="/") && view.textContent.length > 0) ||  textContent=="-"){
        view.innerHTML+=`<span class="unable">,</span>`+textContent+`<span class="unable">,</span>`;
    }else if(Number(textContent) || textContent === '0'){
        view.innerHTML+=textContent;
        
        if(view.textContent.split(",").includes("+",) ||view.textContent.split(",").includes("-")  || view.textContent.split(",").includes("/")  ||view.textContent.split(",").includes("x")   ){
          viewResult.textContent=math(view.textContent.split(","));
        }
     
    }

}

/**this function is used to clear the view  when the  user make a mistake*/
function clear(e){
    const {textContent}=e.target;
    if(textContent==='C'){
        view.innerHTML='';
        viewResult.innerHTML="";
    }else{
      let arr= view.innerHTML.split(`<span class="unable">,</span>`).join('').split('');
      arr.pop();

      if(arr.includes('+') || arr.includes('-') || arr.includes('x') || arr.includes('/')  ){
        view.innerHTML=""
        for(let i=0;i<arr.length; i++){
           if(Number(arr[i]))
              view.innerHTML+=arr[i]
           else
             view.innerHTML+=`<span class="unable">,</span>`+arr[i]+`<span class="unable">,</span>`;
        }

        viewResult.textContent=math(view.textContent.split(","));
        
      }else{
        view.innerHTML=arr.join(``)
      }
    }          
}


function showAll(){
    view.innerHTML=viewResult.innerHTML;
    viewResult.innerHTML="";
}


/** This function is  used to do the math operations */
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

/** This function is used to take the array values and get two numers and the operator to do the math operation*/
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
const finalResult=document.getElementById("finalShow");
const btnNumbers=document.querySelectorAll(".cal__btn--show");//this variable are number buttons to press the number will be pressed to do the math operation


//here is  the calculator's logic
btnNumbers.forEach(elem=>elem.addEventListener('click',display))

finalResult.addEventListener("click",showAll)
clearOne.addEventListener("click",clear);//here the event click  is assign to variable Clearone when the user click the button of the variable clearone, it will be executed the fn clear
clearAll.addEventListener("click",clear);//here the event is assign to variable clearAll when the user click the button of the variable clearone, it will be executed the fn clear
