
let string = "    this is the New Product ";

console.log("-------String Methods-------")

console.log("\nLength : " + string.length)

console.log("\nCharacter at index ( 6 ) : " + string.charAt(6))
console.log("\nCharacter code at index ( 6 ) : " + string.charCodeAt(6))

console.log("\nConcatination of two strings : " + string.concat(' of nike'))

console.log("\nConverting string to upper case : " + string.toUpperCase())
console.log("\nConverting string to lower case : " + string.toLocaleLowerCase())

console.log("\nBreak string using slice method : " + string.slice(4, 15))

let newString = string.substring(0, 11);
console.log("\nSubstring : " + newString)

console.log("\nTrimmed string : " + string.trim())

console.log("\nSplit the string with ('') : " + string.split(''))

string = string.replace('New', 'old')
console.log("\nReplace the word \'New' with \'old' : " + string)

console.log("\nRepeat the string 6 time : \n" + string.repeat(6))

console.log("\nSearching index of \'o' : " + string.indexOf('o'))
console.log("\nSearching the last index of \'o' : " + string.lastIndexOf('o'))
console.log("\nChecking ths string has charater \'o' or not : " + string.includes('o'))
