import { addTextToElement } from "../../../utils";

/**
 * class that creates a H1 tag
 */
export class Header1 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
        console.log('Header 1 --->')
    }

    connectedCallback() {
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    requiredAttributes() {
        this.setAttribute('role', 'heading');
        this.setAttribute('aria-level', '1');
    }

    render() {
        const h1 = document.createElement('header1-element');
        this.requiredAttributes();
        this.addText();
        return h1;
    }
};

/**
 * class that creates a H2 tag
 */
export class Header2 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
        console.log('Header 2 --->')
    }

    connectedCallback() {
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    requiredAttributes() {
        this.setAttribute('role', 'heading');
        this.setAttribute('aria-level', '2');
    }

    render() {
        const h2 = document.createElement('header2-element');
        this.requiredAttributes();
        this.addText();
        return h2;
    }
};

/**
 * class that creates a H3 tag
 */
export class Header3 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
        console.log('Header 3 --->')
    }

    connectedCallback() {
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    requiredAttributes() {
        this.setAttribute('role', 'heading');
        this.setAttribute('aria-level', '3');
    }

    render() {
        const h3 = document.createElement('header3-element');
        this.requiredAttributes();
        this.addText();
        return h3;
    }
};

/**
 * class that creates a H4 tag
 */
export class Header4 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
        console.log('Header 4 --->')
    }

    connectedCallback() {
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    requiredAttributes() {
        this.setAttribute('role', 'heading');
        this.setAttribute('aria-level', '4');
    }

    render() {
        const h4 = document.createElement('header4-element');
        this.requiredAttributes();
        this.addText();
        return h4;
    }
};

/**
 * class that creates a H5 tag
 */
export class Header5 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
        console.log('Header 5 --->')
    }

    connectedCallback() {
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    requiredAttributes() {
        this.setAttribute('role', 'heading');
        this.setAttribute('aria-level', '5');
    }

    render() {
        const h5 = document.createElement('header5-element');
        h5.setAttribute('role', 'heading');
        this.requiredAttributes();
        this.addText();
        return h5;
    }
};

/**
 * class that creates a H6 tag
 */
export class Header6 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
        console.log('Header 6 --->')
    }

    connectedCallback() {
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    requiredAttributes() {
        this.setAttribute('role', 'heading');
        this.setAttribute('aria-level', '6');
    }

    render() {
        const h6 = document.createElement('header6-element');
        this.requiredAttributes();
        this.addText();
        return h6;
    }
};

customElements.define('header1-element', Header1);
customElements.define('header2-element', Header2);
customElements.define('header3-element', Header3);
customElements.define('header4-element', Header4);
customElements.define('header5-element', Header5);
customElements.define('header6-element', Header6);




  