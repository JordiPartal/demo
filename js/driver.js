const driver = window.driver.js.driver;
let bkgColor, font;

const side = "left";
const align = "start";
font = "white";

function onClickGuideMainPage(allowCloseDriverJs, idOrClass) {
    const mainPageGuide = new driver({
        showProgress: false,
        prevBtnText: "Anterior",
        nextBtnText: "Siguiente",
        doneBtnText: "Cerrar",
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
    mainPageGuide.drive();
}

function onFocusElementFormPage() {
    const idOrClass = "custom";
    addFocusOn(idOrClass, getItem(isId("mail")), "Correo");
    addFocusOn(idOrClass, getItem(isId("first-name")), "1r apellido");
    addFocusOn(idOrClass, getItem(isId("second-name")), "2o apellido");
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

function addFocusOn(idOrClass, DOMElement, title) {
    const driverJsFocus = new driver({
        popoverClass: idOrClass
    });
    DOMElement.addEventListener("focus", () => {
        driverJsFocus.highlight({
            stagePadding: 0,
            element: DOMElement,
            popover: {
                title: title,
                description: writeADescription(title.toLowerCase())
            },
            onDestroyed: () => {
                document?.activeElement?.blur();
            }
        })
    })
}

function writeATitle(txt, DOMElement) {
    return txt.concat(" ", isId(DOMElement))
}

function writeADescription(title) {
    return "".concat("Escriba su ", title);
}