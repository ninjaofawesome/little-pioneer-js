// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
import data from './utils/textDictionary.json';
import contactData from './utils/linkTextDictionary.json';
import { stylesLoaded } from "./styles/index";
import {
    Paragraph,
    // createListComponent,
    createHeaderElement,
    AvatarComponent,
    TemplateComponent
} from "./components";



window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    stylesLoaded();

    const navElement = document.querySelector('nav');
    const mainElement = document.querySelector('main');
    const footerElement = document.querySelector('footer'); 
    // const list = createListComponent(data.sections); 
    const headerDiv = document.createElement('div');

    const p = new Paragraph(data.home.collabSlug);
  
    const h1Left = createHeaderElement({
        data: data.home.lp,
        el: 'header1-element'
    });
    const h1Right = createHeaderElement({
        data: data.home.ch, 
        el: 'header1-element'
    });
    headerDiv.appendChild(h1Left);
    headerDiv.appendChild(h1Right);

    const contact = new Paragraph(contactData.homepage);

    const navComponent = TemplateComponent('nav-element');
    navComponent.append(headerDiv);

    navElement!.appendChild(headerDiv);

    const AvatarElement = new AvatarComponent();

    // mainElement!.appendChild(list);
    //mainElement!.appendChild(h1Left).appendChild(h1Right);
    mainElement!.appendChild(p);
    mainElement!.appendChild(contact);
    mainElement!.appendChild(AvatarElement)

});


