type User = {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "USER" | "GUEST";
}


type NewUser = Omit<User, 'id' | 'role'>;


function createUser(value: NewUser): User {
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

console.log(nahid);





