// this is the entry point for all functionality on the site
import { stylesLoaded } from "./styles/index.js";
import { componentsLoaded } from "./components/index.js";
import { readJSON, JSONLogger } from "./utils/index.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('the dom content has loaded');
    stylesLoaded();
    componentsLoaded();
    JSONLogger('./utils/textDictionary.json');
});