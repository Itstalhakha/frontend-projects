# Countdown Timer

A fully functional countdown timer built with HTML, CSS, and JavaScript. Users can set a custom date and time to count down to.

## Features

- ⏱️ Custom date and time input
- 🎨 Responsive and modern UI
- ⚡ Real-time countdown display
- 🔔 Completion notification

## How to Use

1. Enter your target date and time
2. Click "Start"
3. Watch the countdown in real-time

## Files

- `index.html` - Structure
- `style.css` - Styling
- `script.js` - Countdown logic

## Code Example

```html
<input type="datetime-local" id="dateInput">
<button onclick="startCountdown()">Start</button>
<div id="timer">00:00:00:00</div>
```

```javascript
function startCountdown() {
    const target = new Date(document.getElementById('dateInput').value).getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('timer').textContent = `${days}:${hours}:${mins}:${secs}`;
    }, 1000);
}
```
