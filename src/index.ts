// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
// import data from './utils/textDictionary.json' assert { type: 'json' };
import data from './utils/textDictionary.json';
import { stylesLoaded } from "./styles/index";
import { componentsLoaded, createListComponent } from "./components/index";

window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    stylesLoaded();
    componentsLoaded();

    const bodyElement = document.querySelector('body');
    const list = createListComponent(data)

    bodyElement!.appendChild(list);

});


