class Counter {
    outputValue = 0;

    constructor() { }

    increase() {
        this.outputValue++;
    }

    decrease() {
        this.outputValue--;
    }

    reset() {
        this.outputValue = 0;
    }

    update() {
        output.innerText = this.outputValue;

        if (this.outputValue > 0) {
            output.style.color = 'green';
        }
        else if (this.outputValue < 0) {
            output.style.color = 'red';
        }
        else {
            output.style.color = 'black';
        }
    }
}

const output = document.querySelector('.output');
const increaseButton = document.querySelector('[data-increase]');
const decreaseButton = document.querySelector('[data-decrease]');
const resetButton = document.querySelector('[data-reset]');

const counter = new Counter();

increaseButton.addEventListener('click', () => {
    counter.increase();
    counter.update();
});

decreaseButton.addEventListener('click', () => {
    counter.decrease();
    counter.update();
});

resetButton.addEventListener('click', () => {
    counter.reset();
    counter.update();
});