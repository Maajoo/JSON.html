// navigation.js
function loadNavigation() {
    document.getElementById('nav').innerHTML = `
    <nav>
        <a href="kurssi.html">Kurssi</a>
        <a href="toteutus.html">Toteutus</a>
    </nav>
    `;
}
window.onload = loadNavigation;
