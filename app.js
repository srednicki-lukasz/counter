let outputValue = 0;
const counter = document.querySelector('.counter');

// counter
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const btnClassList = e.currentTarget.classList;

        btnClassList.contains('plus') ? outputValue++
        : btnClassList.contains('minus') ? outputValue--
        : outputValue = 0;

        outputValue > 0 ? counter.style.color = 'green'
        : outputValue < 0 ? counter.style.color = 'red'
        : counter.style.color = 'black'

        counter.textContent = outputValue;
    })
});