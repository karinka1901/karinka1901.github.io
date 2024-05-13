function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours with leading zero
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes with leading zero
    const timeString = `${hours}:${minutes}`;

    const clockElement = document.querySelector('.clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();


///////POPUP MENU////////
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const popupMenu = document.getElementById('popupMenu');

    startButton.addEventListener('click', togglePopupMenu);

    function togglePopupMenu() {
        if (popupMenu.style.display === 'block') {
            popupMenu.style.display = 'none';
        } else {
            popupMenu.style.display = 'block';
        }
    }
});
