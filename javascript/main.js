var neuste = document.getElementById("neuste");
var dark = document.getElementById("dark");
var space = document.getElementById("space");
var minimalism = document.getElementById("minimalism");
var micro = document.getElementById("micro");


// Bestimmte HTML Elementen beim Laden verstecken (index.html)
window.onload = function () {
    dark.style.display = 'none';
    space.style.display = 'none';
    minimalism.style.display = 'none';
    micro.style.display = 'none';
}

//HTML Elemente ein- und ausblenden (index.html)
function zeigeFilter(id) {
    if (id == neuste) {
        neuste.style.display = "flex";
        dark.style.display = 'none';
        space.style.display = 'none';
        minimalism.style.display = 'none';
        micro.style.display = 'none';
    }
    else if (id == dark) {
        neuste.style.display = 'none';
        dark.style.display = 'flex';
        space.style.display = "none";
        minimalism.style.display = 'none';
        micro.style.display = 'none';
    }
    else if (id == space) {
        neuste.style.display = 'none';
        dark.style.display = 'none';
        space.style.display = "flex";
        minimalism.style.display = 'none';
        micro.style.display = 'none';
    }
    else if (id == minimalism) {
        neuste.style.display = 'none';
        dark.style.display = 'none';
        space.style.display = "none";
        minimalism.style.display = 'flex';
        micro.style.display = 'none';
    }
    else {
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