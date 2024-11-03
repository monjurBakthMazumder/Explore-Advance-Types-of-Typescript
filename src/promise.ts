{
    // promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }

    const getTodo = async ():Promise<Todo> => {
        const response = await fetch('https://jsonplacehoder.typicode.com/todos/1')
        const data = await response.json()
        return data
        // console.log(data);
    }

    getTodo()


    // simulate

    const createPromise = (): Promise<string> => {
        return new Promise<string> ((resolve, reject) => {
            const data: string = "something"

            if(data){
                resolve
            }else{
                reject("failed to load data")
            }
        })
    }
    // calling create promise function
    const showData = async(): Promise<string>=>{
        const data : string = await createPromise()
        return data
        // console.log(data);
    }
    showData()

    type Something = {something: string;}
    const createPromise2 = (): Promise<Something> => {
        return new Promise<Something> ((resolve, reject) => {
            const data: Something = {something:"something"}

            if(data){
                resolve
            }else{
                reject("failed to load data")
            }
        })
    }
    // calling create promise function
    const showData2 = async(): Promise<Something>=>{
        const data : Something = await createPromise2()
        return data
        // console.log(data);
    }
    showData2()














}