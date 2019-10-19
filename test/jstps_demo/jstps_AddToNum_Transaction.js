export default class jstps_AddToNum_Transaction {
    
    constructor(initNum, initAmountToAdd) {
        this.num = initNum;
        this.amountToAdd = initAmountToAdd;
    }

    doTransaction() {
        oldNum = num.getNum();
        newNum = oldNum + this.amountToAdd;
        num.setNum(newNum);
    }

    undoTransaction() {
        oldNum = num.getNum();
        newNum = oldNum - this.amountToAdd;
        num.setNum(newNum);
    }

    toString() {
        return "Add " + this.amountToAdd;
    }
}