let bag="";
let str="nitin";
for(let i=0;i<str.length;i++){
    bag+=str[i];
}

if(str===bag){
    console.log("palindrome");
} else {
    console.log("Not a palindrome");
}