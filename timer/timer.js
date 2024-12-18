let countdownInterval;

function startCountdown() {

    clearInterval(countdownInterval);

    
    let hours = parseInt(document.getElementById("input-hours").value) || 0;
    let minutes = parseInt(document.getElementById("input-minutes").value) || 0;
    let seconds = parseInt(document.getElementById("input-seconds").value) || 0;

    
    let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalTimeInSeconds <= 0) {
        alert("Please set a valid time to start the countdown!");
        return;
    }

    countdownInterval = setInterval(() => {
        
        const displayHours = Math.floor(totalTimeInSeconds / 3600);
        const displayMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
        const displaySeconds = totalTimeInSeconds % 60;

        
        document.getElementById("display-hours").textContent = String(displayHours).padStart(2, '0');
        document.getElementById("display-minutes").textContent = String(displayMinutes).padStart(2, '0');
        document.getElementById("display-seconds").textContent = String(displaySeconds).padStart(2, '0');

        
        if (totalTimeInSeconds <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("display-hours").textContent = "00";
            document.getElementById("display-minutes").textContent = "00";
            document.getElementById("display-seconds").textContent = "00";

            
            const alarmSound = document.getElementById("alarm-sound");
            alarmSound.play();
        }

        
        totalTimeInSeconds--;
    }, 1000);
}

function resetCountdown() {
    
    clearInterval(countdownInterval);
    document.getElementById("display-hours").textContent = "00";
    document.getElementById("display-minutes").textContent = "00";
    document.getElementById("display-seconds").textContent = "00";
    document.getElementById("input-hours").value = "";
    document.getElementById("input-minutes").value = "";
    document.getElementById("input-seconds").value = "";

    
    const alarmSound = document.getElementById("alarm-sound");
    alarmSound.pause();
    alarmSound.currentTime = 0;
}