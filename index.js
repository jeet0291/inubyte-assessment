function add(str){
    let total = 0;
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(!isNaN(char)){
            console.log(char);
            total += Number(char);
        }
    }
    return total;
}


let total = add('12//3ksjh\nfksj;h32');
console.log('##', total)