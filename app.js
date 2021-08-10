// const dec=document.getElementById("dec");
// const reset=document.getElementById("reset");
// const inc=document.getElementById("inc");

//const count=document.getElementById("count");
 
let count=0;

dec.addEventListener('click', function(){
        console.log("yeah");
        count =count-1;
        console.log(count);
        document.getElementById("count").innerHTML=count;
       if(count<0){
        document.getElementById("count").style.color="red";
       }
});

reset.addEventListener('click', function(){
    console.log("yeah");
    count =0;
    console.log(count);
    document.getElementById("count").innerHTML=count;
    document.getElementById("count").style.color="black";
});

inc.addEventListener('click', function(){
    console.log("yeah");
    count =count+1;
    console.log(count);
    document.getElementById("count").innerHTML=count;
    // document.getElementById("count").style.color="green";
    if(count>0){
        document.getElementById("count").style.color="green";
       }
});