const driver = window.driver.js.driver;
let bkgColor, font;

const side = "left";
const align = "start";
font = "white";

function onClickGuide(allowCloseDriverJs, idOrClass) {
    const stepsWithNoStyle = new driver({
        showProgress: false,
        allowClose: allowCloseDriverJs,
        popoverClass: idOrClass,
        steps: [
            addMainItemId(data.header),
            selectMainDomElementOfSection(section),
            addMainItemId(data.section[0]),
            addMainItemId(data.section[1]),
            addMainItemId(data.section[2]),
            addMainItemId(data.section[3]),
            selectMainDomElementOfColor(color)
        ],
    });
    stepsWithNoStyle.drive();
}

function selectMainDomElementOfSection(DOMElement) {
    const titleTxt = "Sección de";
    return {
        element: isId(DOMElement),
        popover: {
            title: writeATitle(titleTxt, DOMElement),
            description: "Aquí está ubicada la sección principal del apartado de '#section'.",
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
            description: "Aquí se puede seleccionar el color de los botone del 'popover'.",
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