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

    connectedCallback() {
        const paragraph = document.createElement('paragraph-element');
        paragraph.setAttribute('role', 'paragraph')

        const content = this.data;
        let el = undefined;

        if(typeof content === 'string') {
            el = addTextToElement(paragraph, content);
        } else if (typeof content === 'object') {
            el =splitParagraphElement(paragraph, content);
        }
        
        return el;
    }
}

customElements.define('paragraph-element', Paragraph);

export default Paragraph;