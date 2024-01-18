let a = 1;
let b = 2;

// ++a: Prefix ++ --> increase 1 step
// b++: Postfix ++ --> increase 1 step after operation
let c = ++a + b++;

console.log(a, b, c)

// a = ? , b = ? , c = ?
// a = 2
// c = 4
// b = 3

/*
* prefix > right operand > assign result into left operand > postfix
 */