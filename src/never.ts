function througnError(msg: string): never {
    throw new Error(msg);
}

function infiniteLoop(): never {
    while (true) {
        console.log('Running...');
    }
}



type Shape = {
    type: 'circle';
    radius: number;
} | {
    type: 'square';
    side: number;
} | {
    type: 'triangle';
    base: number;
    height: number;
}

// | {
//     type: 'polygon';
//     base: number;
// }


function getArea(shape: Shape): number {
    switch (shape.type) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
        case 'triangle':
            return 0.5 * shape.base * shape.height;

        default:
            const _exhaustiveCheck: never = shape; // ensure all cases that's already handled
            return _exhaustiveCheck;
    }
}