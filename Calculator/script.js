var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

operand1 = "";
operand2 = "";
operator = null;


answer = '';
display.innerText = answer;

function clicked(){
    var curr = this.getAttribute('data-value');

    if (curr == '+' || curr == '-' || curr == '/' || curr == '*'){
        
        if (operand2 != ''){
            operand1 = eval (operand1 + ' ' + operator + ' ' + operand2);
            operand2 = '';
            answer = operand2;
        }
        operator = curr;
    }
    else if(curr == 'a/c'){
        
        answer = '';
        operand1 = answer;
        operand2 = "";
        operator = null;
    }
    else if (curr == '+/-'){
        if (operand2 == ''){
            operand1 = -operand1;
            answer = operand1;
            
        }else{
            operand2 = -operand2;
            answer = operand2;
        }
    }
    else if (curr == '%'){
        if (operand2 == ""){
            operand1 = eval(operand1 / 100);
            answer = operand1;

        }else{
            operand2 = eval(operand2 / 100);
            answer = operand2;
        }
    }
    else if (curr == '='){
        operand1 = eval(operand1 + ' ' + operator + ' ' + operand2);
        answer = operand1;
        operand2 = "";
        operator = null;
    }
    else if(operator == null){
        operand1 = (operand1+curr);
        answer = operand1;
        
    }
    else {
        operand2 = (operand2+curr);

        answer = operand2;
        
    }
    console.log(curr, operand1, operator, operand2, "ans: ",answer);
    display.innerText = answer;

}

for (var i=0; i< buttons.length; i++ ){
    buttons[i].addEventListener('click', clicked);
}