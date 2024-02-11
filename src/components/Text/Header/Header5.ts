import { addTextToElement } from "../../../utils";

//todo: define custom elements that render to appropriate H tags
/**
 * class that creates a H5 tag
 */
class Header5 extends HTMLElement {
    data: string;

    constructor(data: string) {
        super();
        this.data = data;

        console.log('Header 5 --->')
    }

    connectedCallback() {
        this.render(this.data);
    }

    render(data: string) {
        const h5Tag = document.createElement('header5-element');
        h5Tag.setAttribute('role', 'header');
        h5Tag.setAttribute('ariaLevel', '5');

        addTextToElement(h5Tag, data);
    }
};

customElements.define('header5-element', Header5);

export default Header5;





  