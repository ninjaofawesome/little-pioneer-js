import { addTextToElement } from "../../utils";

export class ListItem extends HTMLElement {
    item: any;

    constructor(item: any) {
        super();
        console.log('ListItem --->');
        this.item = item;
    }

    connectedCallback() {
        this.render();
    };

    addText() {
        addTextToElement(this, this.item);
    }

    requiredAttributes() {
        this.setAttribute('role', 'paragraph');
    }

    render() {
        const eachListItem = document.createElement('list-item-component');
        this.addText();
        this.requiredAttributes();
        return eachListItem;
    }
}

customElements.define('list-item-component', ListItem);
