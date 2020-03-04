var neuste = document.getElementById("neuste");
var dark = document.getElementById("dark");
var space = document.getElementById("space");
var minimalism = document.getElementById("minimalism");
var macro = document.getElementById("macro");

// Bestimmte HTML Elementen verstecken (index.html)
function versteckeElemente() {
    dark.style.display = "none";
    space.style.display = "none";
    minimalism.style.display = "none";
    macro.style.display = "none";
}

//HTML Elemente ein- und ausblenden (index.html)
function zeigeFilter(id) {
    if (id == neuste) {
        neuste.style.display = "flex";
        dark.style.display = "none";
        space.style.display = "none";
        minimalism.style.display = "none";
        macro.style.display = "none";
    } else if (id == dark) {
        neuste.style.display = "none";
        dark.style.display = "flex";
        space.style.display = "none";
        minimalism.style.display = "none";
        macro.style.display = "none";
    } else if (id == space) {
        neuste.style.display = "none";
        dark.style.display = "none";
        space.style.display = "flex";
        minimalism.style.display = "none";
        macro.style.display = "none";
    } else if (id == minimalism) {
        neuste.style.display = "none";
        dark.style.display = "none";
        space.style.display = "none";
        minimalism.style.display = "flex";
        macro.style.display = "none";
    } else {
        neuste.style.display = "none";
        dark.style.display = "none";
        space.style.display = "none";
        minimalism.style.display = "none";
        macro.style.display = "flex";
    }
}

// Funktion um Elemente anzuzeigen (index.html)
function zeigeAlles() {
    neuste.style.display = "flex";
    dark.style.display = "flex";
    space.style.display = "flex"
    minimalism.style.display = "flex";
    macro.style.display = "flex";
}

// Alert Fenster für die Navigationsleiste
function alertWindow() {
    alert("Funktion wird bald implementiert!");
}

// JS für Modal
// Getter für Modal
var modal = document.getElementById("impressumModal");

// Getter für Button um Modal einzubleden
var btn = document.getElementById("impressumBtnId");

// Getter für X-Button um Modal zu schließen
var xBtn = document.getElementById("xBtn");

// Funktion um den Modal einzublenden
btn.onclick = function () {
    modal.style.display = "block";
}

// Funktion um den Modal, durch den X, zu schließen
xBtn.onclick = function () {
    modal.style.display = "none";
}

// Funktion um den Modal, durch ein Click außerhalb von Modal, zu schließen
window.onclick = function (event) {
    if (event.target == modal) { // <-???
        modal.style.display = "none";
    }
}

// Funktion mit Text für den Modal
var impTitel = document.getElementById("impressumTitel");
var impTxt = document.getElementById("impressumText");

function schreibeImpText() {

    impTitel.innerHTML = "Impressum";
    impTxt.innerHTML = "Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. \
    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. \
    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. \
    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte \
    fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. \
    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. \
    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. \
    Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.<br> <br> Unsere Webseite enthält \
    Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. \
    Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen \
    Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich. Die externen Links wurden zum Zeitpunkt der \
    Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. \
    Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. \
    Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine \
    Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch \
    möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Diese Haftungsausschlusserklärung gilt auch \
    innerhalb des eigenen Internetauftrittes „Name Ihrer Domain“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern, \
    Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der \
    Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche \
    verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist. \
    Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.";
}

// AJAX mit einer .txt Datei (about.html)
// Auf Event horchen mit Fehlerbehandlung
try {
    document.getElementById("zeigeMehrUeberUns").addEventListener("click", ladeText);
} catch (err) {
    console.log("'Mehr Zeigen' Button(about.html) ist nicht definiert.");
    //console.log(err)
}

function ladeText() {
    // Erstellt neuen XHR Object
    var httpReq = new XMLHttpRequest();

    httpReq.open("GET", "texte_etc/ueberTxt.txt", true);

    httpReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ueberUnsText").innerHTML = this.responseText;
        } else {
            document.getElementById("ueberUnsText").innerHTML = "Text Datei nicht gefunden!";
        }
    }
    // Sendet die Anfrage
    httpReq.send();
}

try {
    document.getElementById("zeigeMitglieder").addEventListener("click", ladeMitglieder);
} catch (err) {
    console.log("'Die Mitgliederliste einblenden' Button(about.html) ist nicht definiert.");
    //console.log(err)
}

function ladeMitglieder() {
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "texte_etc/mitglieder.json", true);


    httpReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var mitglieder = JSON.parse(this.responseText);

            var ausgabe = '';

            for (var i in mitglieder) {
                ausgabe +=
                    '<div class="user">' +
                    '<img src="' + mitglieder[i].avatar_pfad + '" width="70" height="70">' +
                    '<ul>' +
                    '<li><b>Name: </b>' + mitglieder[i].name + '</li>' +
                    '<li><b>Email: </b>' + mitglieder[i].email + '</li>' +
                    '</ul>' +
                    '</div>';
            }

            document.getElementById("mitgliederListe").innerHTML = ausgabe;
        } else {
            document.getElementById("mitgliederListe").innerHTML = ".json-Datei nicht gefunden!";
        }
    }

    httpReq.send();
}

// contact.html Eingabe wird im Alert wiedergegeben ????
function formularAusgabe() {

    for (var i = 0; i < document.forms[0].elements.length - 1; i++) {
        if (i == 0) {
            alert("Name: " + document.forms[0].elements[i].value);
        } else if (i == 1) {
            alert("Email: " + document.forms[0].elements[i].value);
        } else if (i == 2) {
            alert("Nachricht: " + document.forms[0].elements[i].value);
        }
    }
}


// Beim Laden der Seiten werden Funktionen, um Elemente zu verstecken bzw Text hinzufügen, ausgeführt
window.onload = schreibeImpText();
window.onload = versteckeElemente();