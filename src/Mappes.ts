{
    // Mapped type

    const arrayOfNumbers : number[] = [1, 2, 3, 4, 5]
    const arrayOfString : string[] = ['1', '2', '3', '4', '5']

    const arrayOfString2 : string[] = arrayOfNumbers.map((number) => number.toString()

)
console.log(arrayOfString2);


type AreaNumber = {
    height: number;
    wight: number;
}
type AreaString = {
    height: string;
    wight: string;
}

type AreaString2 = {
    [key in "height" | "wight"] : string
}
// keyof AreaNumber = "height" | "wight"
type AreaString3 = {
    [key in keyof AreaNumber] : string
}
// T => {height: string; width: number}
// key => T["height"] / T["width]
type AreaString4<T> = {
    [key in keyof T] : T[key]
}

const area1 : AreaString4 <{height: string; width: number}> = {
    height :"100",
    width :100
}
    type Height = AreaNumber["height"] // look up type






















}