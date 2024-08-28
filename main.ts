import inquirer from "inquirer";  

let myBalance = 10000;   // Dollar
 myBalance += 4000;
 console.log(myBalance)
 let myPin = 6793;
let pinAnswer = await inquirer.prompt(
 [

    {

    name: "pin",
    message: "enter your pin",
    type: "number",
    }

 ]
);
//    67935   ===  6793  - false
if (pinAnswer.pin === myPin) {
   console.log("Correct Pin code!!!");

   let operationAns = await inquirer.prompt(
      [
         {
            name:"operation",
            message:"Please select option",
            type:"List",
            choices:["withdraw", "check balance"]
         }
      ]
   
   );

   console.log(operationAns);
   if (operationAns === "withdraw"){
      let amountAns = await inquirer.prompt(
      [
         {
         name: "amount",
         message: "enter your amount",
         type:"number,"
         }
      ]
     );
     // =, -=, +=
     myBalance -= amountAns.amount;
     console.log("your remaining balance is: " + myBalance);
   }else if (operationAns.operation === "check balance"){
      console.log("yourbalance is: " + myBalance)
   }
}
else{
   console.log("Incorrect pin number");
}

