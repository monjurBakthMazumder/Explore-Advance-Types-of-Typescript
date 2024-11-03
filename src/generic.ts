{
    // generic type
    type GenericArray<T> = Array<T>


    const rolNumber1 : number[] = [1, 2, 3, 4, 5]
    const rolNumber2 : Array<number> = [1, 2, 3, 4, 5]
    const rolNumber3 : GenericArray<number> = [1, 2, 3, 4, 5]

    const mentors1 : string[] = ['x', 'y', 'z']
    const mentors2 : Array<string> = ['x', 'y', 'z']
    const mentors3 : GenericArray<string> = ['x', 'y', 'z']

    const boolArray1 : boolean[] = [true, false, false]
    const boolArray2 : Array<boolean> = [true, false, false]
    const boolArray3 : GenericArray<boolean> = [true, false, false]




    const user : GenericArray<{name:string, age: number}> = [
        {
            name: "Monjur",
            age: 100
        },
        {
            name: "Masum",
            age: 25
        }
    ]

    interface User {name:string, age: number}

    const user2 : GenericArray<User> = [
        {
            name: "Monjur",
            age: 100
        },
        {
            name: "Masum",
            age: 25
        }
    ]

    // generic tuple 

    type GenericTuple<X,Y> = [X, Y]

    const manus : [string, string] = ["x", "y"]
    const manus2 : GenericTuple<string,string> = ["x", "y"]

    const userWithId : GenericTuple<number,{name: string, email:string}> = [1212, {
        name: "monjur",
        email: "monjur@gmail.com"
    }]

    













}