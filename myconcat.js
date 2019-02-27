function arrayConcat(a, b){
    if(!Array.isArray(a)){
        throw new Error("'a' must be an Array");
    }
    if(!Array.isArray(b)){
        throw new Error("'b' must be an Array");
    }

    return a.concat(b);
}

function addProp(obj, key, value){
    if(obj[key]){
        throw new Error(`Object already has key ${key}`);
    }

    const newObj = Object.assign({}, obj);
    newObj[key] = value;
    return newObj;
}

module.exports = {arrayConcat, addProp};