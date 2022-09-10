

/***************************************tamrin 1 : work with at */
/*
let arrmaghlob = [];
let lengthofarr = +prompt("please inter number of array maghlob");
//let lengthofarr =5;

if (lengthofarr <= 1){
    alert( "cannt build a maghlob arr with length 1 and under 1")
}else if (lengthofarr%2 == 0){
    lengthofarr= lengthofarr+1;
    alert( `cannt build a maghlob arr with even numbers, then we build with : ${lengthofarr}`);
    maghlob (lengthofarr);
}else if (lengthofarr%2 == 1){
    maghlob (lengthofarr);
}else {
    alert( "pleas inter valid number")
}


function maghlob(leng){

    for (let i=1 ; i<=leng ; i=i+1){
        arrmaghlob.push(+prompt(`please inter index ${i}  of array maghlob`))   
    }
    //arrmaghlob = [1,2,3,2,5];

    let halfleng =Math.floor(leng/2);
    let check = 0;

    for (let i=0 ; i<halfleng ; i=i+1){  
        if (arrmaghlob.at(i) == arrmaghlob.at(-i-1) ){
            ++check;
        } 
    }

    if (check == halfleng ){
        alert (`arraye  ${arrmaghlob}  is a maghlob array!`)
    }else {
        alert (` this arraye  ${arrmaghlob}  is **NOt** a maghlob array!`)
    }

}
*/

/*****tamrin 1 :method 2 */
/*
let arrmaghlob = [];
let lengthofarr = +prompt("please inter number of array maghlob")


if (lengthofarr == 1){
    alert( "cannt build a maghlob arr with length 1")
}else if (lengthofarr%2 == 0){
    lengthofarr= lengthofarr+1;
    alert( `cannt build a maghlob arr with even numbers, then we build with : ${lengthofarr}`);
    maghlob (lengthofarr);
}else if (lengthofarr%2 == 1){
    maghlob (lengthofarr);
}else {
    alert( "pleas inter valid number")
}

function maghlob (leng){

    let halfleng =Math.floor(leng/2)+1;
    let x =halfleng-1

    for (let i=1 ; i<=leng ; i=i+1){

        if (i > halfleng ){
            arrmaghlob.push(x)
            x= x-1
        } else if (i <= halfleng ){
            arrmaghlob.push(i)
        }
       
    }
    
    console.log(arrmaghlob)

}
*/