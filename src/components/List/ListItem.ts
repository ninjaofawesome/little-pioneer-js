//todo: create service for state in next ticket
import { readJSON } from "../../utils"; 
import { bodyElement, listItem } from "../../tokens";

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
    // todo: tap into list state and refactor

    readJSON('../../utils/textDictionary.json').then(data => {
        const values = Object.values(data.sections);
        values.forEach(item => {
            listItem.innerHTML=`<p>${item}</p>`;
            bodyElement.appendChild(listItem);
        })
    });
};
