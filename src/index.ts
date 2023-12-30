// this is the entry point for all functionality on the site
import { stylesLoaded } from "./styles/index";
import { componentsLoaded, registerComponents, createListItems } from "./components/index";

window.addEventListener('DOMContentLoaded', () => {
    console.log('dom content loaded');
    // register any component on load
    registerComponents();

    stylesLoaded();
    componentsLoaded();
    createListItems();

    const bodyElement = document.querySelector('body');


});


