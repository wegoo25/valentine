const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const img = document.getElementById("valentineImg");

// No Images
let imgIndex = 1;

// No messages
const noMessages = ["Nope!", "Nah!"];
let messageIndex = 0;

// Yes button size
let yesWidth = yesBtn.offsetWidth;
let yesHeight = yesBtn.offsetHeight;

let yesDetached = false;
let yesScale = 1;

// No button click
noBtn.addEventListener("click", function() {

    // STEP 1: Navigate through "No pages"
    if (imgIndex < 5) {
        img.src = "pictures/bubu-no" + imgIndex + ".gif";
        imgIndex++;
        return; // stop here, wait for next click
    }

    // STEP 2: Iterate through "No messages"
    if (messageIndex < noMessages.length) {
        noBtn.textContent = noMessages[messageIndex];
        messageIndex++;
        return;
    } else {
        noBtn.textContent = "NO!";
    }

    // STEP 3: Grow Yes button
    if (!yesDetached) {
        const rect = yesBtn.getBoundingClientRect();
        const parentRect = yesBtn.parentElement.getBoundingClientRect();
        yesDetached = true;
    }

    // Scale smoothly
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;

});

// Yes button click
yesBtn.addEventListener("click", function() {
    window.location.href = "yes.html";
});
