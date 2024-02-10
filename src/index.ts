// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
import data from './utils/textDictionary.json';
import contactData from './utils/linkTextDictionary.json';
import { stylesLoaded } from "./styles/index";
import TemplateComponent from './components';
import AvatarComponent from './components';
import ListComponent from './components';
import AnchorElement from './components';
import Header1 from './components';
import Header2 from './components';
import Header3 from './components';
import Header4 from './components';
import Header5 from './components';
import Header6 from './components';
import {
    // createListComponent,
    createParagraphElement,
    splitParagraphElement
} from "./components";



window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    stylesLoaded();

    const navElement = document.querySelector('nav');
    const mainElement = document.querySelector('main');
    const footerElement = document.querySelector('footer'); 
    // const list = createListComponent(data.sections); 

    const p: Node = createParagraphElement(data.home.collabSlug);
    const h1Left: Node = Header1(data.home.lp);
    const h1Right = Header1(data.home.ch);

    const contact = splitParagraphElement(contactData.homepage);

    const navComponent = TemplateComponent('nav-element');
    navComponent.content.appendChild(p);

    navElement!.appendChild(navComponent.content);
    const Avatar: Node = AvatarComponent();

    // mainElement!.appendChild(list);
    mainElement!.appendChild(h1Left).appendChild(h1Right);
    mainElement!.appendChild(p);
    mainElement!.appendChild(contact);
    mainElement!.appendChild(Avatar)

});


