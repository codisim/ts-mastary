
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


type User = {
    id: number;
    name: string;
}

function isUser(input: unknown): input is User {
    const user = input as User;
    return typeof user.id === 'number' && typeof user.name === 'string';
}

function processUser(input: unknown) {
    if (isUser(input)) {
        console.log(`User id ${input.id} and name ${input.name}`);
    } else {
        console.log(`Invalid input: ${input}`)
    }
}