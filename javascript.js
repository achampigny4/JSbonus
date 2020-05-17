// When the grow button is clicked...
document.getElementById("button1").addEventListener("click", function () {
    // Increase the size of the box.
    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";
});

// When the blue button is clicked...
document.getElementById("button2").addEventListener("click", function () {
    // Change box color to blue.
    document.getElementById("box").style.backgroundColor = "blue";
});

// When the fade button is clicked...
document.getElementById("button3").addEventListener("click", function () {
    // Fade the color of the box.
    document.getElementById("box").style.opacity = "0.3";
});

// When the rest button is clicked...
document.getElementById("button4").addEventListener("click", function () {
    // Box returns to original size, color, opacity.
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.backgroundColor = "orange";
});

// When the shrink button is clicked...
document.getElementById("bonus1").addEventListener("click", function () {
    // Decrease the size of the box.
    document.getElementById("box").style.height = "20px";
    document.getElementById("box").style.width = "20px";
});
