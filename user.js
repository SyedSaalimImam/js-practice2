var firstsub=+prompt("ënter marks of chemistry: ");
var secondsub=+prompt("ënter marks of maths: ");
var thirdsub=+prompt("ënter marks of physics: ");
var fourthsub=+prompt("ënter marks of english: ");
var fifthsub=+prompt("ënter marks of urdu: ");
console.log(firstsub);
console.log(secondsub);
console.log(thirdsub);
console.log(fourthsub);
console.log(fifthsub);

var total=parseFloat(firstsub)+parseFloat( secondsub)+ parseFloat( thirdsub)+parseFloat( fourthsub)+ parseFloat( fifthsub);
var per=parseFloat(total/500)*100;
console.log("total marks:",total);
console.log("percentage:",per);
if(per>90){
    console.log("A+")
}
else if(per>80 && per<=90){
    console.log("A")
}
else if(per>70 && per<=80){
    console.log("B+")
}
else if(per>60 && per<=70){
    console.log("B")
}
else {
    console.log("FAIL")
}







var officer ="yes";
var assistat="yes"
if(officer == "yes"){
    console.log("doc submitted");
}
else if(assistat=="yes"){
    console.log("waspsi");
}
else{
    console.log("return home")
}

var age=prompt("Enter your age");
var stdcard = false;
if(age>18 ){
    console.log("student allowed to enter")
}
else if(stdcard == false){
console.log("you are allowed")
}
else{
console.log("you are not allowed")
}