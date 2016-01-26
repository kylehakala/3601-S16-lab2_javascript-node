
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    ////this test should fail.
    it('this test should fail!', function(){
        expect(returnKittens()).toBe("kittens");
    });
});

describe('our new function', function(){
    it('correctly returns the size of an array', function() {
        expect(testArrayLength([1, 2, 3])).toBe(3);
        expect(testArrayLength([])).toBe(0);
    });
});
