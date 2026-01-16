type User = {
    id: string | number;
    firstName: string;
    lastName?: string;
    skills: string[];
}


function createUser(firstName: string, lastName: string): User {

    return {
        id: crypto.randomUUID(),
        firstName,
        lastName,
        skills: []
    }
}


function createUser2(firstName: string, lastName: string) {

    const user: User = { // type annotation to User type
        id: crypto.randomUUID(),
        firstName,
        lastName,
        skills: []
    }

    const user2 = {
        id: crypto.randomUUID(),
        firstName,
        lastName,
    } as User; // Type assertion | ghus diye job nile ja hoy tai

    const user3 = {
        id: crypto.randomUUID(),
        firstName,
        lastName,
        skills: []
    } satisfies User; // Using 'satisfies' operator | can be extra properties but must satisfy User type


    return { user, user2, user3 };
}






