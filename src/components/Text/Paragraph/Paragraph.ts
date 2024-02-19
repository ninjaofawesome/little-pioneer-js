import { ParagraphElement } from "../../../models";
import { addTextToElement } from "../../../utils";
import { createAnchorElement } from "../Anchor";

/**
 * 
 * @param props 
 * @returns a paragraph with links and text
 */
export const splitParagraphElement = (data: ParagraphElement) => {
    const vals = Object.values(data);

    const paragraph = document.createElement('paragraph-element');

    vals.forEach(item => {
        if (typeof item === 'string') {
            paragraph.innerHTML += item;
        }
        paragraph.appendChild(createAnchorElement(item));
    });

    return paragraph;
};

/**
 * class that creates a P tag
 */
export class Paragraph extends HTMLElement {
    data: string | object;

    constructor(data: string | object) {
        super();
        this.data = data;
        console.log('Paragraph --->')
    }

    connectedCallback() {
        console.log('Paragraph has mounted to page');
        this.render();
        this.addText()
    }

    addText() {
        console.log('add text', this, this.data);
        if(typeof this.data === 'string') {
            addTextToElement(this, this.data);
        } else if (typeof this.data === 'object') {
            splitParagraphElement(this.data);
        }
    }

    render() {
        const p = document.createElement('paragraph-element');
        p.setAttribute('role', 'paragraph');
        return p;
    }
};

customElements.define('paragraph-element', Paragraph);

