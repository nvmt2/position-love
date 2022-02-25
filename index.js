const baseUrlImg = './assets/';

const imageNode = document.querySelector('.image-posture');
const lengthArrayImage = 18;

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomImage = () => {
  const randomNumber = randomIntFromInterval(1, lengthArrayImage);

  imageNode.src = `${baseUrlImg}/${randomNumber}.jpg`;
};
