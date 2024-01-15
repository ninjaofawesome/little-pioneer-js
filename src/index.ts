// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
import data from './utils/textDictionary.json';
import contactData from './utils/linkTextDictionary.json';
import { stylesLoaded } from "./styles/index";
import {
    createListComponent,
    createParagraphElement,
    createHeaderElement,
    splitParagraphElement
} from "./components/index";

window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    stylesLoaded();

    const bodyElement = document.querySelector('body');
    const list = createListComponent(data.sections); 

    const p = createParagraphElement(data.home.collabSlug) as Node;
    const h1Left = createHeaderElement({
        data: data.home.lp,
        el: 'header1-element'
    }) as Node;
    const h1Right = createHeaderElement({
        data: data.home.ch, 
        el: 'header1-element'
    }) as Node;

    const contact = splitParagraphElement(contactData.homepage) as Node;


    

    bodyElement!.appendChild(list);
    bodyElement!.appendChild(h1Left).appendChild(h1Right);
    bodyElement!.appendChild(p);
    bodyElement!.appendChild(contact);

});


