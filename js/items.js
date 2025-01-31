class Item {
    constructor() {
        this.item_id = null;
        this.html_element = null;
        this.item_txt = null;
    }

    setIdOrClass(id) {
        this.item_id = id;
        return this;
    }

    setElement(element) {
        this.html_element = element;
        return this;
    }

    setItemTxt(txt) {
        this.item_txt = txt;
        return this;
    }

    build() {
        return {
            item_id: this.item_id,
            html_element: this.html_element,
            item_txt: this.item_txt
        }
    }
}