{
    // generic function

    const createArray = ( param: string): string[] => {
        return [ param]
    }
    const createArrayWithGeneric = <T> ( param: T): T[] => {
        return [ param]
    }

    const result1  = createArray("Bangladesh")
    const resultGeneric  = createArrayWithGeneric<string>("Bangladesh")

    interface User {
        id:number, name:string
    }
    const resultGenericObject = createArrayWithGeneric<User>({
        id: 222,
        name: "monjur"
    })


    
    const createTupleWithGeneric = <T,Q> ( param1: T, param2:Q): [T,Q] => {
        return [ param1, param2]
    }

    const resultGenericTuple  = createTupleWithGeneric<string,number>("Bangladesh",231)


    const resultGenericTuple2  = createTupleWithGeneric<string,{name:string}>("Bangladesh",{name: "asia"})

   








}