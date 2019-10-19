class jstps_AddToNum_Transaction {
                
    constructor(initNum, initAmountToAdd) {
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
    }

    doTransaction() {
        var oldNum = num.getNum();
        var newNum = oldNum + this.amountToAdd;
        num.setNum(newNum);
    }

    undoTransaction() {
        var oldNum = num.getNum();
        var newNum = oldNum - this.amountToAdd;
        num.setNum(newNum);
    }

    toString() {
        return "Add " + this.amountToAdd;
    }
}