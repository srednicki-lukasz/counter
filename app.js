let outputValue = 0;

// counter
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const btnClassList = e.currentTarget.classList;

        btnClassList.contains('plus') ? outputValue++ : btnClassList.contains('minus') ? outputValue-- : outputValue = 0;

        document.querySelector('.counter').textContent = outputValue;
    })
});