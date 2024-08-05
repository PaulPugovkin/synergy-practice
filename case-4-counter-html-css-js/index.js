document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter-display');
    const plusBtn = document.getElementById('plus-btn');
    const minusBtn = document.getElementById('minus-btn');
    const message = document.getElementById('message');

    let count = 0;

    function updateCounterDisplay() {
        counterDisplay.textContent = count;

        if (count > 0) {
            counterDisplay.style.backgroundColor = 'yellow';
        } else if (count < 0) {
            counterDisplay.style.backgroundColor = 'green';
        } else {
            counterDisplay.style.backgroundColor = 'red';
        }

        plusBtn.disabled = (count >= 10);
        minusBtn.disabled = (count <= -10);

        if (count === 10 || count === -10) {
            message.textContent = 'Вы достигли экстремального значения';
        } else {
            message.textContent = '';
        }
    }

    plusBtn.addEventListener('click', () => {
        count++;
        updateCounterDisplay();
    });

    minusBtn.addEventListener('click', () => {
        count--;
        updateCounterDisplay();
    });

    updateCounterDisplay();  // Initial call to set the background color and button state
});
