function filterLongStrings(strings){
    if (!Array.isArray(strings)){
        return "Nhập không hợp lệ!";
    }
    if (strings.length == 0){
        return "Mảng không có phần tử nào";
    }
    let result = [];
    for (let i = 0; i < strings.length; i++){
        if (typeof strings[i] == 'string' && strings[i].length > 5){
            result.push(strings[i]);
        }
    }
    return result;
}
let inputArray = ["hello", "world", "JavaScript", "is", "awesome", "code"];
let outputArray = filterLongStrings(inputArray);
document.writeln(outputArray);