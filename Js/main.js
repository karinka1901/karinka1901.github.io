
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
//////////////////////////////////////////////////////////////////
function closeWindow(wElement) {
    // Hide the game container
   wElement.style.display = 'none';
// document.getElementById('gameW').classList.add('hidden');

    // Reset the iframe src
    document.getElementById('gameFrame').src = "";
}


function openn(e){
    e.style.display = 'block';
    e.style.zIndex = '1000';
   
}

/////////////////////////////////////////////////////////////
function startGame() {
    // Show the game container
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('popupMenu').style.display = 'none';;

    // Set the iframe src to the game URL
    document.getElementById('gameFrame').src = "https://karinka1901.github.io/Game/index.html";
}



///////////////////////////////////////////////////////////////////////////////

let isDragging = false;
let activeElement = null;
let offsetX = 0;
let offsetY = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
});

function handleMouseDown(e) {
    const target = e.target;
    const draggableElement = findDraggableElement(target);
    if (draggableElement) {
        bringToFront(draggableElement);
        isDragging = true;
        activeElement = draggableElement;
        offsetX = e.clientX - activeElement.getBoundingClientRect().left;
        offsetY = e.clientY - activeElement.getBoundingClientRect().top;
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

function findDraggableElement(element) {
    // Traverse up the DOM tree to find an element with the 'draggable' class
    while (element) {
        if (element.classList.contains('draggable')) {
            return element;
        }
        element = element.parentElement;
    }
    return null;
}

function bringToFront(element) {
    // Get the highest z-index among all draggable elements and set the clicked element's z-index
    const draggableElements = document.querySelectorAll('.draggable');
    let maxZIndex = 0;

    draggableElements.forEach(el => {
        const zIndex = parseFloat(window.getComputedStyle(el).zIndex);
        if (!isNaN(zIndex) && zIndex > maxZIndex) {
            maxZIndex = zIndex;
        }
    });

    // Set the z-index of the clicked element to be one unit higher than the highest z-index
    element.style.zIndex = maxZIndex + 1;
}


/////////////////////////////////////////////////////////////////////////////////////////


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
        case "Itch.io":
            websiteUrl = "https://karinka1901.itch.io/"; // URL for other button
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

///////////////////////////////////////////////////////////////////////////////////
function minGameWindow(windowElement, tabElement) {
    windowElement.style.display = 'none';
    tabElement.style.display = 'block';
}

function reopenWindow(windowElement, tabElement){
    windowElement.style.display = 'block';
    tabElement.style.display = 'none';
}