let testSimple = document.querySelector('.testSimple');
const btn = document.getElementById('btn');
btn.addEventListener('click',() =>{
  const answer = testSimple.t.value; 
  const firstPar = document.querySelector('#firstPar');
    event.preventDefault(); 
    console.log(answer); 
    let img = document.createElement("img");
 
    img.src = "pictures/goodwork.png";
  console.log(img);
 

    
    
    if (answer=="correct") {
         alert("Great job!");

    }
    else {
           alert("Try again... ")}
});




let testSimple2 = document.querySelector('.testSimple2');
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click',() =>{
  const answer = testSimple2.t2.value;  
    event.preventDefault(); 
    console.log(answer);
     
    if (answer=="correct") {
         alert("Great job!");} else {
           alert("Try again... ")}
         
});

let testSimple3 = document.querySelector('.testSimple3');
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click',() =>{
  const answer = testSimple3.t3.value;  
    event.preventDefault(); 
    console.log(answer);
     
    if (answer=="correct") {
         alert("Great job!");}else {
           alert ("Try again... ")}
});

let testSimple4 = document.querySelector('.testSimple4');
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click',() =>{
  const answer = testSimple4.t4.value;  
    event.preventDefault(); 
    console.log(answer);
     
    if (answer=="correct") {
         alert("Great job!");}else {
           alert ("Try again... ")}
});
