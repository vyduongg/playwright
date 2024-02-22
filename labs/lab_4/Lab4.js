const readlineSync = require("readline-sync");

const account1 = {
  accountNumber: "001",
  routingNumber: "33",
  balance: 10000,
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountNumber = "002";
account2.balance = 5000;
const bankAccounts = [account1, account2];

function myBankApp() {
  let isContinuing = true;

  while (isContinuing) {
    printOptionMenu();
    const userOption = Number(
      readlineSync.question("\nPlease select option: ")
    );

    switch (userOption) {
      case 1:
        const account = findAccount();
        _logAccountInfo(account);
        break;

      case 2:
        withdrawMoney();
        break;

      case 0:
        isContinuing = false;
        console.log("\nGoodbye - See you later!!");
        break;

      default:
        console.log("\nWrong Option! Please choose again!!\n");
    }
  }
}

function printOptionMenu() {
  console.log(
    `=== Banking application===
    1. Find an account
    2. Update balance
    0. Exit the program`
  );
}

function findAccount() {
  const accountNumber = readlineSync.question("Please input account number: ");
  return bankAccounts.find(function (account) {
    if (account.accountNumber === accountNumber) {
      return account;
    }
  });
}

function withdrawMoney() {
  const account = findAccount();
  _logAccountInfo(account);

  const amountToWithdraw = Number(
    readlineSync.question("Please input an amount: ")
  );

  if (
    amountToWithdraw < 0 ||
    (parseFloat(amountToWithdraw) &&
      parseFloat(amountToWithdraw) !== parseInt(amountToWithdraw))
  ) {
    console.log("Please input valid amount!!!!");
  } else {
    const currentBalance = account.balance;
    if (account.balance < amountToWithdraw) {
      console.log("Insufficient balance!!");
      return;
    }
    account.balance = currentBalance - amountToWithdraw;
    _logAccountInfo(account);
  }
}

function _getAccountNumber() {
  return readlineSync.question("Please input account number: ");
}

function _logAccountInfo(account) {
  if (account) {
    console.log("Your account is: ", account);
    console.log("\n");
  } else {
    console.log("There is no account with provided info!");
  }
}

// Call the function to run the app
myBankApp();
