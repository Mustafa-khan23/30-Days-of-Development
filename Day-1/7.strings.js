//strings and string methods in JS

//string declaration
let name = "Mustafa";
let fruits = "apple,banana,guava";
let arrDetails = ["mustafa", "khan"];
//----------------------------------------------------------------------

//1. split(separator, limiter)
console.log(fruits.split(","));

//2. join(separator)
console.log(arrDetails.join(" "));

//3. trim();
console.log(name.trim());

//4. replace
console.log(name.replace("M", "a")); //replace the first occurence with desired value

//5. replaceAll
console.log(name.replaceAll("a", "m")); //replace all values

//6. toUpperCase
console.log(name.toUpperCase());

//7. toLowerCase
console.log(name.toLowerCase());

//8. includes
console.log(name.includes("M"));

//9. startsWith & endsWith
console.log(name.startsWith("M"));
console.log(name.endsWith("a"));

//10. Template literals;
console.log(`Hello ${name}`);
