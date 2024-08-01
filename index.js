const enterKey = document.getElementById("enter-key");
const keyBoardKeyContainer = document.getElementById("keyboard-key-container");
const keyBoardKey = document.getElementById("keyboard-key");
const audio = new Audio("assets/twinkle.mp3");
window.addEventListener("keydown", function (e) {
  const enteredKeyText = e.key;
  if (
    e.ctrlKey &&
    (e.key === "c" || e.key === "v" || e.key === "z" || e.key === "x")
  ) {
    enterKey.innerHTML = `You Pressed <span id='key'>CTRL + ${enteredKeyText.toLocaleUpperCase()}</span>`;
  } else if (e.key === " ") {
    enterKey.innerHTML = "You Pressed <span id='key'>Space</span>";
  } else {
    enterKey.innerHTML = `You Pressed <span id='key'>${enteredKeyText}</span>`;
  }

  keyBoardKeyContainer.style.display = "block";
  keyBoardKey.innerText = e.keyCode;
  audio.play();
});
