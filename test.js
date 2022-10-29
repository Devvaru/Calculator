buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {
            if (memArr == 0 && numA.length < 1) { //if you don't want to use 0 as numA
                memArr = [];
            };

            if (button.value == "." && !memArr.includes(".")) { //using decimal
                memArr.push(button.value);
                console.log("decimal", button.value)

            } else if (button.value != ".") { //entering numbers into memArr to be added to numA or numB later
                memArr.push(Number(button.value));
                console.log("memArr", memArr)
            };

            if (typeof operator == "string") { //if numA is declared
                display = Array.from(display);

                display.push(button.textContent);
                console.log("display a+b", display)

                calcText.textContent = display.join("");
                console.log("calcText a+b", calcText.textContent)

                //decimal still appears multiple times in b, but not in a

            } else { //if numA and numB are not declared
                display = memArr;
                console.log("display a", display)

                calcText.textContent = display.join("");
                console.log("calcText a", calcText.textContent)
            };

        } else if (button.classList.contains("operator") && memArr.length > 0) {

            if (typeof numA == "number" && typeof operator == "string") {
                
                numB = Number(memArr.join(""));
                console.log("b", numB)

                memArr = operate(operator, numA, numB);
                console.log(memArr)
                display = memArr;
                calcText.textContent = display;

                // if () {
                //     display = Array.from(display);

                //     display.push(button.textContent);
                //     console.log("display op", display)
    
                //     calcText.textContent = display.join("");
                //     console.log("calcText op", calcText.textContent)
                // }
                

                numA = memArr;
                console.log(numA)

                memArr = [];

                operator = button.id;

                numB = [];

            } else {
                numA = Number(memArr.join(""));
                console.log("a", numA)

                operator = button.id;
                memArr = [];

                display = Array.from(display);

                display.push(button.textContent);
                console.log("display op", display)

                calcText.textContent = display.join("");
                console.log("calcText op", calcText.textContent)
            };

        } else if (button.classList.contains("equal") && typeof operator == "string" && memArr.length > 0) {
            numB = Number(memArr.join(""));

            if (operator == "divide" && numB == 0) { //dividing by zero
                memArr = "Uh Oh"
                display = memArr;
                calcText.textContent = display;

                operator = 0;

            } else { //regular operations
                memArr = operate(operator, numA, numB);
                memArr = [Number(+memArr.toFixed(2))];
                display = memArr;
                calcText.textContent = display;

                operator = 0;
                numA = memArr;
                numB = [];

                console.log("result memArr", memArr)
            };
        };
    };
});