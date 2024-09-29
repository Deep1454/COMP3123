// javascript program that moves the last three characters at the front of the string.

const swap_characters = (string) => {

    if (string.length < 3) { // just making sure that the string is bigger then three characters 
        return string;
    }
    const length  = string.length; // getting the length of string.

    const last_character = string.substring(length - 3); //getting the last three character of the string and storing in the variable which can't be changed later.

    const rest_character = string.substring(0, length - 3); // same as the last three character. in this getting the rest character of the string.

    return last_character + rest_character; // just adding two strings together (last three character first and then the rest of them).
    
};

console.log(swap_characters("JAVASCRIPT"));
