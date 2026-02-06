console.log(palindrome(prompt("type a palindrome")));

function palindrome(word) {
    let noSpaces = "";
    for (let letter of word){
        if(letter != " "){
            noSpaces += letter;
        }
    }
    let revWord = "";
    for(let i = noSpaces.length - 1; i >= 0; i--){
        revWord += noSpaces[i];
    }
    if(noSpaces === revWord){
        return `${word} is a palindrome`;
    } else {
        return `${word} is not a palindrome`;
    }
}