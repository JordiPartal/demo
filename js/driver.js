const driver = window.driver.js.driver;
const side = "left";
const align = "start";

function onClickGuide(allowCloseDriverJs, idOrClass) {
    const disableInteraction = true;
    const stepsWithNoStyle = driver({
        showProgress: false,
        allowClose: allowCloseDriverJs,
        popoverClass: idOrClass,
        steps: [
            addMainItemId(data.header),
            selectMainDomElementOfSection(section, disableInteraction),
            addMainItemId(data.section[0]),
            addMainItemId(data.section[1]),
            addMainItemId(data.section[2]),
            addMainItemId(data.section[3]),
            selectMainDomElementOfColor(color, disableInteraction)
        ]
    });
    stepsWithNoStyle.drive();
}

function selectMainDomElementOfSection(DOMElement, disableInteraction) {
    const titleTxt = "Sección de";
    return {
        element: isId(DOMElement),
        popover: {
            title: writeATitle(titleTxt, DOMElement),
            description: "Aquí está ubicada la sección principal del apartado de '#section'.",
            side: side,
            align: align
        },
        disableActiveInteraction: disableInteraction,
    };
}

function selectMainDomElementOfColor(DOMElement, disableInteraction) {
    const titleTxt = "Sección de";
    return {
        element: isId(DOMElement),
        popover: {
            title: writeATitle(titleTxt, DOMElement),
            description: "Aquí se puede seleccionar el color de los botone del 'popover'.",
            side: side,
            align: align
        },
        disableActiveInteraction: disableInteraction,
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

function configPopover(DOMElement) {
    const item = getItem(DOMElement);
    item.style.backgroundColor = bkgColor;
    item.style.color = font;
}

function writeATitle(txt, DOMElement) {
    return txt.concat(" ", isId(DOMElement))
}