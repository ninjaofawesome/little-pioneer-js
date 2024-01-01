//todo: create service for state in next ticket

export default class ListItem extends HTMLElement {
    constructor() {
        super();
        console.log('ListItem --->')
    }

    connectedCallback() {
        console.log('ListItem has mounted to page');
    }
}

customElements.define('list-item-component', ListItem, {extends: 'li'});
