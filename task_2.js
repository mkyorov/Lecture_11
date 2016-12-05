let $el = document.childNodes[1];

function elements(node) {
    if (node.nodeType === 1) {
        if (node.getAttribute("class") !== null && node.getAttribute("class") !== '') {
            console.log(`The element type is ${node.nodeName}, and the element class is ${node.getAttribute("class")}`);
        } else {
            console.log(`The element type is ${node.nodeName}`);
        }


        node = node.firstChild;

        while (node) {
            elements(node);
            node = node.nextSibling;
        }
    }
}
