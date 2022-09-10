

/***********tamrin 8 : */
/*
let pastime =3600000;
let righnow = new Date();

formatdate(pastime,righnow)
function formatdate(pastime,righnow){

    if (pastime <= 1){
        alert("right now....!")
    } else if (pastime <= 60 ){
        alert (`${pastime} secoends ago ....!`)
    } else if (pastime <= 3600 ){
        alert (`${pastime/60} minets ago ....!`)
    } else if (pastime > 3600){ 
        var result = new Date(righnow-pastime*1000);
        var date = result.getFullYear()+'-'+(result.getMonth()+1)+'-'+result.getDate();
        var time = result.getHours() + ":" + result.getMinutes() + ":" + result.getSeconds();
        var dateTime = date+' '+time;   
        alert (`${dateTime} date ago ....!`)
    }else{
        alert("input variable isnt correct!")
    }

}
*/


