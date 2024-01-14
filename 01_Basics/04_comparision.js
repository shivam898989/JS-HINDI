// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* output 
false
false
true

the reason is that == and comparisons > ,< , >= , <= wors differently.
 Comparison convert null to a number treating it as 0.
 that is why null >= 0 is and null > 0 is false */

//  console.log(undefined == 0);
//  console.log(undefined > 0);
//  console.log(undefined < 0);

// ===

console.log("2" === 2);