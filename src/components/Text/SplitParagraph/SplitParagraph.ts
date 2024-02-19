import { addTextToElement } from "../../../utils";
import { createAnchorElement } from "../Anchor";

// todo, think about a better way to refactor this so the types work better

/**
 * class that creates a P tag
 */
export class SplitParagraph extends HTMLElement {
    data: object;

    constructor(data: object) {
        super();
        this.data = data;
        console.log('Split Paragraph --->')
    }

    connectedCallback() {
        console.log('Split Paragraph has mounted to page');
        this.render();
  
    }

    addText() {
        const vals = Object.values(this.data);
    
        vals.forEach(item => {
            if (typeof item === 'string') {
                addTextToElement(this, item)
            } else if (typeof item === 'object') {
                this.appendChild(createAnchorElement(item));
            }  
        });
    }

    render() {
        const p = document.createElement('split-paragraph-element');
        p.setAttribute('role', 'paragraph');
        this.addText();
        return p;
    }
};

customElements.define('split-paragraph-element', SplitParagraph);

