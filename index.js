function add(str){
    let total = 0;
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(!isNaN(char)){
            total += Number(char);
        }
    }
    return total;
}



// Use Case 1 //
let UC1 = add('8888888888');
console.log('Total: ', UC1)
// Use Case 2 //
let UC2 = add('1\n2,3');
console.log('Total: ', UC2)
// Use Case 3 //
let UC3 = add('//;\n1;2');
console.log('Total: ', UC3)
