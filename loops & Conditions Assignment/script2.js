
let input = prompt("enter the age");
console.log(input);

// 1st case if user click the cancel  button
// click Cancel button get null value

if(input === null){
    console.error("you press cancel button");
}else{
    let age = Number(input);
    if(input.trim() === "" || isNaN(age)){
   console.error("enter the valid input");
    }
    else if(age < 0){
        console.error("age cannot be Negative");

    }
    else if(age >= 18){
        console.log("you are Eligible for vote");
    }
    else{
        console.log("you are not eligible")
    }
}