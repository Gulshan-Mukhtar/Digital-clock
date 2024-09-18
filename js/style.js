
function formatTime(value) {
    return value.toString().padStart(2, '0');
}

function updateClock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    document.querySelector('#hr').innerHTML = hours;
    document.querySelector('#min').innerHTML = minutes;
    document.querySelector('#sec').innerHTML = seconds;
}

updateClock();

setInterval(updateClock, 1000);


