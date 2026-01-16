
enum employeeRole {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    DEVELOPER = 'DEVELOPER',
    INTERN = 'INTERN',
    HR = 'HR',
}

const employees: {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    employeeRole: employeeRole;
    salary?: number; // optional property
}[] = []


employees.push({
     id: 1,
    name: 'John Doe',
    age: 28,
    isActive: true,
    employeeRole: employeeRole.DEVELOPER,
    salary: 60000,
});

employees.push({
    id: 2,
    name: 'Jane Smith',
    age: 32,
    isActive: false,
    employeeRole: employeeRole.MANAGER,
});


employees.push({
    id: 3,
    name: 'Emily Johnson',
    age: 24,
    isActive: true,
    employeeRole: employeeRole.INTERN,
    salary: 30000,
});
employees.push({
    id: 4,
    name: 'Michael Brown',
    age: 45,
    isActive: true,
    employeeRole: employeeRole.HR,
    salary: 75000,
});


