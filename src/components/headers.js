export class HeaderComponent extends HTMLHeadElement {
    constructor() {
        super();
        console.log('i am constructor, header');
    }

    connectedCallback() {
        console.log('the header has appended to the page');

        const headerElement = document.createElement('header-component');
        headerElement.innerHTML = 'Hello World';
        const bodyTag = document.querySelector('body');
        bodyTag.appendChild(headerElement)

    }
};

customElements.define('header-component', HeaderComponent)