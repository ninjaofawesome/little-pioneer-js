// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
import { stylesLoaded } from "./styles/index";
import { componentsLoaded } from "./components/index";
import { readJSON } from "./utils";

window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    stylesLoaded();
    componentsLoaded();

    // read all the json and do stuff
    // todo: refactor this in the list component
    readJSON('../../utils/textDictionary.json').then(data => {
        const bodyElement = document.querySelector('body');
        const list = document.createElement('list-component');

        const menuValues = Object.values(data.sections);
        menuValues.forEach(item => {
            const eachListItem = document.createElement('list-item-component')
            eachListItem.innerHTML = `<p>${item}</p>`;
            list.appendChild(eachListItem)
        });

        bodyElement!.appendChild(list);

    });

});


