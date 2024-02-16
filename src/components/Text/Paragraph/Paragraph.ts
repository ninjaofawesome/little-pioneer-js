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
            addTextToElement(el, item);
        } else if (typeof item === 'object') {
            console.log(item)
            el.appendChild(AnchorElement(item));
        };
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
    }

    connectedCallback() {
        this.render();
        this.addText();
    }

    render() {
        console.log('paragraph has loaded');
        const paragraph = document.createElement('paragraph-element');
        paragraph.setAttribute('aria-role', 'paragraph');
        return paragraph;
    }

    addText() {
        const content = this.data;

        if(typeof content === 'string') {
            this.innerHTML = `${content}`;
        } else if (typeof content === 'object') {
            splitParagraphElement(this, content)
        }
    }
}

customElements.define('paragraph-element', Paragraph);

export default Paragraph;