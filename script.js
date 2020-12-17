/*
több időt és energiát fordítani arra, hogy utánanézzek dolgoknak
szüneteket tartani egy nagy feladatnál 
apró dolgok
*/

//1. console.log-ot használni
//2. document és function -> const 4!
//3. 
function _load() {

    const root = document.getElementById("root");

    let notes = [];

    /*
    több időt és energiát fordítani arra, hogy utánanézzek dolgoknak
    szüneteket tartani egy nagy feladatnál 
    apró dolgok
    */

    notes.push({
        tag: "div",
        content: `
            több időt és energiát fordítani arra, hogy utánanézzek dolgoknak
            szüneteket tartani egy nagy feladatnál 
            apró dolgok`
    });

    notes.push({
        tag: "code",
        content: `
            1. console.log-ot használni
            2. document és function -> const 4!
        `
    });

    for (n of notes) {
        root.insertAdjacentHTML("beforeend", `<${n.tag}>${n.content}</${n.tag}>`)
    }
    //hétfőre kiiratni az összes kommentet - optional - highlight js
    /*
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/default.min.css">
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/highlight.min.js"></script>

        https://highlightjs.org/usage/

        document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        });

        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
        document.querySelectorAll('code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    */
}
window.addEventListener("load", _load);