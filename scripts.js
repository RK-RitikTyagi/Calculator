let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            if (str === "404") {
                str = "404 Not Found";
                input.value = str;
                console.log(input.value);
            }
            else if(str === "6000"){
                str = "Russian";
                input.value = str;
                console.log(input.value);
            }

            else if(str === "420"){
                str = "Chachi 420";
                input.value = str;
                console.log(input.value);
            }
            else if(str === "2"){
                str = "2min-Maggie";
                input.value = str;
                console.log(input.value);
            }
            else if(str === "1+"){
                str = "OnePlus";
                input.value = str;
                console.log(input.value);
            }
            else if(str === "69"){
                str = "69 Position";
                input.value = str;
                console.log(input.value);
            }
            else if(str === "71"){
                str = "Doggy Style";
                input.value = str;
                console.log(input.value);
            }


            else {
                str = eval(str);
                input.value = str;
            }
        }

        else if(e.target.innerHTML == 'AC'){
            str = "";
            input.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            input.value = str;
        }



        else{
            str += e.target.innerHTML;
            input.value = str;
        }

    })
})