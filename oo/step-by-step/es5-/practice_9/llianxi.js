function add(j, k){
    return j+k;
}

function sub(j, k){
    return j-k;
}
console.log(add(5,3)); //8
console.log(add.call(sub, 5, 3));
console.log(sub(5,3));