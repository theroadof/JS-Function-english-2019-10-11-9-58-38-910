function reverseString(message){
    var str = message.match(/./g);
    return str.reverse().reduce((preElem,curElem)=>{
        return preElem+curElem;
    })
}