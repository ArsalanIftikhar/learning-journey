/*document.getElementById("changeColor").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
document.getElementById("resetColor").addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});*/

const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
let colorIndex = 0;

document.getElementById("changeColor").addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex++;

    if (colorIndex === colors.length) {
    setTimeout(() => {
        alert("You've cycled through all the colours! 🎉");
    }, 100); // small delay so you can see the last colour
    colorIndex = 0; // reset to start from beginning
    }
});

document.getElementById("resetColor").addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    colorIndex = 0; // also reset the cycle
});