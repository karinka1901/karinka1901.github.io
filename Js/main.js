let isDragging = false;
let offsetX, offsetY;
let activeElement = null;

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

function closeWindow() {
    // Hide the game container
    document.getElementById('gameContainer').style.display = 'none';
// document.getElementById('gameW').classList.add('hidden');

    // Reset the iframe src
    document.getElementById('gameFrame').src = "";
}

function closeGameWindow(){
    document.getElementById('Folder').style.display = 'none';
}

function openGameFolder(){
    document.getElementById('Folder').style.display = 'block';
}

function startGame() {
    // Show the game container
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('popupMenu').style.display = 'none';;

    // Set the iframe src to the game URL
    document.getElementById('gameFrame').src = "https://karinka1901.github.io/Game/index.html";
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
});

function handleMouseDown(e) {
    const target = e.target;
    if (target.classList.contains('draggable')) {
        isDragging = true;
        activeElement = target;
        offsetX = e.clientX - activeElement.offsetLeft;
        offsetY = e.clientY - activeElement.offsetTop;
    }
}

function handleMouseMove(e) {
    if (isDragging && activeElement) {
        activeElement.style.left = (e.clientX - offsetX) + 'px';
        activeElement.style.top = (e.clientY - offsetY) + 'px';
    }
}

function handleMouseUp() {
    isDragging = false;
    activeElement = null;
}


function openVideo(){
    document.getElementById('videoBox').style.display = 'block';
}

// function openWeb(){
//     const websiteUrl = "https://github.com/karinka1901"; 
//     const width = 800;
//     const height = 600;
//     const left = (window.innerWidth - width) / 2;
//     const top = (window.innerHeight - height) / 2;
//     const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

//     // Open the popup window with the specified URL and parameters
//     if(getElementById('video-button'))
//     const popupWindow = window.open(websiteUrl, "_blank", features);

//     // Focus the popup window (bring it to the front if already open)
//     if (popupWindow) {
//         popupWindow.focus();
//     } else {
//         alert("Popup blocked! Please allow popups for this website.");
//     }

//}

function openWeb(websiteId) {
    let websiteUrl;

    // Determine the URL based on the websiteId
    switch (websiteId) {
        case "GitHub":
            websiteUrl = "https://github.com/karinka1901"; // URL for game button
            break;
        case "Youtube":
            websiteUrl = "https://youtu.be/RFExoLWc8Ec?si=Ir5IQ6ccOlIvdUJP"; // URL for other button
            break;
        
    }

    // Specify the dimensions and other parameters for the popup window
    const width = 800;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

    // Open the popup window with the specified URL and parameters
    const popupWindow = window.open(websiteUrl, "_blank", features);

    // Focus the popup window (bring it to the front if already open)
    if (popupWindow) {
        popupWindow.focus();
    } else {
        alert("Popup blocked! Please allow popups for this website.");
    }
}
