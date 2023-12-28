// this is the entry point for all functionality on the site
import { stylesLoaded } from "./styles/index";
import { componentsLoaded } from "./components/index";
import { JSONLogger } from "./utils/index";

window.addEventListener('DOMContentLoaded', () => {
    stylesLoaded();
    componentsLoaded();
    JSONLogger('./src/utils/textDictionary.json');
});
