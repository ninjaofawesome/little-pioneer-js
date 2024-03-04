export class ButtonComponent extends HTMLElement {

    onClick = () => {};
    content: string;

    constructor(onClick = () => {}, content: string) {
        super();
        this.onClick = onClick;
        this.content = content;
    }

    connectedCallback() {
        this.render();
    }

    requiredAttributes() {
        this.setAttribute('role', 'button');
        // note: this could be a string of text or an interpolated string like a slot
        this.innerHTML = this.content;
        this.onclick = this.onClick;
    }

    render() {
        const button = document.createElement('button-component');
        this.requiredAttributes();
        return button;
    }
};

customElements.define('button-component', ButtonComponent);