export default class ListItem extends HTMLLIElement {
    constructor() {
        super();
        console.log('ListItem --->')
    }

    connectedCallback() {
        console.log('ListItem has mounted to page');
    }
}

/**
 * A component that creates list items based on a data object given
 */
export const createListItems = () => {
    console.log('hello world')
};
