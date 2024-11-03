{
    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        shop: string;
    }

    type Owner = "bike" | "car" | "shop" // manually
    type Owner2 = keyof Vehicle
    const person : Owner = "bike" 
    const person2 : Owner2 = "car" 

    //---------------------------------------------

    const user = {
        name  : "John",
        age: 21,
        address: "dhaka"
    }

    const getPropertyValue  =<X,Y extends keyof X > (obj: X, key: Y) =>{
        return obj[key]
    }

    const result1 = getPropertyValue(user, "name")


   





}