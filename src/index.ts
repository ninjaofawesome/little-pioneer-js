// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
import data from './utils/textDictionary.json';
import contactData from './utils/linkTextDictionary.json';
import { stylesLoaded } from "./styles/index";
import { SizeProps } from './models';
import {
    Paragraph,
    SplitParagraph,
    Header1,
    IconComponent,
    ListComponent,
    AvatarComponent
} from "./components";



window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');

    stylesLoaded();

    const navElement = document.querySelector('nav');
    const mainElement = document.querySelector('main');
    const footerElement = document.querySelector('footer'); 
    const list = new ListComponent(data.sections); 
    const headerDiv = document.createElement('div');

    const p = new Paragraph(data.home.collabSlug);
  
    const h1Left = new Header1(data.home.lp);
    const h1Right = new Header1(data.home.ch);
    headerDiv.appendChild(h1Left);
    headerDiv.appendChild(h1Right);

    const contact = new SplitParagraph(contactData.homepage);

    navElement!.appendChild(headerDiv);

    const AvatarElement = new AvatarComponent('hello world');
    const Icon = new IconComponent('menu', 'sm');

    // mainElement!.appendChild(list);
    mainElement!.appendChild(p);
    mainElement!.appendChild(contact);
    mainElement!.appendChild(AvatarElement)
    mainElement!.appendChild(list).appendChild(Icon);
});


