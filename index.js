const obj = {
    name: this,
    func1: () => {
        console.log(this);
    },
    func2: function () {
        console.log(this);
    },
};

obj.func1();
obj.func2();

try {
    const p1 = Promise.resolve();
    // throw new Error("hello 454545");
    const p2 = Promise.reject("hello there is error");

    // const p2 = new Promise((resolve, reject) => reject("hello there is error"));
    const p4 = Promise.resolve();
    const p3 = Promise.resolve();
    Promise.all([p1, p4, p3])
        .then(() => {
            console.log("SUCESSS");
        })
        .catch((err) => {
            console.log("ERROR", err);
        });

    // p2.catch((err) => {
    //     console.log(err);
    // });
} catch (err) {
    console.log("err : ", err);
}
console.log("END");
