// Level 2 – Slightly Tougher but Logical

/*
11. Allow only 3 attempts to enter correct password
If user gets it right early, stop. If not → “Account locked”

let password = "Sup123";

let count=0;
while(count < 3){

let userPass = prompt("enter the Password");
// 1st case
if(userPass === null){
    console.error("you press the cancel button");
    break; //exits
}
else{
    if(userPass.trim()===""){
        console.error("password can't be Empty");
        continue; //don't count this as a attempt
    }
    else if(password === userPass){
        console.log("password granted");
        break;
    }else{
        console.log("Wrong Password");
        count++;
    }
}

if(count === 3 && userPass !== password){
    console.log("Account Locked");
}
}

*/

/*
 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
Loop until "stop" is typed. Count "yes".
 
let words = prompt("enter the words");
let count = 0;
while(words !== 'stop'){

    //condition
    if(words === 'yes')count++;
    words = prompt("enter the words");
}
console.log("types yes" +count +"times");

*/

/*
13. Print numbers divisible by 7 from 1 to 50
Use modulo % and loop.


for(let i=1;i<=50;i++){
    if(i % 7 ===0)
        console.log(i);
}
    
*/

/* 
14. Sum of all odd numbers from 1 to 30
Add only odd numbers. Print final sum.

let sum =0;
for(let i=1;i<=30;i++){
    if(i % 2 !== 0){
        sum =sum +i;
    }
}
console.log(sum);

*/

/*
 15. Keep asking number until user enters an even number
Use while loop. Stop only if input is even.

 

let num = prompt("enter the number");
while(num %2 !== 0){
 num = prompt("enter the number");
}

*/

/*
16. Print numbers between two user inputs
Input start and end using prompt() → print all between.
 

let start = +prompt("enter the number loop start from : ");
let end = +prompt("enter the number where the loop end");

if (start > end) {
  console.error("Start loop can't be greater than end loop");
} else {
  while (start <= end) {
    console.log(start);
    start++;
  }
}

/* 


/*
17. Print only first 3 odd numbers from 1 to 20
Use loop. Stop with break after 3 odd prints.


let count = 0;

for(let i=1;i<=20;i++){
    if(i%2 !==0){
        count++;
        console.log(i)
    }

    if(count === 3)
        break;
    
}
*/



/* 18. Ask user 5 numbers. Count how many are positive
 Use loop + condition + counter.
 

let cnt = 0;

for(let i=1;i<=5;i++){
    let num =prompt("enter the number");
    if(num >= 0){
        cnt++;
    }


}
console.log("total positive number is :"+cnt);
*/


/*
19. ATM Simulator – Allow 3 withdrawals
Start with ₹1000 balance. Ask withdrawal amount 3 times.
If enough balance → deduct
Else → print “Insufficient balance”


let balance = 1000;
for(let i=1;i<=3;i++){
    let withdraw = Number(prompt(`attempt ${i} : enter withdraw amount`));

    if(withdraw < 0){
        console.error("Withdraw amount can't be negative!");
        break;
    }

    if(withdraw <= balance){
        balance = balance- withdraw;//remaining amount
        console.log(`${withdraw} withdrawn successfully, Remaining amount : ${balance}`);

    }
    else{
        console.log("Insufficient balance");
    }
}

console.log("no more withdrawals allowed");

*/

