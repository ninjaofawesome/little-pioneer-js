import { addTextToElement } from "../../../utils";

//todo: define custom elements that render to appropriate H tags
/**
 * class that creates a H2 tag
 */
class Header2 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;

        console.log('Header 2 --->')
    }

    connectedCallback() {
        this.render(this.data);
    }

    render(data: string) {
        const h2Tag = document.createElement('header2-element');
        h2Tag.setAttribute('role', 'header');
        h2Tag.setAttribute('ariaLevel', '2');

        addTextToElement(h2Tag, data);
    }
};

customElements.define('header2-element', Header2);

export default Header2;





  