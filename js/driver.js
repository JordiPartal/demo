const driver = window.driver.js.driver;
const side = "left";
const align = "start";

function onClickGuide(allowCloseDriverJs) {
    const stepsWithNoStyle = driver({
        showProgress: true,
        allowClose: allowCloseDriverJs,
        steps: [
            addMainItemId(data.header),
            selectMainDomElementOfSection(section),
            addMainItemId(data.section[0]),
            addMainItemId(data.section[1]),
            addMainItemId(data.section[2]),
            addMainItemId(data.section[3]),
            selectMainDomElementOfColor(color)
        ]
    });
    stepsWithNoStyle.drive();
}

function selectMainDomElementOfSection(DOMElement) {
    const titleTxt = "Sección de";
    return {
        element: isId(DOMElement),
        popover: {
            title: writeATitle(titleTxt, DOMElement),
            description: "Aquí está ubicada la sección principal del apartado de '#section'",
            side: side,
            align: align
        }
    };
}

function selectMainDomElementOfColor(DOMElement) {
    const titleTxt = "Sección de";
    return {
        element: isId(DOMElement),
        popover: {
            title: writeATitle(titleTxt, DOMElement),
            description: "Aquí se puede seleccionar el color de los 'popover'",
            side: side,
            align: align
        }
    };
}

function addMainItemId(DOMElement) {
    return {
        element: isId(DOMElement.idOrClass),
        popover: {
            title: DOMElement.driver.title,
            description: DOMElement.driver.description,
            side: side,
            align: align
        }
    };
}

function writeATitle(txt, DOMElement) {
    return txt.concat(" ", isId(DOMElement))
}

function getBackgroundColor(DOMElement) {
     bkgColor = window.getComputedStyle(DOMElement).backgroundColor;
}