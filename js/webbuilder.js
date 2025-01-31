let header;

const main = "#main";
let color = [];
let section = [];

init();

async function init() {
    try {
        await saveDataOnVariables();
        addItemWithId(main, new Item().setIdOrClass(header.id).setElement("h1").build());
        addTextIn("#titular", header.txt);
        addItemWithClass(main, new Item().setIdOrClass("section").setElement("div").build());
        addItemWithId(".section", new Item().setIdOrClass("color").setElement("div").build());
        addItems(".section", section);
        addItems("#color", color);
    } catch (error) {
        console.log(error.message);
    }
}

async function saveDataOnVariables() {
    await getJsonData()
        .then(json => {
            header = new Element().setIdOrClass(json.header.id).setText(json.header.txt).build();
            section = putDataIn(json.section);
            color = putDataIn(json.color);
        }).catch(error => {
            console.log(error.message);
        })
}

function getJsonData() {
    return fetch("./data/data.json")
        .then(response => response.json())
        .then(json => new Data().setHeader(json.header).setSection(json.section).setColor(json.color).build())
        .catch(error => {
            console.log(error.message);
        });
}

function putDataIn(item) {
    let count = 0;
    let collection = [];

    try {
        item.forEach(property => {
            collection[count] = new Element().setIdOrClass(property.id).setText(property.txt).build();
            count += 1;
        });
        return collection;
    } catch(error) {
        console.log(error.message);
        return null;
    }
}

function addTextIn(id, text) {
    try {
        const item = getItem(id);
        item.innerText = text;
    } catch (error) {
        console.log(error.message);
    }
}

function addItems(parent, collection) {
    try {
        for (let count = 0; count < collection.length; count++) {
            let element;
            if(collection[count].txt !== null) {
                element = new Item()
                    .setIdOrClass(collection[count].id)
                    .setElement("div")
                    .setItemTxt(collection[count].txt).build();
                addItemWithId(parent, element);
                addTextIn(parent, element);
                console.log(element)
            } else {
                element = new Item()
                    .setIdOrClass(collection[count].id)
                    .setElement("div").build();
                addItemWithId(parent, element);
                console.log(element)
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

function addItemWithId(parent, element) {
    try {
        const main = getItem(parent);
        const item = document.createElement(element.html_element);
        item.setAttribute('id', element.item_id);
        main.appendChild(item);
    } catch (error) {
        console.log(error.message);
    }
}

function addItemWithClass(parent, element) {
    try {
        const main = getItem(parent);
        const item = document.createElement(element.html_element);
        item.setAttribute('class', element.item_id)
        main.appendChild(item);
    } catch (error) {
        console.log(error.message);
    }
}

function getItem(selector) {
    return document.querySelector(selector);
}