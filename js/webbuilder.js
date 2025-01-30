let header;
let section = [];
const main = "#main";

init();

async function init() {
    await saveDataOnVariables();
    addItemWithId(main, new Item().setIdOrClass(header.id).setElement("h1").build());
    addTextIn("#titular", header.txt);
    addItemWithClass(main, new Item().setIdOrClass("section").setElement("div").build());
    addItems(".section", "div");
}

async function saveDataOnVariables() {
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

function addItems(parent, htmlElement) {
    const main = getItem(parent);
    let count = 0;
    section.forEach(item => {
        let element = document.createElement(htmlElement);
        element.setAttribute("id", item.id);
        element.innerText = item.txt;
        main.appendChild(element);
    })
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