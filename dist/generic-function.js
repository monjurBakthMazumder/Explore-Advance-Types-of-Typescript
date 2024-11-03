"use strict";
{
    // generic function
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result1 = createArray("Bangladesh");
    const resultGeneric = createArrayWithGeneric("Bangladesh");
    const resultGenericObject = createArrayWithGeneric({
        id: 222,
        name: "monjur"
    });
    const createTupleWithGeneric = (param1, param2) => {
        return [param1, param2];
    };
    const resultGenericTuple = createTupleWithGeneric("Bangladesh", 231);
    const resultGenericTuple2 = createTupleWithGeneric("Bangladesh", { name: "asia" });
}
