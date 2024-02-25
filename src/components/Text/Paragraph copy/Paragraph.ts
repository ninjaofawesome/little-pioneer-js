import { addTextToElement } from "../../../utils";
import { AnchorElement } from "../Anchor/Anchor";

// todo, think about a better way to refactor this so the types work better

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

    render() {
        const p = document.createElement('paragraph-element');
        p.setAttribute('role', 'paragraph');
        this.addText();
        return p;
    }
};

customElements.define('paragraph-element', Paragraph);

