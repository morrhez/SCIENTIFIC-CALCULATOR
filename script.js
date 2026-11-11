// selecting the display and buttons of the calculator
let input = document.getElementById("display")
let buttons = document.querySelectorAll("button")

// settting the varibales used in the calculator
let string = "";
let arr = Array.from(buttons);
let calculated = false;

// marking each button respond when clicked
arr.forEach(button => {

    button.addEventListener("click", (e) => {
// checking expressions and showing the answers
        if(e.target.innerHTML == "="){

            try {
                string = string.replace(/π/g, "Math.PI");
                string = string.replace(/\be\b/g, "Math.E");
                string = string.replace(/√\(/g, "Math.sqrt(");
                string = string.replace(/\^/g, "**");
                string = string.replace(/sin\(/g, "Math.sin((Math.PI/180)*");
                string = string.replace(/cos\(/g, "Math.cos((Math.PI/180)*");
                string = string.replace(/tan\(/g, "Math.tan((Math.PI/180)*");
                string = string.replace(/log\(/g, "Math.log10(");
                string = string.replace(/ln\(/g, "Math.log(");

                string = eval(string);
                string = Number(string.toFixed(10));
                input.value = string;

                calculated = true;
            }

            catch {
                input.value = "Error";
                string = "";
                calculated = false;
            }

        }
//clears everything from the display
        else if(e.target.innerHTML == "AC"){

            string = "";
            input.value = string;
            calculated = false;

        }
// removes the last entered character
        else if(e.target.innerHTML == "DEL"){
            if(calculated == true){
                string = "";
                input.value = string;
                calculated = false;
            }

            else {
                string = string.substring(0, string.length-1);
                input.value = string;
            }

        }

        else {
// clearing the previous answer when a new calculation is started
            if(calculated == true){

                if(["+", "-", "*", "/", "^"].includes(e.target.innerHTML)){
                    calculated = false;
                }

                else {
                    string = "";
                    calculated = false;
                }

            }

            string += e.target.innerHTML;
            input.value = string;

        }

    })

})
