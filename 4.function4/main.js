function countWords(message){
    var arr = message.match(/\b/g);
    console.log(arr);
    return arr.length/2;
}
countWords('Good morning, I love JavaScript.'); // should return 5