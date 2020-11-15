// Select Elements
let buttons= document.querySelectorAll(".buttons span");
let resultSpa=document.querySelector(".results >span");
let input=document.querySelector("#the-input");

// loop for buttons
buttons.forEach((btn)=>{
    btn.addEventListener("click" ,(e)=>{
        if(e.target.classList.contains("check-item")){
            checkItem()
            }
            else if(e.target.classList.contains("add-item"))
            {
              addItem()
            }
        
            else if(e.target.classList.contains("delete-item"))
            {
             deleteItem()
            }
            else{
                showItem()
            }
        })
    })

// check input 
function showEmpty(){
    
    resultSpa.innerHTML="input can't be Empty!"
   
}

function checkItem(){
    if(input.value==""){
        showEmpty()
    }
    else{
      if (localStorage.getItem(input.value)){
          resultSpa.innerHTML=`local storage has the value <span> ${input.value}</span>`
      }
      else{
        resultSpa.innerHTML=`local storage Not contain the value<span> ${input.value}</span>`
      }
    }
}

function addItem(){
    if(input.value==""){
        showEmpty()
    }
    else{
        // set item need key and value arguments
        localStorage.setItem(input.value , "added");
        resultSpa.innerHTML=`local storage Added the value <span> ${input.value}</span>`
        input.value= ""
    } 
}

function deleteItem(){
//  first check if the item is in local or not

if (localStorage.getItem(input.value)){
    localStorage.removeItem(input.value)
    resultSpa.innerHTML=`local storage Removed the value <span> ${input.value}</span>`
    input.value= ""
}
else{
  resultSpa.innerHTML=`local storage Not contain the value<span> ${input.value}</span>`
}
}

function showItem(){

    resultSpa.innerHTML=""

  if(localStorage.length) {

    for (let key of Object.keys(localStorage)) {

       resultSpa.innerHTML += `<span class="keys">${key}</span>`;
  
      }
  }
  else{
    resultSpa.innerHTML="Local storage is Empty !"
  }
}


