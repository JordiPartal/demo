const item = new Item();
const main = '#main'
const section = '.section';

addItemWithId( main, item.setId('titular').setElement('h1').build() );
addTextIn( 'titular', 'Esto es un título principal' );
addItemWithClass( main, item.setId('section').setElement('div').build() );
addItems( section, item.setElement('div').build() , 4 );

function addTextIn(id, text) {
    const item = document.getElementById(id);
    item.innerText = text;
}

function addItems(parent, element, count) {
    if(count > 1) {
        for (let i = 0; i < count ; i++) {
            addItem(parent, element);
        }
    } else {
        addItem(parent, element);
    }
}

function addItem(parent, element) {
    const main = getItem(parent);
    const item = document.createElement(element.elemento);
    main.appendChild(item);
}

function addItemWithId(parent, element) {
    const main = getItem(parent);
    const item = document.createElement(element.elemento)
    item.setAttribute('id', element.identificador);
    main.appendChild(item);
}

function addItemWithClass(parent, element) {
    const main = getItem(parent);
    const item = document.createElement(element.elemento);
    item.setAttribute('class', element.identificador)
    main.appendChild(item);
}

function getItem(selector) {
    return document.querySelector(selector);
}