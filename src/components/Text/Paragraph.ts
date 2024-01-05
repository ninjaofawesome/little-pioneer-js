import { addTextToElement } from "../../utils";

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

export const splitParagraphElement = (data: object | object[] | string | string[]) => {

};

/**
 * 
 * @param data 
 * @returns a paragraph element and also functionality for paragraph elements with links
 */
export const createParagraphElement = (data: object | object[] | string | string[]) => {
    const p = document.createElement('paragraph-element');
    const dataArray = Array.isArray(data);
    if (dataArray || typeof data === 'object') {
        //todo:  create a split paragraph element with anchor links
        console.log('this is an array or an object, use a different function');
        return;
    }

    addTextToElement(p, data);

    return p;
};

customElements.define('paragraph-element', Paragraph)