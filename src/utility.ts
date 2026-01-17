type User = {
    readonly id: string;
    name: string;
    email: string;
    role: "ADMIN" | "USER" | "GUEST";
}



type AllOptionals = {
    id?: string;
    name?: string;
    email?: string;
}


type NewUser = Omit<User, 'id' | 'role'>;
type NewUser2 = Pick<User, 'name' | 'email'>;
type UpdatedUser = Partial<Omit<User, 'id'>>;

type AllRequired = Required<AllOptionals>;



function createUser(value: Readonly<NewUser>): User { // cann't update
    return {
        id: crypto.randomUUID(),
        role: "USER",
        ...value
    }
}


const nahid = createUser({
    name: "Nahid",
    email: "john.mclean@examplepetstore.com"
});

// console.log(nahid);





type Roles = "ADMIN" | "USER" | "GUEST";

type activeRoles = Exclude<Roles, "GUEST">;
type activeRoles2 = Extract<Roles, "ADMIN">;




type UserInput = string | null | undefined;
type ValidInput = NonNullable<UserInput>;



function Add(a: number, b: number) {
    return a + b;
}

type Add = typeof Add; // type of Add function
type AddResult = ReturnType<Add>; // type of Add function return type




function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

type fetchDataReturnType = Awaited<ReturnType<typeof fetchData>>; // type of fetchData function return type





