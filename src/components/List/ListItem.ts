//todo: create service for state in next ticket
import { addTextToElement } from "../../utils";

export class ListItem extends HTMLElement {
    item: string;

    constructor(item: string) {
        super();
        console.log('ListItem --->');
        this.item = item;
    }

    connectedCallback() {
        console.log('ListItem has mounted to page');
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
