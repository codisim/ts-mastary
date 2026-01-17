
function processData(input: unknown) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    } else if (typeof input === 'number') {
        console.log(input * 2);
    } else if (typeof input === 'boolean') {
        console.log(!input);
    } else if (Array.isArray(input)) {
        console.log(input.length);
    } else {
        console.log('Invalid input');
    }

}



// processData("Hello, World!");
// processData(42);
// processData(true);
// processData([1, 2, 3, 4, 5]);
// processData({ name: "Alice", age: 30 });
// processData(null);
// processData(undefined);
// processData(new Date());
// processData(Math.PI);