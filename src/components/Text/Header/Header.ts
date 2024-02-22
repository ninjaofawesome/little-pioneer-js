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
        console.log('Header1 has mounted to page');
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    render() {
        const h1 = document.createElement('header1-element');
        h1.setAttribute('role', 'heading');
        h1.setAttribute('aria-level', '1');
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
        console.log('Header2 has mounted to page');
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    render() {
        const h2 = document.createElement('header2-element');
        h2.setAttribute('role', 'heading');
        h2.setAttribute('aria-level', '2');
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
        console.log('Header3 has mounted to page');
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    render() {
        const h3 = document.createElement('header3-element');
        h3.setAttribute('role', 'heading');
        h3.setAttribute('aria-level', '3');
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
        console.log('Header4 has mounted to page');
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    render() {
        const h4 = document.createElement('header4-element');
        h4.setAttribute('role', 'heading');
        h4.setAttribute('aria-level', '4');
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
        console.log('Header5 has mounted to page');
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    render() {
        const h5 = document.createElement('header5-element');
        h5.setAttribute('role', 'heading');
        h5.setAttribute('aria-level', '5');
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
        console.log('Header6 has mounted to page');
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);
    }

    render() {
        const h6 = document.createElement('header6-element');
        h6.setAttribute('role', 'heading');
        h6.setAttribute('aria-level', '6');
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




  