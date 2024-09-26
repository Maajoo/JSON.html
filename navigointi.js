// navigation.js
function loadNavigation() {
    document.getElementById('nav').innerHTML = `
    <nav>
        <a href="kurssi.html">Kurssi</a>
        <a href="toteutus.html">Toteutus</a>
        <a href="tapahtumat.html">Tapahtumat</a>
        <a href="saa.html">Saa</a>
    </nav>
    `;
}
window.onload = loadNavigation;
