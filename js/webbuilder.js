let data;

let main = "main";
let section = "section";
let color = "color";

initIndex();

async function initIndex() {
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
        .catch(error =>{
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
        item.addEventListener("click", () => {
            getBackgroundColor(isId(element.idOrClass));
            onClickGuideIndex(true, "custom");
        });
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

function getBackgroundColor(DOMElement) {
    const item = getItem(DOMElement);
    let css = document.styleSheets[0];
    for (let rule of css.cssRules) {
        if (rule.selectorText === "div.driver-popover.custom") {
            rule.style.setProperty("--set-background-color", item.style.backgroundColor);
            rule.style.color = "white";
        }
    }
}

function addMenuButton(imageDir, toPage, txt) {
    const main = getItem(isId("main"));
    const menu = document.createElement("div")
    const image = document.createElement("img");
    const hyperlink = document.createElement("a");
    hyperlink.innerText = txt;

    menu.setAttribute("id", "menu");
    image.setAttribute("src", "img/".concat(imageDir).concat(".png"));
    hyperlink.setAttribute("id", "menu-txt");
    hyperlink.setAttribute("href", "./".concat(toPage).concat(".html"));
    main.appendChild(menu);
    menu.appendChild(image);
    menu.appendChild(hyperlink);
}

function goToIndex() {
    location.href = "index.html";
}

function isId(element) {
    return "#".concat("", element);
}

function isClass(element) {
    return ".".concat("", element);
}

function getItem(selector) {
    return document.querySelector(selector);
}