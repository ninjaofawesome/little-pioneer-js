import { addTextToElement } from "../../../utils";

//todo: define custom elements that render to appropriate H tags
/**
 * class that creates a H4 tag
 */
class Header4 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;

        console.log('Header 4 --->')
    }

    connectedCallback() {
        this.render(this.data);
    }

    render(data: string) {
        const h4Tag = document.createElement('header4-element');
        h4Tag.setAttribute('role', 'header');
        h4Tag.setAttribute('ariaLevel', '4');

        addTextToElement(h4Tag, data);
    }
};

customElements.define('header4-element', Header4);

export default Header4;





  