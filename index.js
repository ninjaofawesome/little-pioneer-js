// this is the entry point for all functionality on the site
import { stylesLoaded } from "./styles/index.js";
import { componentsLoaded } from "./components/index.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('the dom content has loaded');
    stylesLoaded();
    componentsLoaded();
});