//Level - 1

/*

7. Ask user’s age and check if eligible to vote
If age >= 18 → “Eligible”, else → “Not eligible”



let input =prompt("Enter your age");
console.log("Raw input : ",input);

if(input === null){
    console.error("you cancel the input");
}

else{
    let trimmed = input.trim();
    console.log("Trimmed input :",trimmed);

    let age = Number(trimmed);
    console.log("converted number :",age);
    console.log("Is NaN?: ",isNaN(age));

    if(trimmed === "" || isNaN(age)){
        console.log("Invalid Input");
    }else if(age < 0){
        console.error("age cannot be Negative");
    }
    else if(age >= 18){
        console.log("you are Eligible for vote");

    }else{
        console.log("you are not Eligible to Vote");
    }

}

 */
  


/*
8. Print multiplication table of 5
Use loop to print 5 × 1 to 5 × 10.

for(i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`)
}
 */



/*
9. Count how many numbers between 1 and 15 are greater than 8
Loop and count conditionally.

let count =0;
for(let i=1;i<=15;i++){
    if(i>8){
        count++;
    }
}
console.log(`Count how many numbers between 1 and 15 are greater than 8 is : ${count}`);

 */


/*
10. Ask user for password and print access status
Hardcoded correct password. Compare with user input.

*/
let password = "Supriya#123";
let userPass = prompt("enter the password");

if(userPass === null){
console.error("you cancel the password");
}
else if(userPass.trim() === ""){
    console.error("password can't be Empty");
}
else if(userPass === password){
    console.log("Access Granted");
}else{
    console.log("Access denied | Incorrect password");
}
