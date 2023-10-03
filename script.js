//element select and assigning it to variables
var cont = document.querySelector("#container");
var love = document.querySelector("i");

//double click event listener
cont.addEventListener("dblclick", () => {
  //both line under will make opacity higher and scale bigger with doubleclick
  love.style.opacity = 0.8;
  love.style.transform = "translate(-50%, -50%) scale(1.5)";

  //this lines under will vanish it with the time delay
  setTimeout(() => {
    love.style.opacity = 0;
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000); //setTimeout is used for delaying action & setTimeout takes two parameter-> 1. the function , 2. the time to delay in ms
});
