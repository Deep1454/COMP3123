// Javascript program that capitalize the first letter of each word of given string.


function firstLetter_capital(string){
    let str = string.split(" "); //I used split so that we can access each index of string as it gets convertes array.\
    for(i=0; i < str.length; i++){  // Using for loop we will gonna access each and every index of string 
        str[i] = str[i][0].toUpperCase() + str[i].substring(1) // used substring to add rest of the string after upercasing the first letter.
    }
    return str. join(" "); 
}

console.log(firstLetter_capital("hello my name is deep"));
