
    function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("hlavicka");
    if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
}
    if (y.className === "hlavicka") {
    y.className += " hlavna";
} else {
    y.className = "hlavicka";
}
}
