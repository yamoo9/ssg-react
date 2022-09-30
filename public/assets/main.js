import {
  animate,
  AudioPlayer,
  getNode as $,
  getRandomMinMax,
  setDocumentTitle,
  on,
} from './modules/index.js';

const ANIMATE_NONE = 'animate-none';
let targetCount;
let min = 38;
let max = 99;
let step = 1;
let count = 0;
let fps = 60;

// OOJS
// new Constructor Function => create object
// Constructor.prototype

const ticSound = new AudioPlayer('/assets/media/tic.mp3');
const shuffleSound = new AudioPlayer('/assets/media/shuffle.mp3');

const appElement = $('.App');
const countElement = $('.Count', appElement);
const buttonElement = $('.Button', appElement);

const countUp = () => {
  countElement.textContent = count;
};

const addAnimateStopClassName = () => {
  countElement.classList.add(ANIMATE_NONE);
};

const removeAnimateStopClassName = () => {
  countElement.classList.remove(ANIMATE_NONE);
};

const handleRandomCountUp = () => {
  count = 0;
  targetCount = getRandomMinMax(min, max);

  setDocumentTitle(targetCount);
  removeAnimateStopClassName();
  shuffleSound.play(true);

  const stopAnimate = animate(() => {
    count += step;
    if (count >= targetCount) {
      count = targetCount;
      countUp();
      addAnimateStopClassName();
      stopAnimate();
      shuffleSound.stop();
    }
    countUp();
  }, fps);
};

const handlePlayTicSound = () => ticSound.play();

on(buttonElement, 'click', handleRandomCountUp);
on(buttonElement, 'mouseenter', handlePlayTicSound);
