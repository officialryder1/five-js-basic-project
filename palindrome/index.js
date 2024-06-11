const input = document.getElementById('input')

function reverseString(str){
    // To reverse the string
    // split breakdown a sting 
    // for example hello it will be h,e,l,l,o 
    // while reverse reverses the str from the bad
    // then join join the str e.g h,e,l,l,o = hello
    return str.split("").reverse().join("")
}

const check = () => {
    const value = input.value;
    const reverse = reverseString(value)
    if(reverse === value){
        alert(" it a palindrome")
    }else{
        alert("Not a palindrome")
    }
    input.value = ""
} 