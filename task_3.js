let $parent = document.childNodes[1];

function findLinks(node) {
    if (node.nodeType === 1) {
        if (node.nodeName === 'A' && node.textContent === 'google') {
            console.log(`<${node.nodeName}>${node.textContent}`);
        }
        node = node.firstChild;

        while(node) {
            findLinks(node);
            node = node.nextSibling;
        }
    }
}
