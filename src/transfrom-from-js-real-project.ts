type CustomUser = {
    id: number;
    firstName: string;
    lastName?: string;
    age: number;
    score?: number;
}

type CustomerUserKeys = keyof CustomUser;

type FilterCriteria = {
    [K in CustomerUserKeys]?: CustomUser[K]
}

type FieldsToAggregate = ("score" | "age");



type TransformedUser = {
    id: number;
    fullName: string;
    score?: number;
    age: number;
}


function processUserData(
    users: CustomUser[],
    criteria: FilterCriteria = {},
    fieldsToAggregate: FieldsToAggregate[] = []
) {

    const filterUsers = users.filter(user => {
        return Object.entries(criteria).every(
            ([key, value]) => user[key as CustomerUserKeys] == value
        )
    })


    const aggregatedData = fieldsToAggregate.reduce((acc, field) => {
        acc[field] = filterUsers.reduce((sum, user) => {
            if (user[field] && typeof user[field] === "number") {
                return sum + user[field]!;
            }
            return sum;
        }, 0);

        return acc;

    }, {} as Record<FieldsToAggregate, number>)



    const transformedData = filterUsers.map(user => ({
        id: user.id,
        fullName: `${user.firstName} ${user.lastName ?? ""}.trim()`,
        ...aggregatedData
    }))

    return transformedData;

}