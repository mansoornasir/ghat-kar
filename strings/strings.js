const firstName = "Saman"
const lastName = "Bibi"
let a = 10;
// + is used for concatination
// .concat can also be used
// length
// Template Literals
// IndexOf

// console.log(`First Name ${firstName} and Last Name is ${lastName}` )

// console.log(`Number ${a*10}`)

const str = "testemail.com";// csv comma seperated values

const newStr = str.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g)


console.log(newStr)