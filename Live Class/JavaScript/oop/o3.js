class Account {
  constructor(openingBalance) {
    this.balance = openingBalance;
    this.minimumBalance = 100;
  }
  getBalance() {
    return this.balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount < this.balance && this.balance - amount >= this.minimumBalance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient Balance");
    }
  }
}

const johnsAccount = new Account(1000);
const hasinsAccount = new Account(2000);
const mahmudsAccount = new Account(3000);

/* console.log(johnsAccount.getBalance());  
console.log(hasinsAccount.getBalance());
console.log(mahmudsAccount.getBalance()); */

johnsAccount.deposit(200);
console.log(johnsAccount.getBalance());

johnsAccount.withdraw(1100);
console.log(johnsAccount.getBalance());

hasinsAccount.withdraw(300);
mahmudsAccount.deposit(200);
