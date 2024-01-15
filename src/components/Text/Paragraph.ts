import { ParagraphElement } from "../../models";
import { addTextToElement } from "../../utils";
import { createAnchorElement } from "./Anchor";

/**
 * class that creates a P tag
 */
class Paragraph extends HTMLElement {
    constructor() {
        super();
        console.log('Paragraph --->')
    }

    connectedCallback() {
        console.log('Paragraph has mounted to page');
    }
};


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
 * 
 * @param data 
 * @returns a paragraph element and also functionality for paragraph elements with links
 */
export const createParagraphElement = (data: ParagraphElement ) => {
    const p = document.createElement('paragraph-element');

    if(typeof data === 'string') {
        addTextToElement(p, data);
    }

    splitParagraphElement(data)

    return p;
};





customElements.define('paragraph-element', Paragraph)