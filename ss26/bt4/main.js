function isPrime(num){
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true; 
}
function filterPrimes(numbers){
    if (!Array.isArray(numbers)){
        return "Dữ liệu không hợp lệ";
    }
    if (numbers.length == 0){
        return "Mảng không có phần tử nào";
    }
    let primeNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        if (typeof num === 'number' && isPrime(num)){
            primeNumbers.push(num);
        }
    }
    return primeNumbers;
}
let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let outputArray = filterPrimes(inputArray);
document.writeln(outputArray);
let emptyArray = [];
let emptyOutput = filterPrimes(emptyArray);
document.writeln(emptyOutput);
let invalidInput = "abc";
let invalidOutput = filterPrimes(invalidInput);
document.writeln(invalidOutput); 
