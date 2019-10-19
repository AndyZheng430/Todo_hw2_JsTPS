class jstps_Tester {
    
    constructor() {
        this.keepGoing = true;
        this.num = new jstps_Num();
        this.tps = new jsTPS();
    }

    function = () => {
        while (this.keepGoing) {
            // DISPLAY THE CURRENT TPS
            this.console.log("CURRENT jTPS:");
            this.console.log(this.tps);
            this.console.log();
                
            // DISPLAY NUM
            this.console.log("num is " + this.num.getNum());
            this.console.log();
                
            // DISPLAY THE MENU
            this.console.log("ENTER A SELECTION");
            this.console.log("1) Add a Transaction");
            this.console.log("2) Undo a Transaction");
            this.console.log("3) Redo a Transaction");
            this.console.log("4) Clear All Transactions");
            this.console.log("5) Reset Num and Transactions");
            this.console.log("-");

            // GET THE USER SELECTION
            var entry = prompt();
                
            // ADD AND EXECUTE A TRANSACTION
            if (entry.startsWith("1")) {
                this.console.log("\nEnter an amount to add: ");
                entry = input.nextLine();
                var amountToAdd = Integer.parseInt(entry);
                var transaction = new jstps_AddToNum_Transaction(this.num, amountToAdd);
                this.tps.addTransaction(transaction);
            }            
            // UNDO A TRANSACTION
            else if (entry.startsWith("2")) {
                tps.undoTransaction();
            }
            // REDO A TRANSACTION
            else if (entry.startsWith("3")) {
                tps.doTransaction();
            }
            // CLEAR ALL TRANSACTIONS
            else if (entry.startsWith("4")) {
                tps.clearAllTransactions();
            }
            // CLEAR ALL TRANSACTIONS AND RESET NUM TO 0
            else if (entry.startsWith("5")) {
                tps.clearAllTransactions();
                num.setNum(0);
            }
            // QUIT
            else if (entry.startsWith("Q")) {
                this.keepGoing = false;
            }
        }
        console.log('GoodBye');
    }
}