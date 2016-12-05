let $div = document.createElement('div');
$div.setAttribute('class', 'main');
document.body.appendChild($div);

let $nav = document.createElement('nav');
$nav.setAttribute('class', 'main-nav');
$div.appendChild($nav);

let $ul = document.createElement('ul');
$nav.appendChild($ul);

let $frag = document.createDocumentFragment();
$frag.appendChild(document.createElement('li'));
$frag.childNodes[0].appendChild(document.createElement('a'));
$frag.childNodes[0].childNodes[0].appendChild(document.createTextNode('Link 1'));
$frag.childNodes[0].childNodes[0].setAttribute('href', ' ');

$frag.appendChild(document.createElement('li'));
$frag.childNodes[1].appendChild(document.createElement('a'));
$frag.childNodes[1].childNodes[0].appendChild(document.createTextNode('Link 2'));
$frag.childNodes[1].childNodes[0].setAttribute('href', ' ');

$frag.appendChild(document.createElement('li'));
$frag.childNodes[2].appendChild(document.createElement('a'));
$frag.childNodes[2].childNodes[0].appendChild(document.createTextNode('Link 3'));
$frag.childNodes[2].childNodes[0].setAttribute('href', ' ');

$frag.appendChild(document.createElement('li'));
$frag.childNodes[3].appendChild(document.createElement('a'));
$frag.childNodes[3].childNodes[0].appendChild(document.createTextNode('Link 4'));
$frag.childNodes[3].childNodes[0].setAttribute('href', ' ');

$frag.appendChild(document.createElement('li'));
$frag.childNodes[4].appendChild(document.createElement('a'));
$frag.childNodes[4].childNodes[0].appendChild(document.createTextNode('Link 5'));
$frag.childNodes[4].childNodes[0].setAttribute('href', ' ');

$ul.appendChild($frag);
