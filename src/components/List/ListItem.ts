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

customElements.define('list-item-component', ListItem, {extends: 'li'})

/**
 * A component that creates list items based on a data object given
 */
// export const createListItems = (el: HTMLElement) => {
//     // todo: tap into list state and refactor
//     return readJSON('../../utils/textDictionary.json').then(data => {
//         const values = Object.values(data.sections);
//         values.forEach(item => {
//             listItem.innerHTML=`<p>${item}</p>`;
//             list.appendChild(listItem);
//         })
//         el.append(list) 
//     });
// };
