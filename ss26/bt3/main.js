function filterValidEmails(emails){
    if (!Array.isArray(emails) || emails.length === 0){
        return emails.length === 0 ? "Mảng không có phần tử nào" : "Dữ liệu không hợp lệ";
    }
    return emails.filter(email => typeof email === 'string' && email.includes('@') && !email.includes(' '));
}
let inputArray = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let outputArray = filterValidEmails(inputArray);
document.writeln(outputArray);