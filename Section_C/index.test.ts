import { sayNumber } from './main.js';

// var assert = require('assert');

console.assert(sayNumber(11) == "Eleven.", `Expected: Eleven. Got: ${sayNumber(11)}`)
console.assert(sayNumber(14) == "Fourteen.", `Expected: Fourteen. Got: ${sayNumber(14)}`)
console.assert(sayNumber(15) ==  "Fifteen.",  `Expected: Fifteen.. Got: ${sayNumber(15)}`)
console.assert(sayNumber(43) == "Forty three.",  `Expected: Forty three. Got: ${sayNumber(43)}`)
console.assert(sayNumber(50) ==  "Fifty.",  `Expected: Fifty.. Got: ${sayNumber(50)}`)
console.assert(sayNumber(1001) =="One thousand and one.",  `Expected: One thousand and one. Got: ${sayNumber(1001)}`)
console.assert(sayNumber(20000) == "Twenty thousand.",  `Expected: Twenty thousand. Got: ${sayNumber(20000)}`)
console.assert(sayNumber(1033286) == "One million thirty three thousand two hundred and eighty six.",  `Expected: One million thirty three thousand two hundred and eighty six.. Got: ${sayNumber(1033286)}`)
console.assert(sayNumber(12000013) == "Twelve million and thirteen.",  `Expected: Twelve million and thirteen. Got: ${sayNumber(12000013)}`)
console.assert(sayNumber(90376000010012) ==   "Ninety trillion, three hundred and seventy six billion, ten thousand and twelve.",  `Expected: Ninety trillion, three hundred and seventy six billion, ten thousand and twelve.N. Got: ${sayNumber(90376000010012)}`) 


