

var input = "", temp = 0;

function num(e){
      let screen = document.getElementById("inputN");
      temp = e;
      if(temp == "x"){
           temp = "*";
      }
      input += temp;
      console.log("Text is ",input);
      screen.value = input;
}        
function operand(o){
      let screen = document.getElementById("inputN");
      
      switch(o){
           case 'AC': input = "";
                      screen.value = input;
           break;      
           case  '=': input = eval(input);
                      screen.value = input; 
           break;
           case  'x2': input = input+"*"+input;
                       screen.value = eval(input);
           break;     
           case  'SQ': input = Math.sqrt(input);
                       screen.value = input; 
      } 
}