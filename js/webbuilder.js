let data, bkgColor;

let main = "main";
let section = "section";
let color = "color";

init();

async function init() {
    try {
        await getJsonData();
        addItemWithId(isId(main), data.header);
        addTextIn(isId(data.header.idOrClass), data.header.txt);
        addDivItemWithId(isId(main), section);
        addItems(isId(section), data.section);
        addDivItemWithId(isId(section), color);
        addItems(isId(color), data.color);
    } catch (error) {
        console.log(error.message);
    }
}

function getJsonData() {
    return fetch("./data/data.json")
        .then(response => response.json())
        .then(json => {
            data = new DOMItems().setHeader(json.header).setSection(json.section).setColor(json.color).build();
        })
        .catch(error => {
            console.log(error.message);
        });
}

function addItems(parent, collection) {
    try {
        for (let count = 0; count < collection.length; count++) {
            if (collection[count].txt !== undefined) {
                addItemWithId(parent, collection[count]);
                addTextIn(isId(collection[count].idOrClass), collection[count].txt);
            } else {
                if(collection[count].color !== null) {
                    addItemWithIdAndColor(parent, collection[count])
                }
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

function addTextIn(elementIdOrClass, txt) {
    const item = document.querySelector(elementIdOrClass);
    item.innerText = txt;
}

function addItemWithId(parent, element) {
    try {
        const main = getItem(parent);
        const item = document.createElement(element.element);
        item.setAttribute("id", element.idOrClass);
        main.appendChild(item);
    } catch (error) {
        console.log(error.message);
    }
}

function addItemWithIdAndColor(parent, element) {
    try {
        const main = getItem(parent);
        const item = document.createElement(element.element);
        item.style.backgroundColor = element.color;
        item.addEventListener("click", () => { getBackgroundColor(item); onClickGuide(false); });
        item.setAttribute("id", element.idOrClass);
        main.appendChild(item);
    } catch (error) {
        console.log(error.message);
    }
}

function addDivItemWithId(parent, elementId) {
    try {
        const main = getItem(parent);
        const item = document.createElement("div");
        item.setAttribute("id", elementId);
        main.appendChild(item);
    } catch (error) {
        console.log(error.message);
    }
}

function isId(element) {
    return "#".concat("", element);
}

function getItem(selector) {
    return document.querySelector(selector);
}