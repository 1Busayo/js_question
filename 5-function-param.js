'use strict';
function myConcat(separator) {
    let vals = Array.prototype.slice.call(arguments, 1);
    return vals.join(separator);
}

console.log( myConcat(',', 'red', 'orange', 'blue') );

console.log( myConcat(',', 'sage', 'basil', 'oregano', 'pepper', 'parsley') );
