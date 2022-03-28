//Create user class
class User {
    //define attributes
    constructor(username, emailAddress) {
        this.name = username;
        this.email = emailAddress;
        this.accountBalance = 0;
    }

    //made deposit method
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }

    //make withdrawel method
    makeWithdrawel(amount) {
        this.accountBalance -= amount;
        return this;
    }

    //display balance method
    displayBalance() {
        console.log(`User: ${this.name}, Balance: ${this.accountBalance}`)
        return this;
    }

    //transfer money method
    transferMoney(amount, reciever) {
        this.accountBalance -= amount;
        reciever.accountBalance += amount;
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