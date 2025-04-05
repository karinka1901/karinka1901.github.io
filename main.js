document.addEventListener("DOMContentLoaded", function () {
    const cat = document.querySelector(".desktop-cat");
    const bubble = document.querySelector(".cat-bubble");
    const bubbleText = document.querySelector(".cat-bubble-text");
    const meowSound = document.getElementById("meow-sound");
  
    // Show the bubble on click (toggle version)
    cat.addEventListener("click", talkToCat); 
    function talkToCat() {
      if (bubble.style.display === "block") {
        return
      } 
      else {
        bubble.style.display = "block";
        bubbleText.style.display = "block";
        meowSound.currentTime = 0; // rewind in case it's still playing
        meowSound.play();
        setTimeout(() => {
            bubble.style.display = "none";
            bubbleText.style.display = "none";
          }, 1500);}
    };
    });

    function openWebsite(websiteId) {
      let websiteUrl;
  
      // Determine the URL based on the websiteId
      switch (websiteId) {
          case "GitHub":
              websiteUrl = "https://github.com/karinka1901"; // URL for game button
              break;
          case "Youtube":
              websiteUrl = "https://youtu.be/RFExoLWc8Ec?si=Ir5IQ6ccOlIvdUJP"; // URL for other button
              break;
          case "Itchio":
              websiteUrl = "https://karinka1901.itch.io/"; // URL for other button
              break;
          case "DankSole":
              websiteUrl = "https://karinka1901.itch.io/dank-sole"; // URL for other button
              break;
          case "VR":
              websiteUrl = "https://karinka1901.itch.io/haunted-forest-vr"; // URL for other button
              break;
          case "Linkedin":
              websiteUrl = "https://www.linkedin.com/in/karin-domagalska-a137532aa/"; // URL for other button
              break;
          case 'TicTacToe':
              websiteUrl = "https://github.com/karinka1901/TicTacToe"; // URL for other button
              break;
          case 'SpongE':
            websiteUrl = "https://github.com/karinka1901/SpongE"; // URL for other button
            break;
          case 'SusPlane':
          websiteUrl = "https://github.com/karinka1901/sus-plane-ability"; // URL for other button
          break;
          case'StressBGone':  
          websiteUrl = "https://github.com/karinka1901/Stress-B-Gone"; // URL for other button
          break;
      }
    if (websiteUrl) {
      window.open(websiteUrl, '_blank'); // Opens in a new tab

      }
    }


  
//DRAGGABLE OBJECTS//////////////////////////////////////////
function makeDraggable(dragTarget, dragHandle) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  dragHandle.addEventListener("mousedown", function (e) {
    e.preventDefault(); // Prevent text selection
    isDragging = true;
    offsetX = e.clientX - dragTarget.offsetLeft;
    offsetY = e.clientY - dragTarget.offsetTop;
    dragTarget.style.zIndex = getHighestZIndex() + 1;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      dragTarget.style.left = `${e.clientX - offsetX}px`;
      dragTarget.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    document.body.style.userSelect = "auto";
  });
}

function getHighestZIndex() {
  const elements = document.querySelectorAll('.draggable');
  let maxZ = 0;
  elements.forEach(el => {
    const z = parseInt(window.getComputedStyle(el).zIndex);
    if (!isNaN(z) && z > maxZ) {
      maxZ = z;
    }
  });
  return maxZ;
}

document.addEventListener("DOMContentLoaded", function () {
  const draggableElements = document.querySelectorAll(".draggable");

  draggableElements.forEach(el => {
    const header = el.querySelector(".window-header");

    // Use the header if it exists, otherwise make the whole element draggable
    const dragHandle = header || el;

    // Set position if not already set
    const style = window.getComputedStyle(el);
    if (style.position !== "absolute" && style.position !== "fixed") {
      el.style.position = "absolute";
    }

    makeDraggable(el, dragHandle);
  });
});

////////////////////////////////////////////////
let gameOpen = false;

function openWindow(window=null, content = null) {
  const win = document.getElementById(window);
  const con = document.getElementById(content);
  if(!gameOpen) {
    if (con) {
    con.style.display = 'flex';
  }
  if (win) {
    win.style.display = 'block';
    win.style.zIndex = getHighestZIndex() + 1;
  }}
  
}
function closeWindow(id) {
  const win = document.getElementById(id);
  if (win) {
    win.style.display = 'none';
    win.style.zIndex = getHighestZIndex() + 1;
  }
}


function openGameContentWindow(contentId, cardId, v=null) {
  closeWindow(contentId);
  openWindow(cardId);
  document.getElementById('return-button').style.display = 'block';
  
  if (v) {
    const iframe = document.getElementById(v);
    
    switch (v) {
        case "danksole-video-frame":
            iframe.src = "https://www.youtube.com/embed/Z82WRHcB6hw?si=qie1p6fjbOwRgBdh";
            break;
        case "daggermeister-video-frame":
            iframe.src = "https://www.youtube.com/embed/RFExoLWc8Ec?si=kveNybWj7Yepd-D9"; 
        break;
        case "haunted-video-frame":
            iframe.src = "https://www.youtube.com/embed/uFQuhGEWLjU?si=FCiQIguLBxEpaN6T"; 
        break;
    }
  }
  gameOpen = true;
}


function playGame() {
  // Show the game container
  document.getElementById('daggermeister-game').style.display = 'flex';
  document.getElementById('daggermeister-video').style.display = 'none';

  // Set the iframe src to the game URL
  document.getElementById('daggermeister-game-frame').src = "https://karinka1901.github.io/Game/index.html";
}



function closeGameWindow(id) {
  const win = document.getElementById(id);
  if (win) {
    win.style.display = 'none';
    win.style.zIndex = getHighestZIndex() + 1;
  }
}

function closeGameWindow(selector = null, id = null) {
  const windows = selector ? document.querySelectorAll(selector) : [];
  const el = id ? document.getElementById(id) : null;
  document.getElementById('return-button').style.display = 'none';


  if (el) {
    el.style.display = 'none';
    el.style.zIndex = getHighestZIndex() + 1;
  }

  windows.forEach(win => {
    win.style.display = 'none';
  });

  // Stop all iframe videos and games
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.src = ""; // Clear the src to stop the video or game
  });
  gameOpen = false;
}


function returnButton(selector = null, id = null, content = null) {  
  closeGameWindow(selector, id);
  openWindow(id, content);
  gameOpen = false;
  document.getElementById('return-button-project').style.display = 'none';
}

function projectReturnButton() {
  openWindow('project-window-content');
  openWindow('project-folder-window');
 
  // Hide only open builds/content
  closeWindow('hyena-build');
  closeWindow('barrel-build');
  closeWindow('vr-build');
  closeWindow('ttc-video');
  closeWindow('sponge-video');
  closeWindow('sus-video');

  // Clear iframe srcs
  closeThreejsWindow('hyena-build');
  closeThreejsWindow('barrel-build');
  closeThreejsWindow('vr-build');
  closeThreejsWindow('ttc-video');
  closeThreejsWindow('sponge-video');
  closeThreejsWindow('sus-video');


  // Hide return button
  document.getElementById('return-button-project').style.display = 'none';
}

function openPDF(pdfUrl) {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



function openProjectContentWindow(cardId=null) {
  const card = document.getElementById(cardId);
  
  if(card!=null) {
    card.style.display = 'flex';
  }
 
  
}

function openProjectFolder(id) {
  closeWindow('project-window-content');
  openProjectContentWindow(id);
  document.getElementById('return-button-project').style.display = 'block';
}

function closeProjectWindow()  {
  closeWindow('project-window-content');
  closeWindow('project-folder-window');
  closeWindow('threejs-window');
  closeWindow('hyena-build');
  closeWindow('vr-build');
  closeWindow('ttc-video');
  closeWindow('sponge-video');
  closeWindow('sus-video');
  closeThreejsWindow('hyena-build');
  closeThreejsWindow('barrel-build');
  closeThreejsWindow('vr-build');
  closeThreejsWindow('ttc-video');
  closeThreejsWindow('sponge-video');
  closeThreejsWindow('sus-video');
  document.getElementById('return-button-project').style.display = 'none';

}

function openThreejsWindow(id) {
  openWindow(id);
  if (id === 'hyena-build') {
    const iframe = document.getElementById('hyena-build-frame');
    iframe.src = "";
    setTimeout(() => {
      iframe.src = "https://karinka1901.github.io/Three.js/hyena/build/";
    }, 50);
  
  }
  if (id === 'barrel-build') {
    const iframe = document.getElementById('barrel-build-frame');
    iframe.src = "";
    setTimeout(() => {
      iframe.src = "https://karinka1901.github.io/Three.js/barrel/build/";
    }, 50);
  }
  if (id === 'vr-build') {
    const iframe = document.getElementById('vr-build-frame');
    iframe.src = "https://karinka1901.github.io/Three.js/vr/build/";
  
  }
  if (id === 'ttc-video') {
    const iframe = document.getElementById('ttc-video-frame');
    iframe.src = "https://www.youtube.com/embed/NFWZ0o9xLNk?si=ntkiw7An3vDC0zEL";
  }
  if (id === 'sponge-video') {
    const iframe = document.getElementById('sponge-video-frame');
    iframe.src = "https://www.youtube.com/embed/f1ycquokbRY?si=0VGvKUb39GizDM8-";
  }
  if (id === 'sus-video') {
    const iframe = document.getElementById('sus-video-frame');
    iframe.src = "https://www.youtube.com/embed/6i4P9oitnwk?si=WNm_tdh2X2R70vbr";
  }

  document.getElementById('return-button-project').style.display = 'block';
}


function closeThreejsWindow(id) {
  openWindow(id);
  if (id === 'hyena-build') {
    const iframe = document.getElementById('hyena-build-frame');
    iframe.src = "";

  }
  if (id === 'barrel-build') {
    const iframe = document.getElementById('barrel-build-frame');
    iframe.src = "";
  }
  if (id === 'vr-build') {
    const iframe = document.getElementById('vr-build-frame');
    iframe.src = "";
  }

  if (id === 'ttc-video') {
    const iframe = document.getElementById('ttc-video-frame');
    iframe.src = "";
  }
  if (id === 'sponge-video') {
    const iframe = document.getElementById('sponge-video-frame');
    iframe.src = "";
  }
  if (id === 'sus-video') {
    const iframe = document.getElementById('sus-video-frame');
    iframe.src = "";
  }
  document.getElementById('return-button-project').style.display = 'none';
}

function openGameContentWindow(contentId, cardId, v=null) {
  closeWindow(contentId);
  openWindow(cardId);
  document.getElementById('return-button').style.display = 'block';
  
  if (v) {
    const iframe = document.getElementById(v);
    
    switch (v) {
        case "danksole-video-frame":
            iframe.src = "https://www.youtube.com/embed/Z82WRHcB6hw?si=qie1p6fjbOwRgBdh";
            break;
        case "daggermeister-video-frame":
            iframe.src = "https://www.youtube.com/embed/RFExoLWc8Ec?si=kveNybWj7Yepd-D9"; 
        break;
        case "haunted-video-frame":
            iframe.src = "https://www.youtube.com/embed/uFQuhGEWLjU?si=FCiQIguLBxEpaN6T"; 
        break;
        case "hyena-build-frame":
            iframe.src = "https://karinka1901.github.io/Three.js/hyena/build/";
            break;
        case "barrel-build-frame":
            iframe.src = "https://karinka1901.github.io/Three.js/barrel/build/";
            break;
    }
  }
  gameOpen = true;
}

function updateTime() {
  const timeEl = document.getElementById('taskbar-time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  timeEl.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call