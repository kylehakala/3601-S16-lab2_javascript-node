describe('the GPA calculator', function(){
    it('calculates GPA correctly for one class', function() {
        expect(gpa([['2', '2']])).toBe(2);
    });

    it('calculates GPA correctly for 3 classes', function() {
        expect(gpa([['4', '3.667'],['3', '2.333'],['3', '3']])).toBe(3.0667);
    });

    it('calculates GPA correctly for an overachiever', function() {
        expect(gpa([['4', '4'], ['4', '4'], ['4', '4']])).toBe(4);
    });

    it('correctly insults user for not having any credits or points', function() {
        expect(function() {
            gpa([[0,0],[0,0],[0,0]]);
        }).toThrowError();
    });
});
