let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
   item.addEventListener('click', (x)=> {
       buttonText = x.target.innerText;
       console.log('Button text is ', buttonText);
   

   if(buttonText == 'C'){
        screenValue = "";
        screen.value = screenValue;
    }
   else if(buttonText == '='){
        screen.value = eval(screenValue);
    }
    else if(buttonText == '%'){
        buttonText = '/100';
        screenValue += buttonText;
        screen.value = screenValue;
    }
    
    else{
        screenValue += buttonText;
        screen.value = screenValue;
    }


   })
}