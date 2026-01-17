function profile<T>(value: T): T {
    console.log(value, typeof value);
    return value;
}

profile<string>("Hello, World!");

profile<number>(42);

profile<boolean>(true);

profile<{ name: string; age: number }>({ name: "Alice", age: 30 });