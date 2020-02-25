var neuste = document.getElementById("neuste");
var dark = document.getElementById("dark");
var space = document.getElementById("space");
var minimalism = document.getElementById("minimalism");
var micro = document.getElementById("micro");


// Bestimmte HTML Elementen beim Laden verstecken
window.onload = function () {
    dark.style.display = 'none';
    space.style.display = 'none';
    minimalism.style.display = 'none';
    micro.style.display = 'none';
}

//HTML Elemente ein- und ausblenden
function zeigeFilter(id) {
    if (neuste.style.display === "none") {
        neuste.style.display = "flex";
    } else {
        neuste.style.display = "none";
    }
}

// Funktion um Elemente anzuzeigen
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