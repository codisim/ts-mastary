
type Admin = {
    id: number;
    role: 'ADMIN';
    salary: number;
    fullControl: boolean;
}


type Manager = {
    id: number;
    role: 'MANAGER';
    salary: number;
    recruitmentAccess: boolean;
}


type User = Admin | Manager;


function getUser(user: User) {
    if (user.role === 'ADMIN') {
        user.fullControl;
    } else if (user.role === 'MANAGER') {
        user.recruitmentAccess
    }
}