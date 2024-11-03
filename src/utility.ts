{
    // utility
    // pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }
    type NameAge = Pick<Person, "name" | "age">

    // omit
    type ContactInfo = Omit<Person, "name" | "age">


    // required
    type PersonRequired = Required<Person>

    // partial
    type PersonPartial = Partial<Person>

    // readOnly
    type PersonReadonly = Readonly<Person>
    const person1 : PersonReadonly = {
        name: "monjur",
        age: 23,
        contactNo: "013453454",
    }

    // Record
    type EmptyObject = Record<string, unknown>
    const emptyObject : Record<string, unknown> = {}
    type MyObject = Record<string,string> 
    const onj : MyObject ={
        a: "a" ,
        b: "b" ,
        c: "c" ,
    }




}