function findMaxAndPosition(numbers){
    if (!Array.isArray(numbers)){
        return "Dữ liệu không hợp lệ";
    }
    if (numbers.length == 0){
        return "Mảng không có dữ liệu";
    }
    let max = numbers[0];
    let position = 0;
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > max){
            max = numbers[i];
            position = i;
        }
    }
    document.writeln("max = " + max);
    document.writeln("position: " + position);
}
let inputArray = [10, 9, 5, 11, 24, 5];
findMaxAndPosition(inputArray);
let emptyArray = [];
document.writeln(findMaxAndPosition(emptyArray));
let invalidInput = "abc";
document.writeln(findMaxAndPosition(invalidInput)); 
