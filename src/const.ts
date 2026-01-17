
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