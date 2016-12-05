let $nav = document.createElement('nav');
$nav.setAttribute('itemtype', 'http://shema.org');
$nav.setAttribute('itemscope', 'itemscope');
$nav.setAttribute('id', 'site-navigation');
$nav.setAttribute('role', 'navigation');
$nav.setAttribute('class', 'main-navigation');
document.body.appendChild($nav);

let $div = document.createElement('div');
$div.setAttribute('class', 'inside-navigation grid-container grid-parent');
$nav.appendChild($div);

let $h3 = document.createElement('h3');
$h3.setAttribute('class', 'menu-toggle');
$div.appendChild($h3);

let $span = document.createElement('span');
$span.setAttribute('class', 'mobile-menu');
$h3.appendChild($span);

let $text = document.createTextNode('Меню');
$span.appendChild($text);

let $div_2 = document.createElement('div');
$div_2.setAttribute('class', 'screen-reader-text skip-link');
$div.appendChild($div_2);

let $a = document.createElement('a');
$a.setAttribute('href', '#content');
$a.setAttribute('title', 'Skip to content');
$div_2.appendChild($a);

let $text_a = document.createTextNode('Skip to content');
$a.appendChild($text_a);

let $div_3 = document.createElement('div');
$div_3.setAttribute('class', 'main-nav');
$div.appendChild($div_3);

let $ul = document.createElement('ul');
$ul.setAttribute('id', 'menu');
$ul.setAttribute('class', 'menu sf-menu sf-js-enable');
$div_3.appendChild($ul);

let $frag = document.createDocumentFragment();
$frag.appendChild(document.createElement('li'));
$frag.childNodes[0].setAttribute('id', 'menu-item-25');
$frag.childNodes[0].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[0].appendChild(document.createElement('a'));
$frag.childNodes[0].childNodes[0].setAttribute('href', 'www.swift.bg');
$frag.childNodes[0].childNodes[0].appendChild(document.createTextNode('Начало'));

$frag.appendChild(document.createElement('li'));
$frag.childNodes[1].setAttribute('id', 'menu-item-29');
$frag.childNodes[1].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[1].appendChild(document.createElement('a'));
$frag.childNodes[1].childNodes[0].setAttribute('href', 'www.swift.bg/courses');
$frag.childNodes[1].childNodes[0].appendChild(document.createTextNode('Курсове'));

$frag.appendChild(document.createElement('li'));
$frag.childNodes[2].setAttribute('id', 'menu-item-26');
$frag.childNodes[2].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[2].appendChild(document.createElement('a'));
$frag.childNodes[2].childNodes[0].setAttribute('href', 'www.swift.bg/registration');
$frag.childNodes[2].childNodes[0].appendChild(document.createTextNode('Записване'));

$frag.appendChild(document.createElement('li'));
$frag.childNodes[3].setAttribute('id', 'menu-item-487');
$frag.childNodes[3].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[3].appendChild(document.createElement('a'));
$frag.childNodes[3].childNodes[0].setAttribute('href', 'www.swift.bg/schedule');
$frag.childNodes[3].childNodes[0].appendChild(document.createTextNode('График'));

$frag.appendChild(document.createElement('li'));
$frag.childNodes[4].setAttribute('id', 'menu-item-27');
$frag.childNodes[4].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[4].appendChild(document.createElement('a'));
$frag.childNodes[4].childNodes[0].setAttribute('href', 'www.swift.bg/who-we-are');
$frag.childNodes[4].childNodes[0].appendChild(document.createTextNode('Кои сме ние'));

$frag.appendChild(document.createElement('li'));
$frag.childNodes[5].setAttribute('id', 'menu-item-32');
$frag.childNodes[5].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[5].appendChild(document.createElement('a'));
$frag.childNodes[5].childNodes[0].setAttribute('href', 'www.swift.bg/lectors');
$frag.childNodes[5].childNodes[0].appendChild(document.createTextNode('Преподаватели'));

$frag.appendChild(document.createElement('li'));
$frag.childNodes[6].setAttribute('id', 'menu-item-31');
$frag.childNodes[6].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[6].appendChild(document.createElement('a'));
$frag.childNodes[6].childNodes[0].setAttribute('href', 'www.swift.bg/partners');
$frag.childNodes[6].childNodes[0].appendChild(document.createTextNode('Партньори'));

$frag.appendChild(document.createElement('li'));
$frag.childNodes[7].setAttribute('id', 'menu-item-2020');
$frag.childNodes[7].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[7].appendChild(document.createElement('a'));
$frag.childNodes[7].childNodes[0].setAttribute('href', 'www.swift.bg/students');
$frag.childNodes[7].childNodes[0].appendChild(document.createTextNode('Успели курсисти'));

$frag.appendChild(document.createElement('li'));
$frag.childNodes[8].setAttribute('id', 'menu-item-28');
$frag.childNodes[8].setAttribute('class', 'menu-item menu-item-type-post');
$frag.childNodes[8].appendChild(document.createElement('a'));
$frag.childNodes[8].childNodes[0].setAttribute('href', 'www.swift.bg/contacts');
$frag.childNodes[8].childNodes[0].appendChild(document.createTextNode('Контакти'));

$ul.appendChild($frag);
