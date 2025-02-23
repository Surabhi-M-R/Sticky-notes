var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click", function () {
    typeNote();
});

checkIcon.addEventListener("click", function () {
    createNote();
});

function typeNote() {
    if (container3.style.display === "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}

function createNote() {
    var noteText = document.getElementById("note-text").value;
    if (noteText.trim() === "") {
        alert("Note text cannot be empty!");
        return;
    }

    var note = document.createElement("div");
    note.style = `width: 250px; height: 250px; font-size: 26px; padding: 25px; margin: ${margin()}; 
                  overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75); background: ${color()}; 
                  transform: ${rotate()};`;
    note.textContent = noteText;

    note.addEventListener("mouseenter", function () {
        note.style.transform = "scale(1.1)";
    });

    note.addEventListener("mouseleave", function () {
        note.style.transform = "scale(1)";
    });

    note.addEventListener("dblclick", function () {
        note.remove();
    });

    container2.appendChild(note);
    document.getElementById("note-text").value = "";
    container3.style.display = "none";
}

function margin() {
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
    var random_rotate = [
        "rotate(3deg)",
        "rotate(1deg)",
        "rotate(-1deg)",
        "rotate(-3deg)",
        "rotate(-5deg)",
        "rotate(-10deg)"
    ];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
    var random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    if (i >= random_color.length) i = 0;
    return random_color[i++];
}
