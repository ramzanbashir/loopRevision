// let name  = "Muhammad Ali";
// let arr = ["Lahore", "Karachi", "Islamabad", "Peshawar", "Quetta"];
// let userInput = +prompt("Enter a number: ");
// let flag  = true;

// for (let i = 0; i < 5; i++) {
//     // console.log(name,i);
//     if(arr[i] === "userInput"){
//         flag = false;
//     }
// }

// if(flag === true){
//     console.log("City found.");
//     }else{
//     console.log("City not found.");
//     }


let input = "aaaabbbbccddddddeee";
let output = "";

let count = 1;
for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
        count++;
    }else{
        output += input[i] + count;
        count = 1;
    }
}

      document.write(`<h1>Output: ${output}</h1>`);




