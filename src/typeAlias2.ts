import userData from "./fakedb.js";

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




const getUsers = JSON.parse(userData) as User;

getUsers.address.position.lat;

function printSkills(skills: User['skills']) {
    const res = skills.map(skill => skill.name);
    console.log(res);
}

function printSkill(skill: User['skills'][number]) {
    console.log(skill.name);
}


