let fun2 = () => {
    console.log(this);
};

class MyFourthClass {
    fun1 = fun2;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calc(scs) {
        console.log("hii");
    }
}
new MyFirstClass().fun1();
