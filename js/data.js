class Data {
    constructor() {
        this.header = null;
        this.section = null;
    }

    setHeader(header) {
        this.header = header;
        return this;
    }

    setSection(section) {
        this.section = section;
        return this;
    }

    build() {
        return {
            header: this.header,
            section: this.section
        }
    }
}

class Element {
    constructor() {
        this.id = null;
        this.txt = null;
    }

    setIdOrClass(id) {
        this.id = id;
        return this;
    }

    setText(text) {
        this.txt = text;
        return this;
    }

    build() {
        return {
            id: this.id,
            txt: this.txt
        }
    }
}