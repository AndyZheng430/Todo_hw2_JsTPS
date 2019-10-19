class jstps_AndMask_Transaction {
    
    constructor(initNum, initIntNum, initMask) {
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    doTransaction() {
        num.andMask(mask);
    }

    undoTransaction() {
        num.setNum(intNum);
    }

    toString() {
        return "And Mask " + mask;
    }
}