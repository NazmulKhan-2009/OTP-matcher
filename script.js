const pinDisplay = document.getElementById("pin");
const numberDisplay = document.getElementById("display");
const pinButton = document.querySelector(".generate-btn");
const submitBtn = document.querySelector(".submit-btn");
// const timeRemain=document.querySelector(".time-remain");
const tryLeft = document.querySelector(".action-left");
const wrongNum = document.getElementById("wrong");
const rightNum = document.getElementById("right");

let count=3;

// Event on PIN Generate Button

pinButton.addEventListener("click", () => {
let ranNumber=Math.floor(Math.random()*(10000-1000)+1000) 
pinDisplay.value=ranNumber;
wrongNum.style.display="none";
rightNum.style.display="none";
numberDisplay.value="";
tryLeft.innerHTML=`${count} try left`;

})
  
// Number Pad
number = (x)=>{
  numberDisplay.value= numberDisplay.value+x ;
}
// backspace Number from Display
backSpace = ()=>{
  let value=numberDisplay.value
  numberDisplay.value=value.substr(0, value.length - 1);
}
// Number clear from Display
clearNum = () =>{
  numberDisplay.value= "";
}

// Event on Submit 
submitBtn.addEventListener("click", ()=>{
  if(pinDisplay.value=== ""){
      alert("Generate PIN First");
  }else if(numberDisplay.value === "" ){
    alert("Inter your PIN");
  }else{
    if(pinDisplay.value === numberDisplay.value){
      rightNum.style.display="block";
      wrongNum.style.display="none";
      numberDisplay.value="";
      pinDisplay.value="";
  
    }else{
      wrongNum.style.display="block";
      rightNum.style.display="none";
      numberDisplay.value="";
      
      if(count>0){
        count--;
        tryLeft.innerHTML=`${count} try left` ;
        if(count===0){
          pinDisplay.value="";
          count=3 ;
                
          }
        }   
      }
    }  
  }
)