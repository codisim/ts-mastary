
const OrderStatus = {
    PENDING: 'PENDING',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
} as const;

function generateColorForOrder(status: keyof typeof OrderStatus) {
    switch (status) {
        case OrderStatus.PENDING:
            return 'yellow';

        case OrderStatus.SHIPPED:
            return 'green';

        case OrderStatus.DELIVERED:
            return 'red';

        default:
            return 'gray';
    }
}



type RolePermission = {
    admin: string[];
    user: string[];
    guest: string[];
}


const permissions = {
    admin: ['create', 'read', 'update', 'delete'],
    user: ['read', 'update'],
    guest: ['read'],
    extraRole: ['unknown']
} satisfies RolePermission