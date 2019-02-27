const {myConcat} = require("../myconcat").arrayConcat;
const {addPro} = require("../myconcat").addPro;

describe("My Concat and addPro", () => {
    test("it should concat two arrays", () =>{
        expect(myConcat([1,2], [3])).toEqual([1,2,3]);
    });

    test("it throws if parameter 1 is not an array", () =>{
        expect(() => {
            myConcat("venkat", [4]);
        }).toThrow();
    });

    test("it throws if parameter 2 is not an array", () =>{
        expect(() =>{
            myConcat([], false);
        }).toThrow();
    });
    //
    test("it adds a new property to an object", () =>{
        const obj = {
            hello: "world"
        }
        expect(addPro(obj, "num", 5)).toHaveProperty("num", 5);
    });

    test("it throws if the object already has that property", () =>{
        const obj = {
            hello: "world"
        };
        expect(() =>{
            addPro(obj, "hello", []);
        }).toThrow();
    });
});