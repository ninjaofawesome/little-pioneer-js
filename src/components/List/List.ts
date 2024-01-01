/**
 * class that creates the ul element
 */
export default class ListComponent extends HTMLElement {
    constructor() {
        super();
        console.log('ListComponent --->')
    }

    connectedCallback() {
        console.log('ListComponent has mounted to page');

    
    }
};

customElements.define('list-component', ListComponent, {extends: 'ul'})

  