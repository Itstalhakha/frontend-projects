const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');

// Button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleInput(button);
    });
});

// Handle button actions
function handleInput(button) {
    const value = button.getAttribute('data-value');

    if (button.id === 'clear') {
        display.value = '';
        return;
    }

    if (button.id === 'equals') {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
        return;
    }

    // Add value from buttons
    if (value !== null) {
        display.value += value;
    }
}


document.addEventListener('keydown', (e) => {
    const key = e.key;


    if (/^[0-9+\-*/.]/.test(key)) {
        display.value += key;
    }

    if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }


    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape") {
        display.value = "";
    }
});
