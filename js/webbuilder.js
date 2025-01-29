let header;
let section = [];
const main = "#main";

init();

async function init() {
    await saveData();
    addItemWithId(main, new Item().setIdOrClass(header.id).setElement("h1").build());
    addTextIn("#titular", header.txt);
    addItemWithClass(main, new Item().setIdOrClass("section").setElement("div").build());
}

async function saveData() {
    let count = 0;
    await getJsonData()
        .then(json => {
            header = new Element().setIdOrClass(json.header.id).setText(json.header.txt);
            json.section.forEach(item => {
                section[count] = new Element().setIdOrClass(item.id).setText(item.txt);
                count += 1;
            })
        });
}

function getJsonData() {
    return fetch("./data/data.json")
        .then(response => response.json())
        .then(json => new Data().setHeader(json.header).setSection(json.section).build())
        .catch(error => {
            alert(error);
            return null;
        });
}

function addTextIn(id, text) {
    const item = getItem(id);
    item.innerText = text;
}

function addItems(parent, element, count) {
    if (count > 1) {
        for (let i = 0; i < count; i++) {
            addItem(parent, element);
        }
    } else {
        addItem(parent, element);
    }
}

function addItem(parent, element) {
    const main = getItem(parent);
    const item = document.createElement(element.html_element);
    main.appendChild(item);
}

function addItemWithId(parent, element) {
    const main = getItem(parent);
    const item = document.createElement(element.html_element);
    item.setAttribute('id', element.item_id);
    main.appendChild(item);
}

function addItemWithClass(parent, element) {
    const main = getItem(parent);
    const item = document.createElement(element.html_element);
    item.setAttribute('class', element.item_id)
    main.appendChild(item);
}

function getItem(selector) {
    return document.querySelector(selector);
}