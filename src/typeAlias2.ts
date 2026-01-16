type User = {
    id: string | number;
    firstName: string;
    lastName?: string;
    skills: string[];
    address: {
        street: string;
        city: string;
        country: string;
        zipCode?: number;
    }
}

type UserAddress = User['address'];

function getAddress(add: UserAddress) {

}