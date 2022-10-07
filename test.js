buttons.forEach((button) => {
    button.onclick = () => {

        if (button.classList.contains("number")) {
            if (typeof (memArr[memArr.length - 1]) === "number") {
                console.log("success");
                

                // memArr[memArr.length - 1].toString();
                // memArr.splice([memArr.length-1][0], 1, (button.value));
                // memArr.join();
                // console.log(memArr);


                // memArr[memArr.length - 1][memArr.length].push(Number(button.value));

                // memArr.push(Number(button.value));
                // memArr.join();
            } else {
                
                memArr.push([Number(button.value)]);
               
            };

            calcText.value = memArr.join("");

            console.log(memArr);

            calcText.textContent = button.value;

        } else if (typeof memArr[memArr.length - 1] == "number" && button.classList.contains("operator")) {
            memArr.push(button.textContent);
            calcText.value = memArr.join("");

            console.log(memArr);

            calcText.textContent = button.textContent;

        } else if (typeof memArr[memArr.length - 1] == "number" && button.classList.contains("equal")) {

        } else {
            console.log(button.id);
        };
    };
});