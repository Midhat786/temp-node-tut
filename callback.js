// Callback
function greet(name, callback1, callback2){
    console.log("Hello",  name , "!" );
    callback1(name);
    callback2(name)
 }
 
  function howareyou(name){
    console.log("How are you?", name);

  }
 function sayGoodbye(name){
  console.log("Goodbye", name )

 }
 greet("Alice", howareyou, sayGoodbye)
