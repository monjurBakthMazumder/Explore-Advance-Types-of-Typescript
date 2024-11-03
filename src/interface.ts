{
    // interface

    type User1 = {
        name: string;
        age: number
    }
    type UserWthRoll1 = User1 & { roll : number }

    const user1 : User1 = {
        name: 'John',
        age: 10
    }
    const user11 : UserWthRoll1 = {
        name: 'John',
        age: 10,
        roll: 1
    }

    interface User2  {
        name: string;
        age: number
    }
    
    interface UserWthRoll2 extends User2 {
        roll : number
    }

    const user2 : User2 = {
        name: 'John',
        age: 10
    }
    const user22 : UserWthRoll2 = {
        name: 'John',
        age: 10,
        roll: 1
    }


    // js --> object , array -> oject, function -> oject

    type Roll1 = number[]
    interface Roll2 {
        [index : number] : number
    }

    const roll1 : Roll1 = [1, 2, 3, 4]
    const roll2 : Roll2 = [1, 2, 3, 4]

    type Add = (num1 : number, num2 :number) => number

    interface Add2 {
        (num1 : number, num2 :number) : number
    }
    const add :Add  = (num1, num2) => num1 + num2
    const add2 :Add2  = (num1, num2) => num1 + num2
    


}