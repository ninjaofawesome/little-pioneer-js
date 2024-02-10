import { ListElement } from "../../models";
/**
 * class that creates the ul element
 */
export default class ListComponent extends HTMLElement {
    data: ListElement;

    constructor(data: ListElement) {
        super();
        this.data = data;
        console.log('ListComponent --->')
        
    }

    connectedCallback() {
       this.render(this.data);
    }


    render(data: ListElement) {
        const list = document.createElement('list-component');

        const menuValues = Object.values(data);
        menuValues.forEach((item) => {
            const eachListItem = document.createElement('list-item-component')
            eachListItem.innerHTML = `<p>${item}</p>`;
            list.appendChild(eachListItem);
        });
    
        return list;

    }
};

customElements.define('list-component', ListComponent)

  