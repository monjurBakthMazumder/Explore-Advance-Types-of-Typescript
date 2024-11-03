"use strict";
{
    // type assertion
    let anything;
    anything = "Next level web development";
    anything.length;
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the convert value is ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGram(1000);
    const result2 = kgToGram("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
