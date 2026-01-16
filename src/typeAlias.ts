type User = {
    id: string | number;
    firstName: string;
    lastName?: string;
    skills: string[];
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
        skills: []
    } as User; // Type assertion to User type

 

    return { user, user2, user3 };
}