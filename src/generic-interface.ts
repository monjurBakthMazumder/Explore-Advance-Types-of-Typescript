{
    // Generic interface

    interface Developer<T,X=null>{
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T,
        Bike?: X
    }


    type PoorWatch = {
        brand: string;
        model:string;
        display: string;
    }

    const poorDeveloper : Developer<PoorWatch> ={
        name: "monjur",
        computer:{
            brand: "hp",
            model: "321",
            releaseYear: 2001
        },
        smartWatch:{
            brand: "Samsung",
            model: "1260",
            display: "4k"
        }
    }

    interface RichWatch {
        brand: string;
        model:string;
        heartTrack: boolean
    }
    interface Bike {
        name: string,
        model: string
    }
    const richDeveloper : Developer<RichWatch,Bike> ={
        name: "monjur",
        computer:{
            brand: "hp",
            model: "521",
            releaseYear: 2012
        },
        smartWatch:{
            brand: "apple",
            model: "1260",
            heartTrack: true
        },
        Bike: {
            name: "Yamaha",
            model: "1260cc",
        }
    }








}