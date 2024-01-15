import { HeaderElement } from "../../models";
import { addTextToElement } from "../../utils";

/**
 * class that creates a H1 tag
 */
export class Header1 extends HTMLElement {
    constructor() {
        super();
        console.log('Header 1 --->')
    }

    connectedCallback() {
        console.log('Header1 has mounted to page');
    }
};

/**
 * class that creates a H2 tag
 */
export class Header2 extends HTMLElement {
    constructor() {
        super();
        console.log('Header 2 --->')
    }

    connectedCallback() {
        console.log('Header2 has mounted to page');
    }
};

/**
 * class that creates a H3 tag
 */
export class Header3 extends HTMLElement {
    constructor() {
        super();
        console.log('Header 3 --->')
    }

    connectedCallback() {
        console.log('Header3 has mounted to page');
    }
};

/**
 * class that creates a H4 tag
 */
export class Header4 extends HTMLElement {
    constructor() {
        super();
        console.log('Header 4 --->')
    }

    connectedCallback() {
        console.log('Header4 has mounted to page');
    }
};

/**
 * class that creates a H5 tag
 */
export class Header5 extends HTMLElement {
    constructor() {
        super();
        console.log('Header 5 --->')
    }

    connectedCallback() {
        console.log('Header5 has mounted to page');
    }
};

/**
 * class that creates a H6 tag
 */
export class Header6 extends HTMLElement {
    constructor() {
        super();
        console.log('Header 6 --->')
    }

    connectedCallback() {
        console.log('Header6 has mounted to page');
    }
};

customElements.define('header1-element', Header1);
customElements.define('header2-element', Header2);
customElements.define('header3-element', Header3);
customElements.define('header4-element', Header4);
customElements.define('header5-element', Header5);
customElements.define('header6-element', Header6);

export const createHeaderElement = (props: HeaderElement) => {
    const headerTag = document.createElement(`${props.el}`);

    addTextToElement(headerTag, props.data);

    return headerTag;
};



  