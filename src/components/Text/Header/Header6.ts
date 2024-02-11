import { addTextToElement } from "../../../utils";

//todo: define custom elements that render to appropriate H tags
/**
 * class that creates a H6 tag
 */
class Header6 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;

        console.log('Header 6 --->')
    }

    connectedCallback() {
        this.render(this.data);
    }

    render(data: string) {
        const h6Tag = document.createElement('header6-element');
        h6Tag.setAttribute('role', 'header');
        h6Tag.setAttribute('ariaLevel', '6');

        addTextToElement(h6Tag, data);
    }
};

customElements.define('header6-element', Header6);

export default Header6;





  