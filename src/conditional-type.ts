{
    // conditional type

    type a1 = null
    type b1 = undefined

    type x = a1 extends null ? true : false // conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any // conditional type



    type Sheikh = {
        bike : string;
        car: string;
        ship: string;   
    } 

    // car ase kina/ bike ase kina / ship ase kina /tractor ase kina
    type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false
    // keyof Sheikh = "bike" | "car" | "ship" 
    type CheckVehicle2<T> = T extends keyof Sheikh ? true : false

}