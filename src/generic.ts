function profile<T>(value: T): T {
    // console.log(value, typeof value);
    return value;
}

profile<string>("Hello, World!");

profile<number>(42);

profile<boolean>(true);

profile<{ name: string; age: number }>({ name: "Alice", age: 30 });





function mergeObj<T, U>(obj: T, obj2: U): T & U {
    return { ...obj, ...obj2 }
}


const merged = mergeObj({ name: "Alice" }, { age: 30, city: "New York" });
const merged2 = mergeObj({ id: 1, title: "Book" }, { city: "New York", author: "John Doe", pages: 250 });

console.log(merged);
console.log(merged2);