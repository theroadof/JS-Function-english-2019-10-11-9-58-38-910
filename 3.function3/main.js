function alphabetSort(message){
    var arr = message.match(/./g);
    return arr.sort().reduce((preElem,curElem)=>{
        return preElem+curElem;
    });
}
alphabetSort('hello'); // should return 'ehllo'