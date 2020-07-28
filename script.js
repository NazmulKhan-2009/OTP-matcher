
const pinDisplay=document.getElementById("pin");
const numberDisplay=document.getElementById("display");
const pinButton=document.querySelector(".generate-btn");
const submitBtn=document.querySelector(".submit-btn");
const timeRemain=document.querySelector(".time-remain");
let count=3;

pinButton.addEventListener("click",() => {
let ranNumber=Math.floor(Math.random()*(10000-1000)+1000) 
pinDisplay.value=ranNumber
})
  
number=(x)=>{
  
  numberDisplay.value= numberDisplay.value+x
}

backSpace=()=>{
  let value=numberDisplay.value
  numberDisplay.value=value.substr(0, value.length - 1);
}

clearNum=()=>{
  
  numberDisplay.value=""
}

submitBtn.addEventListener("click",()=>{
  const wrongNum=document.getElementById("wrong");
  const rightNum=document.getElementById("right");


  if(pinDisplay.value===numberDisplay.value){
    rightNum.style.display="block";
    numberDisplay.value=""

  }else{
    wrongNum.style.display="block";
    numberDisplay.value="";
    
    const tryLeft=document.querySelector(".action-left");
    
    
    if(count>0){

      count--;
      tryLeft.innerHTML=`${count} try left`
      if(count===0){
        pinDisplay.value=""
      }
    }
  }
})