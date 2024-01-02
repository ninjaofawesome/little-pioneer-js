/**
 * class that creates a P tag
 */
export class Paragraph extends HTMLParagraphElement {
    constructor() {
        super();
        console.log('Paragraph --->')
    }

    connectedCallback() {
        console.log('Paragraph has mounted to page');
    }
};

customElements.define('paragraph-element', Paragraph)