import { addTextToElement } from "../../../utils";
import AnchorElement from "../Anchor/Anchor";

/**
 * 
 * @param props 
 * @returns a paragraph with links and text
 */
const splitParagraphElement = (el: HTMLElement, data: object) => {
    const vals = Object.values(data);

    vals.forEach(item => {
        if (typeof item === 'string') {
            el.innerHTML += item;
        }
        el.appendChild(AnchorElement(item));
    });

    console.log(el)

    return el;
};

/**
 * class that creates a P tag
 */
class Paragraph extends HTMLElement {
    data: string | object;
    
    constructor(data: string | object) {
        super();
        this.data = data;
        console.log('paragraph has loaded')
    }

    connectedCallback(data: string | object) {
        const paragraph = document.createElement('paragraph-element');

        if(typeof data === 'string') {
            addTextToElement(paragraph, data);
        } else if (typeof data === 'object') {
            splitParagraphElement(paragraph, data);
        }
        console.log({paragraph})
        return paragraph;
    }
}

customElements.define('paragraph-element', Paragraph);

export default Paragraph;