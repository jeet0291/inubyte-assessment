function add(str){
    // negative numbers not allowed <negative_number>
    const errors = [];
    let total = 0;
    try {
        for(let i=0;i<str.length;i++){
            
            if(!isNaN(str[i])){
                if( typeof str[i-1] != 'undefined' &&  str[i-1] == '-'){
                    errors.push(`negative numbers not allowed -${str[i]}`)
                }
                total += Number(str[i]);
            }
        }
        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }
        return total;
    }catch(err){
        if(err){
            console.log(err);
        }
    }
}



// Use Case 1 //
let UC1 = add('8888888888');
console.log('Total: ', UC1)
// // Use Case 2 //
let UC2 = add('1\n2,3');
console.log('Total: ', UC2)
// // Use Case 3 //
let UC3 = add('//;\n1;2');
console.log('Total: ', UC3)
// Use Case 4 //
let UC4 = add('1111-81111-9');
console.log('Total: ', UC3)
