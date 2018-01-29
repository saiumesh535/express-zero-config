const some = (value ) =>{
    //throw new Error("sasa");
    return value;
}

const handleError = (func) =>{
    return func.catch((error)=>console.log(error));
}

const doSomething = async (value) =>{
    const a = await some(value);
    console.log("hello",a);
}

handleError(doSomething("ssß"));

