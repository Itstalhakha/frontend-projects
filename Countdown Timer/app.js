const subitBtn = document.getElementById('startBtn');

subitBtn.addEventListener('click', function() {
    const dateInput = document.getElementById('date').value;
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');  
    const progressBar = document.getElementById('progress');
    
    const targetDate = new Date(dateInput);
    const totalDuration = targetDate - new Date();  // Total time from now to target date
    
    let interval = setInterval(function() {
        const currentDate = new Date();
        const totalSeconds = Math.floor((targetDate - currentDate) / 1000);
        // console.log(totalSeconds);

        if (totalSeconds <= 0) {
            clearInterval(interval);
            alert("Countdown finished!");
            days.innerHTML = "0";
            hours.innerHTML = "0";
            minutes.innerHTML = "0";
            seconds.innerHTML = "0";
            progressBar.style.width = '100%';
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const d = Math.floor(totalSeconds / 3600 / 24);
        const h = Math.floor((totalSeconds / 3600) % 24);
        const m = Math.floor((totalSeconds / 60) % 60);
        const s = Math.floor(totalSeconds % 60);

        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;

        const elapsed = currentDate - new Date();  
        const progressPercent = ((totalDuration - (targetDate - currentDate)) / totalDuration) * 100;

        progressBar.style.width = progressPercent + '%';
    }, 1000);
});
