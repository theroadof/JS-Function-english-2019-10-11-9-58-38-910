function palindrome(message){
    var arr = message.match(/./g);
    var reverseStr = arr.reverse().reduce((preElem,curElem)=>{
        return preElem+curElem;
    })
    return message===reverseStr;
}