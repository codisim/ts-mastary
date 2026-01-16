type User = {
    id: string | number;
    firstName: string;
    lastName?: string;
    skills: [{
        name: string;
        level: 'beginner' | 'intermediate' | 'expert';
        rating: number;
    }];
    address: {
        street: string;
        city: string;
        country: string;
        zipCode?: number;
        position: {
            lat: number;
            lng: number;
        }
    }
}

type UserAddress = User['address'];
type UserAddressPosition = User['address']['position']

function getAddress(add: UserAddress) {

}