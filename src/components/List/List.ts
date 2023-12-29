export default class ListComponent extends HTMLUListElement {
    constructor() {
        super();
        console.log('ListComponent --->')
    }

    connectedCallback() {
        console.log('ListComponent has mounted to page');
    }
}
