interface IUser {
    id: number;
    name: string;
    age: number
}

interface Admin extends IUser {
    role: 'ADMIN';
    salary: number;
}


interface Admin { // Overriding 
    experience: number;
    fullControl: boolean;
}

interface Manager extends IUser {
    role: 'MANAGER';
    salary: number;
    recruitmentAccess: boolean;
}

