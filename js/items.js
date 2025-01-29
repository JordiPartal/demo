class Item {
    constructor() {
        this.item_id = null;
        this.html_element = null;
    }

    setIdOrClass(id) {
        this.item_id = id;
        return this;
    }

    setElement(element) {
        this.html_element = element;
        return this;
    }

    build() {
        return {
            item_id: this.item_id,
            html_element: this.html_element
        }
    }
}