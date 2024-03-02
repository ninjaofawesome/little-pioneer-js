import { addTextToElement } from "../../../utils";
import { AnchorElement } from "../Anchor/Anchor";
/**
 * class that creates a P tag with links inside
 */
export class SplitParagraph extends HTMLElement {
    data: object;

    constructor(data: object) {
        super();
        this.data = data;
        console.log('Split Paragraph --->')
    }

    connectedCallback() {
        this.render();
    }

    addText() {
        const vals = Object.values(this.data);
    
        vals.forEach(item => {
            if (typeof item === 'string') {
                addTextToElement(this, item)
            } else if (typeof item === 'object') {
                const anchorEl = new AnchorElement(item.text, item.url, item.target, item.noopener, item.noreferrer);
                this.appendChild(anchorEl);
            }  
        });
    }

    requiredAttributes() {
        this.setAttribute('role', 'paragraph');
    }

    render() {
        const splitParagraph = document.createElement('split-paragraph-element');
        this.requiredAttributes();
        this.addText();
        return splitParagraph;
    }
};

customElements.define('split-paragraph-element', SplitParagraph);

