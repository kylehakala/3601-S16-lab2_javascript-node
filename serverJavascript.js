// Javascript for the SERVER side.

// crappy shim for testing:
if (typeof exports === 'undefined') {
    exports = {};
}

exports.stringLength = function(str){
    return str.length;
};

exports.arrayLength = function(arr) {
    return arr.length;
};

// [[4, 3.333], []]
var gpa = exports.gpa = function(stuff) {
    var credits = 0;
    var points = 0;

    for (var i = 0; i < stuff.length; i++) {
        credits += parseFloat(stuff[i][0]);
        points += parseFloat(stuff[i][0]) * parseFloat(stuff[i][1]);
    }

    if (credits <= 0) {
        throw new Error('You\'re an idiot. Go to school and learn how this crap works.');
    }

    return parseFloat(points / credits).toFixed(3);
};
