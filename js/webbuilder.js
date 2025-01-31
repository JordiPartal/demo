let header;

const main = "#main";
let color = [];
let section = [];

init();

async function init() {
    await saveDataOnVariables();
    addItemWithId(main, new Item().setIdOrClass(header.id).setElement("h1").build());
    addTextIn("#titular", header.txt);
    addItemWithClass(main, new Item().setIdOrClass("section").setElement("div").build());
    addItemWithId(".section", new Item().setIdOrClass("color").setElement("div").build());
    addItems(".section", section);
    addItems("#color", color);
}

async function saveDataOnVariables() {
    let count = 0;
    await getJsonData()
        .then(json => {
            header = new Element().setIdOrClass(json.header.id).setText(json.header.txt).build();
            section = putDataIn(json.section);
            color = putDataIn(json.color);
        });
}

function getJsonData() {
    return fetch("./data/data.json")
        .then(response => response.json())
        .then(json => new Data().setHeader(json.header).setSection(json.section).setColor(json.color).build())
        .catch(error => {
            alert(error);
            return null;
        });
}

function putDataIn(item) {
    let count = 0;
    let collection = [];

    item.forEach(property => {
        collection[count] = new Element().setIdOrClass(property.id).setText(property.txt).build();
        count += 1;
    })

    return collection;
}

function addTextIn(id, text) {
    const item = getItem(id);
    item.innerText = text;
}

function addItems(parent, collection) {
    for (let count = 0; count < collection.length; count++) {
        addItemWithId(parent, collection[count]);
        addTextIn(collection[count].id, collection[count].txt);
    }
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