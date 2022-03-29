//Create bank account class
class BankAccount {
    //define attributes
    constructor(intRate, balance=0) {
        this.intRate = intRate;
        this.balance = balance;
    }

    //made deposit method
    makeDeposit(amount) {
        this.balance += amount;
        return this;
    }

    //make withdrawel method
    makeWithdrawel(amount) {
        this.balance -= amount;
        return this;
    }

    //display balance method
    displayBalance() {
        console.log(`Balance: ${this.balance}`)
        return this;
    }

    //yield insterest method
    yieldInterest() {
        if(this.balance>0) {
            this.balance += this.intRate*this.balance
        }else {
            this.balance = this.balance
            }
        return this;
    }
}

//Create user class
class User {
    //define attributes
    constructor(username, emailAddress) {
        this.name = username;
        this.email = emailAddress;
        // this.accountBalance = 0;
        this.account = new BankAccount(0.02, 0);
    }

    //made deposit method
    makeDeposit(amount) {
        // this.accountBalance += amount;
        this.account.makeDeposit(amount);
        return this;
    }

    //make withdrawel method
    makeWithdrawel(amount) {
        // this.accountBalance -= amount;
        this.account.makeWithdrawel(amount);
        return this;
    }

    //display balance method
    displayBalance() {
        // console.log(`User: ${this.name}, Balance: ${this.accountBalance}`)
        this.account.displayBalance();
        return this;
    }

    //transfer money method
    transferMoney(amount, reciever) {
        this.account.makeWithdrawel(amount);
        reciever.account.makeDeposit(amount);
        return this;
    }

}

//create 3 user instances
const Harry = new User("Harry Potter", "Harry@aol.com");
const Hermione = new User("Hermione Granger", "HermG@gmail.com");
const Ron = new User("Ron Weasley", "RWeasley@gmail.com");

//first user makes 3 deposits and 1 withdrawel
// Harry.makeDeposit(100)
// Harry.makeDeposit(100)
// Harry.makeDeposit(100)
// Harry.makeWithdrawel(100)
// Harry.displayBalance()

//chained
Harry.makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawel(100).displayBalance()

//second user makes 2 deposits and 2 withdrawels
// Hermione.makeDeposit(1000)
// Hermione.makeDeposit(1000)
// Hermione.makeWithdrawel(500)
// Hermione.displayBalance()

//chained
Hermione.makeDeposit(1000).makeDeposit(1000).makeWithdrawel(500).displayBalance()

//third user makes 1 deposit and 3 withdrawels
// Ron.makeDeposit(1000)
// Ron.makeWithdrawel(100)
// Ron.makeWithdrawel(100)
// Ron.makeWithdrawel(100)
// Ron.displayBalance()

//chained
Ron.makeDeposit(1000).makeWithdrawel(100).makeWithdrawel(100).makeWithdrawel(100).displayBalance()

//first user transfers money to third user
Harry.transferMoney(100, Hermione)
Harry.displayBalance()
Hermione.displayBalance()

//create 2 bank accounts
const Account1 = new BankAccount(0.02);
const Account2 = new BankAccount(0.01, 100);

//to the first account, make 3 deposits and 1 withdrawal, then calculate interest and display the account's info
Account1.makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawel(100).yieldInterest().displayBalance()

//to the second account, make 2 deposits and 4 withdrawals, then calculate interest and display the account's info
Account2.makeDeposit(900).makeDeposit(1000).makeWithdrawel(100).makeWithdrawel(100).makeWithdrawel(100).makeWithdrawel(100).yieldInterest().displayBalance()