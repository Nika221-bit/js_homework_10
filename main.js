//დავალება 8.2

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");

let text1 = p1.textContent;
let text2 = p2.textContent;
let text3 = p3.textContent;

console.log(text1);
console.log(text2);
console.log(text3);

//დავალება 8.3

const pirveli = document.querySelector("#twoParagraphs p");
const meore = pirveli.textContent;
console.log(meore);

//დავალება 8.4

const first = document.querySelector(".p ");
const second = first.textContent;
console.log(second);

//დავალება 8.5

  function button1() {
      console.log("პირველი ღილაკი");
   }

   function button2() {
      console.log("მეორე ღილაკი");
   }

   function button3() {
      console.log("მესამე ღილაკი");
   }

//დავალება 8.6

   function sum() { 
        console.log(2 + 2); 
      } 
      function multiplication() { 
        console.log(3 * 3); 
      } 
      function divide() { 
        console.log(4 / 4); 
      } 

    document.getElementById("button_1").addEventListener("click", sum);
    document.getElementById("button_2").addEventListener("click", multiplication);
    document.getElementById("button_3").addEventListener("click", divide);


// დავალება 8.7

 function myFunc() { 
        console.log('საინტერესო შეტყობინება'); 
      }
   document.getElementById("elem1").addEventListener("click", myFunc);
    document.getElementById("elem2").addEventListener("click", myFunc);
    document.getElementById("elem3").addEventListener("click", myFunc);

//დავალება 8.8

  function myFunc_1() { 
        alert('საინტერესო შეტყობინება'); 
      } 
 
      function myFunc2() { 
        console.log('სუპერ ღილაკზე მოხდა დაკლიკება'); 
      } 

document.getElementById("button1").addEventListener("click", myFunc2);

//დავალება 8.9

 function myFunc1() { 
        alert('შეტყობინება 1'); 
      } 
      function myFunc2() { 
        alert('შეტყობინება 2'); 
      } 
      function myFunc3() { 
        alert('შეტყობინება 3'); 
      } 
      document.getElementById("myText").addEventListener("click", function() {
      myFunc1();
      myFunc2();
      myFunc3();
    });

//დავალება 8.10
   
  let count = 0; 

  function double(){
    count++;
    if(count === 2){
      console.log("სუპერ ღილაკზე მოხდა ორმაგი დაკლიკება");
      count = 0;
    }
  }

//დავალება 8.11

document.getElementById("button_pointer").addEventListener("mouseover",function(){
   console.log("სუპერ ღილაკზე მოხდა მაუსის გადატარება")
})

//დავალება 8.12




