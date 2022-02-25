const baseUrlImg = './assets/';

const imageNode = document.querySelector('.image-posture');
const lengthArrayImage = 18;

if (!('ondevicemotion' in window)) {
  alert('Not Supported');
}

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomImage = () => {
  const randomNumber = randomIntFromInterval(1, lengthArrayImage);

  imageNode.src = `${baseUrlImg}/${randomNumber}.jpg`;
};

//listen ano to shake event
var shakeEvent = new Shake({ threshold: 15 });
shakeEvent.start();
window.addEventListener(
  'shake',
  function () {
    randomImage();
  },
  false
);

// //stop ny listening
// function stopShake(){
// shakeEvent.stop();
// }
