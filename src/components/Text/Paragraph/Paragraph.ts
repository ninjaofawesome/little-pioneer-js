import { addTextToElement } from "../../../utils";
/**
 * class that creates a P tag
 */
export class Paragraph extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;
        console.log('Paragraph --->')
    }

    connectedCallback() {
        console.log('Paragraph has mounted to page');
        this.render();
    }

    addText() {
        addTextToElement(this, this.data);   
    }

    requiredAttributes() {
        this.setAttribute('role', 'paragraph');
    }

    render() {
        const p = document.createElement('paragraph-element');
        this.requiredAttributes();
        this.addText()
        return p;
    }
};

customElements.define('paragraph-element', Paragraph);

