// Bestimmte HTML Elementen beim Laden verstecken (index.html)
window.onload = function () {
    dark.style.display = 'none';
    space.style.display = 'none';
    minimalism.style.display = 'none';
    micro.style.display = 'none';
}

var neuste = document.getElementById("neuste");
var dark = document.getElementById("dark");
var space = document.getElementById("space");
var minimalism = document.getElementById("minimalism");
var micro = document.getElementById("micro");


//HTML Elemente ein- und ausblenden (index.html)
function zeigeFilter(id) {
    if (id == neuste) {
        neuste.style.display = "flex";
        dark.style.display = 'none';
        space.style.display = 'none';
        minimalism.style.display = 'none';
        micro.style.display = 'none';
    } else if (id == dark) {
        neuste.style.display = 'none';
        dark.style.display = 'flex';
        space.style.display = "none";
        minimalism.style.display = 'none';
        micro.style.display = 'none';
    } else if (id == space) {
        neuste.style.display = 'none';
        dark.style.display = 'none';
        space.style.display = "flex";
        minimalism.style.display = 'none';
        micro.style.display = 'none';
    } else if (id == minimalism) {
        neuste.style.display = 'none';
        dark.style.display = 'none';
        space.style.display = "none";
        minimalism.style.display = 'flex';
        micro.style.display = 'none';
    } else {
        neuste.style.display = 'none';
        dark.style.display = 'none';
        space.style.display = "none";
        minimalism.style.display = 'none';
        micro.style.display = 'flex';
    }
}

// Funktion um Elemente anzuzeigen (index.html)
function zeigeAlles() {
    neuste.style.display = "flex";
    dark.style.display = "flex";
    space.style.display = "flex"
    minimalism.style.display = "flex";
    micro.style.display = "flex";
}

// Alert Fenster für die Navigationsleiste
function alertWindow() {
    alert("Funktion wird bald implementiert!");
}

// JS für Modal
// Getter für Modal
var modal = document.getElementById("impressumModal");

// Getter für button um Modal einzubleden
var btn = document.getElementById("impressumBtnId");

// Getter für <span> Element bzw. X um Modal zu schließen
var span = document.getElementsByClassName("close")[0];

// Funktion um den Modal einzublenden
btn.onclick = function () {
    modal.style.display = "block";
}

// Funktion um den Modal, durch den X, zu schließen
span.onclick = function () {
    modal.style.display = "none";
}

// Funktion um den Modal, durch ein Click außerhalt von Modal, zu schließen
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}