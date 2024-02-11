import { addTextToElement } from "../../../utils";

//todo: define custom elements that render to appropriate H tags
/**
 * class that creates a H3 tag
 */
class Header3 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;

        console.log('Header 3 --->')
    }

    connectedCallback() {
        this.render(this.data);
    }

    render(data: string) {
        const h3Tag = document.createElement('header3-element');
        h3Tag.setAttribute('role', 'header');
        h3Tag.setAttribute('ariaLevel', '3');

        addTextToElement(h3Tag, data);
    }
};

customElements.define('header3-element', Header3);

export default Header3;





  