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





