class jstps_OrMask_Transaction{
    constructor(initNum, initIntNum, initMask) {
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    doTransaction() {
        num.orMask(mask);
    }

    undoTransaction() {
        num.setNum(intNum);
    }

    toString() {
        return "Or Mask " + mask;
    }
}