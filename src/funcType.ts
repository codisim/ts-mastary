type CB = (arg1: string, arg2: string) => string;

function testCB(cb: CB) {
    cb("test", "1");
}

testCB(function (a: string, b: string) { return a + b; });