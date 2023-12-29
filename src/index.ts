// this is the entry point for all functionality on the site
import { stylesLoaded } from "./styles/index";
import { componentsLoaded, registerComponents } from "./components/index";
import { JSONLogger } from "./utils/index";

window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');
    // register any component on load
    registerComponents();
    stylesLoaded();
    componentsLoaded();
    JSONLogger('./utils/textDictionary.json');

    const bodyElement = document.querySelector('body');


});


