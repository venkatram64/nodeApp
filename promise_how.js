const delayWithRandomResolution = (timeout = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() >= 0.5){
                return resolve();
            }
            return reject();
        }, timeout);
    });
};

Promise.all([
    delayWithRandomResolution(),  
    delayWithRandomResolution(),
    delayWithRandomResolution()  
]).then(() => {

}).catch(() => {

});