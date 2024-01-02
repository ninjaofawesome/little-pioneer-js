// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
import data from './utils/textDictionary.json';
import { stylesLoaded } from "./styles/index";
import { createListComponent, createParagraphElement } from "./components/index";

window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    stylesLoaded();

    const bodyElement = document.querySelector('body');
    const list = createListComponent(data);

    console.log({data})

    const splitPara = {
        text: data.home.location,
        links: [data.home.locationAddress, data.home.locationNumber]
    }

    const paraData = data.home['collabSlug'];
    const p = createParagraphElement(paraData) as Node;

    bodyElement!.appendChild(list);
    bodyElement!.appendChild(p);

});


