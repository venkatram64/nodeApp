const calledMessages = [];
const returnMessage = async msg => {
    return new Promise(resolve => {
        setTimeout(() =>{
            calledMessages.push(msg);
            resolve(calledMessages.join(""));
        }, Math.floor(Math.random() * 1000) + 100);
    });
};

const gatherMessages = async msgs => {
    const results = [];
    for(let msg of msgs){
        results.push(await returnMessage(msg));
    }
    return results;
};

const main = async () => {
    const msgs = ["a", "b", "c"];
    const results = await gatherMessages(msgs);
    console.log(results);
}

main();