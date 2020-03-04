module.exports =   function toReadable (number) {
    let digits=number.toString().split("");
    let ones =[" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens=[" " ," ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundred= " hundred"; 
    
    

    if (number==0) {
        return "zero";
    }

    if (number<20) {
        return ones[number];
    }

    if (number>=20 && number<100) {
       
        return `${tens[digits[0]]} ${ones[digits[1]]}`.trim();
    }

    if (number>=100) {
        if (digits[1]==1) {
        
            part2 = parseInt(digits[1] + digits[2], 10);
            split_part2=part2.toString();
            
            return ones[digits[0]] + hundred + " " + ones[split_part2];
        }

        if (digits[1]==0) {
        
            return ones[digits[0]] + hundred + " " + ones[digits[2]];
        }

        if (digits[2]==0) {
            part3 = parseInt(digits[1] + digits[2], 10);
            split_part3=part3.toString();
            
            return ones[digits[0]] + hundred + " " + tens[split_part3];
        
            //return ones[digits[0]] + hundred + " " + tens[digits[1]];
        }
        
      
        result =  ones[digits[0]] + hundred + " " + tens[digits[1]]  + " " + ones[digits[2]]; 
        return result.trim();
       
    }
    }

  
