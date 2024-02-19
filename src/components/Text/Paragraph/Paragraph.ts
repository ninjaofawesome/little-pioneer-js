import { addTextToElement } from "../../../utils";
import { createAnchorElement } from "../Anchor";
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
  
    }

    splitParagraph() {
        const vals = Object.values(this.data);
    
        vals.forEach(item => {
            if (typeof item === 'string') {
                addTextToElement(this, item)
            } else if (typeof item === 'object') {
                this.appendChild(createAnchorElement(item));
            }  
        });
    }

    addText() {
        if (typeof this.data === 'string') {
            addTextToElement(this, this.data);
        } else if (typeof this.data === 'object') {
            this.splitParagraph();
        }
        
    }

    render() {
        const p = document.createElement('paragraph-element');
        p.setAttribute('role', 'paragraph');
        this.addText()
        return p;
    }
};

customElements.define('paragraph-element', Paragraph);

