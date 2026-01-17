
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



type ErrRes = {
    success: false;
    statusCode: number;
    error: string;
}

type SuccRes = {
    success: true;
    data: any[];
}


type APIRes = ErrRes | SuccRes;



function handleApiRes(res: APIRes) {
    if (res.success) {
        console.log(res.data);
    } else {
        console.log(res.error);
    }
}