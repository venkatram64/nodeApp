async function myAsyncMethod(){
    return 1;
}

const delay = async (timeout = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(timeout);
        }, timeout);
    });
};

const delay2 = async (timeout = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject(new Error("An error occurred."));
        }, timeout);
    });
};

const main = async () => {
    const result = await delay(1000);
    console.log(result);
    try{
        const result = await delay2(1000);
        console.log(result);
    }catch(err){
        console.log(err);
    }finally{
        console.log("finally...");
    }
}

main();