import { addTextToElement } from "../../../utils";

//todo: define custom elements that render to appropriate H tags
/**
 * class that creates a H1 tag
 */
class Header1 extends HTMLElement {
    content(content: any) {
        throw new Error('Method not implemented.');
    }
    data: string;

    constructor(data: string) {
        super();
        this.data = data;

        console.log('Header 1 --->')
    }

    connectedCallback() {
        this.render(this.data);
    }

    render(data: string) {
        const h1Tag = document.createElement('header1-element');
        h1Tag.setAttribute('role', 'header');
        h1Tag.setAttribute('ariaLevel', '1');

        addTextToElement(h1Tag, data);
    }
};

customElements.define('header1-element', Header1);

export default Header1;





  