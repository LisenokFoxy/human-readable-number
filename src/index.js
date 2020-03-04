export default function toReadable (number) {
    let digits=number.toString().split("");
    let ones =[" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens=[" " ," ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundred= " hundred"; 
    let thousand= "thousand";

    if (number==0) {
        return "zero";
    }

    if (number<20) {
        return ones[number];
    }

    if (number>=20 && number<100) {
       
        return tens[digits[0]] + ones[digits[1]];
    }

    if (number>=100) {
        return ones[digits[0]] + hundred + tens[digits[1]] + ones[digits[2]]; 
    }
    }

  
