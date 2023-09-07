var randomnumber=Math.floor(Math.random() * 6) + 1;
var randomnumber1=Math.floor(Math.random() * 6) + 1;
console.log(randomnumber)
if(randomnumber!==0){
    var randomimage="images"+"/dice"+randomnumber+".png";
    var img1=document.querySelector(".img1");
    img1.setAttribute("src",randomimage);
}



console.log(randomnumber1)
if(randomnumber1!==0){
    var randomimage2="images"+"/dice"+randomnumber1+".png";
    var img2=document.querySelector(".img2");
    img2.setAttribute("src",randomimage2);
    


}

if(randomnumber>randomnumber1){
       console.log(document.getElementsByTagName("h1"))
      document.getElementsByTagName("h1")[0].innerHTML="😍Play one wins";
      
   }
if(randomnumber<randomnumber1){
    document.getElementsByTagName("h1")[0].innerHTML="😍Play two wins";
}
if(randomnumber===randomnumber1){
    document.getElementsByTagName("h1")[0].innerHTML="😍Duel match";
}



