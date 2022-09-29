const modules = (() => {
  const INITIAL_DOCUMENT_TITLE = document.title;

  const setDocumentTitle = (targetCount) => {
    document.title = `(${targetCount}) ${INITIAL_DOCUMENT_TITLE}`;
  };

  const getRandom = (n) => Math.round(Math.random() * n);

  const getRandomMinMax = (min = 0, max = 100) => getRandom(max - min) + min;

  const getNodeList = (selector, context = document) => {
    return context.querySelectorAll(selector);
  };

  const getNode = (...args) => getNodeList(...args)[0];

  const create = (type, attrs = null, ...children) => {
    const element = document.createElement(type);
    if (attrs && typeof attrs === 'object' && !Array.isArray(attrs)) {
      for (const [name, value] of Object.entries(attrs)) {
        element.setAttribute(name, value);
      }
    }
    children.forEach((child) => element.append(child));
    return element;
  };

  const on = (element, type, listener) => {
    element.addEventListener(type, listener);
    return () => element.removeEventListener(type, listener);
  };

  const animate = (() => {
    let stopAnimateId;
    return (render, fps) => {
      stopAnimateId = setInterval(render, 1000 / fps);
      return () => clearInterval(stopAnimateId);
    };
  })();

  function AudioPlayer(source) {
    this._audio = create('audio', { src: source });
  }

  AudioPlayer.prototype.play = function (loop = false) {
    const { _audio: audio } = this;

    audio.play();

    if (loop) {
      on(audio, 'ended', audio.play.bind(audio));
    }
  };

  AudioPlayer.prototype.isPlaying = function () {
    return !this._audio.paused;
  };

  AudioPlayer.prototype.stop = function () {
    this._audio.pause();
    this._audio.currentTime = 0;
  };

  return {
    setDocumentTitle,
    getRandom,
    getRandomMinMax,
    getNode,
    getNodeList,
    create,
    on,
    animate,
    AudioPlayer,
  };
})();

/* -------------------------------------------------------------------------- */

const {
  getNode: $,
  on,
  getRandomMinMax,
  animate,
  setDocumentTitle,
  AudioPlayer,
} = modules;

const ANIMATE_NONE = 'animate-none';
let targetCount;
let min = 38;
let max = 99;
let step = 1;
let count = 0;
let fps = 60;

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
