{
    // type assertion
    let anything : any;

    anything = "Next level web development";

    (anything as string).length
    
    const kgToGram = (value : number | string) : string | number | undefined => {
        if (typeof value === "string"){
            const convertedValue = parseFloat(value)*1000
            return  `the convert value is ${convertedValue}`
        }
        
        if (typeof value === "number"){
            return value *1000
        }
        
    }

    const result1 = kgToGram(1000) as number
    const result2 = kgToGram("1000") as string

    type CustomError = {
        message : string
    }
try {
    
} catch (error) {
    console.log((error as CustomError).message);
}




}