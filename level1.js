kaboom();


loadSprite("bean", "assets/egg1.png")

loadSound("crack", "assets/crack.mp3")

add([
  sprite("bg", {width: width(), height: height()}),
  z(-2),
]);

const box = add([
  rect(600, 300),
  pos(350,150),
  color(163, 199, 188),
  z(2)
]);

const myText = add([
  text("ohhhh, fun little easter egg!"),
  pos(370,280),
  scale(0.28),
  color(255, 255, 255),
  z(3)
]);

loadSprite("bg", "assets/bg.jpg");


myText.text ="Press the space bar to hatch your dinosaur!"


onKeyPress("space", () => {
  destroy(myText);
  destroy(box);
});

const PRESS_COUNT = 10;

loadSprite("alternate-image", "assets/egg2.png");
loadSprite("egg3", "assets/egg3.png")
loadSprite("egg4", "assets/egg4.png");
loadSprite("egg5", "assets/egg5.png");
loadSprite("egg6", "assets/egg6.png");
loadSprite("eggDino", "assets/eggDino.png");



let counter = 0;


onKeyPress("space", () => {
 
  counter++;

  if (counter === 1) {
    
    add([
      sprite("bean"),
      pos(400,280),
      scale(0.5),
      "bean",
    ]);

  }
  if (counter === PRESS_COUNT) {
    
    destroy(get("bean")[0]);
    add([
      sprite("alternate-image"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "alternate-image",
    ]);
    play("crack")

  }
  if (counter === 20) {
    
    destroy(get("alternate-image")[0]);
    add([
      sprite("egg3"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "egg3",
    ]);
    play("crack")
  }
  if (counter === 30) {
    
    destroy(get("egg3")[0]);
    add([
      sprite("egg4"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "egg4",
    ]);
    play("crack")
  }
  if (counter === 40) {
    
    destroy(get("egg4")[0]);
    add([
      sprite("egg5"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "egg5",
    ]);  
    play("crack")
  }
  if (counter === 50) {
    
    destroy(get("egg5")[0]);
    add([
      sprite("egg6"),
      pos(center()),
      scale(0.5),
      pos(400,280),
      "egg6",
      play("crack")
    ]);
  }
  if (counter === 60) {
    
    destroy(get("egg6")[0]);
    add([
      sprite("eggDino"),
      pos(center()),
      scale(0.5),
      pos(550,330),
      "eggDino",
      play("crack")
    ]);
  }
  if (counter === 62) {
    
      const dialogBox = document.createElement("div");
  dialogBox.innerHTML = `
    <p>Nice! Please name your dino:</p>
    <input type="text" id="name-input">
    <button id="submit-button">Submit</button>
  `;
  dialogBox.style.position = "absolute";
  dialogBox.style.top = "50%";
  dialogBox.style.left = "50%";
  dialogBox.style.transform = "translate(-50%, -50%)";
  dialogBox.style.backgroundColor = "white";
  dialogBox.style.padding = "69px";
  dialogBox.style.boxShadow = "0 0 10px rgba(255,211,155, 0.5)";
  dialogBox.style.zIndex = "9999";
  document.body.appendChild(dialogBox);

  const nameInput = document.getElementById("name-input");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", () => {
    const name = nameInput.value;
    console.log("The player's name is: ", name);
    document.body.removeChild(dialogBox);
    const box = add([
      rect(600, 300),
      pos(350,150),
      color(0,100,0),
      z(2)
    ]);

    const link = add([
      text("Return to Home"),
      pos(width() / 2, height() / 2),
      origin("center"),
      color(255, 255, 255),
      scale(0.6),
      z(777),
      area({ cursor: "pointer", }),
    ]);
    
    
    link.clicks(() => {
      window.open("home2.html", "_blank");
    });
    
  });
  }

});




