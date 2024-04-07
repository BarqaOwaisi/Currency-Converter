#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.3,
  PKR: 277.54,
  JPY: 151.61,
  KRW: 1351.27,
  CNY: 7.23,
};

let userAnswer = await inquirer.prompt([
  {
    name: "From",
    message: "Select From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "JPY", "KRW", "CNY"],
  },
  {
    name: "To",
    message: "Select To Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "JPY", "KRW", "CNY"],
  },
  {
    name: "amount",
    message: "Enter amount",
    type: "number",
  },
]);

let fromAmount = currency[userAnswer.From];
let toAmount = currency[userAnswer.To];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
