// this is the entry point for all functionality on the site
import '@webcomponents/custom-elements';
import data from './utils/textDictionary.json';
import contactData from './utils/linkTextDictionary.json';
import { stylesLoaded } from "./styles/index";
import Components from './components';

const {
    AvatarComponent,
    TemplateComponent,
    ListComponent,
    AnchorElement,
    Header1,
    Header2,
    Header3,
    Header4,
    Header5,
    Header6,
    Paragraph
} = Components;



window.addEventListener('DOMContentLoaded', () => {
    console.log('content loaded')

    stylesLoaded();

    const navElement = document.querySelector('nav')!;
    const mainElement= document.querySelector('main')!;
    const footerElement = document.querySelector('footer')!; 

    const p = new Paragraph(data.home.collabSlug);
    const h1Left= new Header1(data.home.lp);
    const h1Right = new Header1(data.home.ch);
    const avatar = new AvatarComponent();


    const contact = new Paragraph(contactData.homepage);
    mainElement.appendChild(h1Left).appendChild(h1Right);
    mainElement.appendChild(p);
    mainElement.appendChild(avatar)
    mainElement.appendChild(contact);
});


