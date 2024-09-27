// navigaatiota varten tehty Javascript
function loadNavigation() {
    document.getElementById('nav').innerHTML = `
    <nav>
        <a href="kurssi.html">Kurssi</a>
        <a href="toteutus.html">Toteutus</a>
        <a href="tapahtumat.html">Tapahtumat</a>
        <a href="saa.html">Sää</a>
        <a href="liikennekamera.html">Liikennekamera</a>
        <a href="junat.html">Junat</a>
    </nav>
    `;
}
window.onload = loadNavigation;
