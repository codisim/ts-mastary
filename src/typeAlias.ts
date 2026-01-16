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


    return { user, user2, user3 };
}