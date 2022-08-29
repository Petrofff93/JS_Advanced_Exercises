function greatestDivisor(num1, num2){
    if(num2) {
        return greatestDivisor(num2, num1 % num2);
    } else {
        console.log(num1);
    }
}

greatestDivisor(2154, 458)