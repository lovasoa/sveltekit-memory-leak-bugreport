class MyClass {
    constructor() {
        this.x = neverSolve();
    }
    async waitForMe() {
        const x = await this.x;
        return x+1;
    }
}

function neverSolve() {
    return new Promise(()=>{});
}

export default new MyClass;