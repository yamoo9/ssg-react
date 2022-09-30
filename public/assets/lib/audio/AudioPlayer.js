import { create, on } from '../dom/index.js';
import { isString, throwTypeError } from '../utils/index.js';

/* -------------------------------------------------------------------------- */
/* OOJS：Object Oriented JavaScript                                            */
/* -------------------------------------------------------------------------- */

// Constructor, Prototype
// audio 생성하고, 컨트롤(재생, 일시정지, 정지) 기능 부여
{
  function AudioPlayer(source) {
    if (!isString(source)) {
      throwTypeError('source 인자는 오디오 음원 경로(문자 값)이어야 합니다.');
    }

    this._audio = create('audio', {
      src: source,
    });
  }

  AudioPlayer.prototype.play = function () {
    this._audio.play();
  };

  AudioPlayer.prototype.loopPlay = function () {
    this.play();
    this._audio.addEventListener('ended', () => {
      this.play();
    });
  };

  AudioPlayer.prototype.pause = function () {
    this._audio.pause();
  };

  AudioPlayer.prototype.stop = function () {
    this.pause();
    this._audio.currentTime = 0;
  };

  AudioPlayer.prototype.isPlaying = function () {
    return !this._audio.paused;
  };
}

// AudioPlayer class 문법을 사용해서 구현합니다.
export class AudioPlayer {
  #audio = null;

  constructor(source) {
    if (!isString(source)) {
      throwTypeError('source 인자는 오디오 음원 경로(문자 값)이어야 합니다.');
    }

    this.#audio = create('audio', {
      src: source,
    });
  }

  play() {
    this.#audio.play();
  }

  loopPlay() {
    this.play();
    on(this.#audio, 'ended', this.play.bind(this));
    // this.#audio.addEventListener('ended', this.play.bind(this));
  }

  pause() {
    this.#audio.pause();
  }

  stop() {
    this.pause();
    this.#audio.currentTime = 0;
  }

  isPlaying() {
    return this.#audio.paused;
  }
}
