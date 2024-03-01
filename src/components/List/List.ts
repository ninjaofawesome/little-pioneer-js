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
        console.log('ListComponent has mounted to page');
        this.render();
    }

    render(){
        const list = document.createElement('list-component');

        const menuValues = Object.values(this.data);
        menuValues.forEach((item) => {
            const eachListItem = new ListItem(item);
            list.appendChild(eachListItem)
        });

        return list;
    }
};

customElements.define('list-component', ListComponent)

  