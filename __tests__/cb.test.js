const {timeoutCallbackWithData, timeoutPromiseWithData} = require('../cb1');

describe("Callback tests", () => {
    test("the data is apple", done => {
       timeoutCallbackWithData(100,"apple", data => {
        expect(data).toBe("apple");
        done();
       });
    });

    test("the data is orange", () => {
        return timeoutPromiseWithData(1000, "orange")
                .then(data =>{
                    expect(data).toBe("orange");    
                });
    });

    test("the method reject if data is banana", () => {
        expect.assertions(1);
        return timeoutPromiseWithData(1000, "banana")
            .catch(err =>{
                expect(err).toMatchObject({
                    message: "no banana allowed"
                });    
            });
    });

    test("the data matches more oranges", () => {
        expect.assertions(1);
        return expect(
            timeoutPromiseWithData(1000, "more oranges")    
        ).resolves.toBe("more oranges");
        
    });

    test("reject bananas", () => {
        expect.assertions(1);
        return expect(
            timeoutPromiseWithData(1000, "banana")    
        ).rejects.toMatchObject({
            message: "no banana allowed"
        });
        
    });

    test("the data matches bananas", async () => {
        expect.assertions(1);

        const data = await timeoutPromiseWithData(1000,"tasty bananas");
        expect(data).toBe("tasty bananas");
    });
}); 