import { ListElement } from "../../models";
import { ListItem } from './ListItem';
/**
 * class that creates the ul element
 */
export class ListComponent extends HTMLElement {
    data: ListElement;

    constructor(data: ListElement) {
        super();
        console.log('ListComponent --->');
        this.data = data;
    }

    connectedCallback() {
        this.render();
    }

    addListItems() {
        const menuValues = Object.values(this.data);
        menuValues.forEach((item) => {
            const eachListItem = new ListItem(item);
            this.appendChild(eachListItem);
        });
    }

    render(){
        const list = document.createElement('list-component');
        this.addListItems();
        return list;
    }
};

customElements.define('list-component', ListComponent);

  