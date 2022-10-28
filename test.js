buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {
            if (memArr == 0 && numA.length < 1) { //if you don't want to use 0 as numA
                memArr = [];
            };

            if (button.value == "." && !memArr.includes(".")) { //using decimal
                memArr.push(button.value);
                console.log("decimal", button.value)

            } else if (button.value != ".") {
                memArr.push(Number(button.value));
                console.log("memarr", memArr)
            };

            if (typeof operator == "string") { //if numA is declared
                display = Array.from(display);
                display.push(button.textContent);
                console.log("display b", display)
                calcText.textContent = display.join("");
                console.log("calcText b", calcText.textContent)

                //decimal still appears multiple times in b, but not in a

            } else { //if numA and numB are not declared
                display = memArr;
                console.log("display a", display)

                calcText.textContent = display.join("");
                console.log("calcText a", calcText.textContent)
            };

        } else if (button.classList.contains("operator") && memArr.length > 0) {
            operator = button.id;
            numA = Number(memArr.join(""));
            memArr = [];

            display = Array.from(display);
            display.push(button.textContent);
            console.log("display op", display)
            calcText.textContent = display.join("");
            console.log("calcText op", calcText.textContent)

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

                console.log("result memarr", memArr)
            };
        };
    };
});