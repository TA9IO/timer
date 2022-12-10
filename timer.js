/* creates a timer that counts down from the duration input to 0. */
//timer class
/* A constructor function that creates a new instance of the Timer class. */
class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
      /* Creating a new instance of the durationInput variable. */
      /* The Timer class has a constructor that takes in a durationInput, startButton, and pauseButton. 
      It also has a start method that starts the timer and a tick method that decrements the timer. 
      The timer is paused when the durationInput is focused */
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
  
      if (callbacks) {
        this.onStart = callbacks.onStart;
        this.onTick = callbacks.onTick;
        this.onComplete = callbacks.onComplete;
      }
  
      this.startButton.addEventListener("click", this.start);
      this.pauseButton.addEventListener("click", this.pause);
      this.durationInput.addEventListener("focus", this.pause);
    }
  
    start = () => {
      if (this.onStart) {
        this.onStart(); //callback
      }
      this.tick();
      this.interval = setInterval(this.tick, 1000);
      // console.log(timer);
    };
    tick = () => {
      // stop the timer when reach 0
      if (this.timeRemaining <= 0) {
        this.pause();
        if (this.onComplete) {
            this.onComplete()
        }
      } else {
        let timeRemaining = this.timeRemaining;
        this.timeRemaining = timeRemaining - 1;
        if (this.onTick) {
          this.onTick();
        }
      }
    };
  
    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
  
    set timeRemaining(time) {
      return (this.durationInput.value = time);
    }
    pause = () => {
      clearInterval(this.interval);
  
    };
  }