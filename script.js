const audioCode = ``;
const piano = document.querySelector('#piano');

const hideElement = (id) => {
  const hidedBlock = document.getElementById(id);
  return hidedBlock.style.display === "none"
    ? (hidedBlock.style.display = "flex")
    : (hidedBlock.style.display = "none");
};

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    console.dir(e.key);
  };

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

//
window.addEventListener("keydown", function(e){
if(!(('qwertyuйцукенгQWERTYUЙЦУКЕНГ'.includes(e.key.toString()))&&(piano.style.display=='none'))){
    playSound(e);
}    
});