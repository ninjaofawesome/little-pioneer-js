import { addTextToElement } from "../../../utils";
import { AnchorElement } from "../Anchor/Anchor";

// todo, think about a better way to refactor this so the types work better

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
                const anchorEl = new AnchorElement(item);
                this.appendChild(anchorEl);
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

