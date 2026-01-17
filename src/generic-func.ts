import type { ApiResponse, Porduct } from "./generic.js";
import type { User } from "./typeAlias.js";


const fetchData = async<T>(url: string): Promise<ApiResponse<T>> => {
    const res = await fetch(url);
    const data = await res.json();
    return {
        status: res.status,
        data,
        message: "Data fetched successfully"
    }
}




async function main() {
    const user = await fetchData<User>('https://api.example.com/user/1');
    const product = await fetchData<Porduct>('https://api.example.com/product/1');


    console.log(user.data.firstName);

    console.log(product.data.name);
}

main();