class jsTPS_transaction {

    doTransaction(){}

    undoTransaction(){}
}

class jsTPS {
    constructor() {
        this.transactions = [];
        this.mostRecentTransaction = -1;
        this.performingDo = false;
        this.performingUndo = false;
    }
    
    isPerformingDo() {
        return this.performingDo;
    }

    isPerformingUndo() {
        return this.isPerformingUndo;
    }

    addTransaction(transaction) {
        if ( (this.mostRecentTransaction < 0) || (this.mostRecentTransaction < (this.transactions.size() - 1)) ) {
            for( var i = this.transactions.size() - 1; i > this.mostRecentTransaction; i-- ) {
                this.transactions.remove(i);
            }
        } 

        this.transactions.add(transaction);

        this.doTransaction();
    }

    doTransaction() {
        if ( this.hasTransactionToRedo() ) {
            this.performingDo = true;
            var transaction = this.transactions.get(this.mostRecentTransaction+1);
            transaction.doTransaction();
            this.mostRecentTransaction++;
            this.performingDo = false;
        }
    }

    //jTPS_Transaction
    peekUndo = function() {
        if (this.hasTransactionToUndo()) {
            return this.transactions.get(this.mostRecentTransaction);
        }
        else
            return null;
    }

    //jTPS_Transaction
    peekDo = function() {
        if (this.hasTransactionToRedo()) {
            return this.transactions.get(this.mostRecentTransaction+1);
        }
        else
            return null;
    }

    undoTransaction() {
        if (this.hasTransactionToUndo()) {
            this.performingUndo = true;
            var transaction = this.transactions.get(this.mostRecentTransaction);
            transaction.undoTransaction();
            this.mostRecentTransaction--;
            this.performingUndo = false;
        }
    }

    clearAllTransactions() {
        this.transactions.clear();
        this.mostRecentTransaction = -1;        
    }

    getSize() {
        return this.transactions.size();
    }

    getRedoSize() {
        return this.getSize() - this.mostRecentTransaction - 1;
    }

    getUndoSize() {
        return this.mostRecentTransaction + 1;
    }

    hasTransactionToUndo() {
        return this.mostRecentTransaction >= 0;
    }

    hasTransactionToRedo() {
        return this.mostRecentTransaction < (this.transactions.size()-1);
    }

    toString() {
        var text = "--Number of Transactions: " + this.transactions.size() + "\n";
        text += "--Current Index on Stack: " + this.mostRecentTransaction + "\n";
        text += "--Current Transaction Stack:\n";
        for (var i = 0; i <= this.mostRecentTransaction; i++) {
            var jT = this.transactions.get(i);
            text += "----" + jT.toString() + "\n";
        }
        return text;
    }
}   