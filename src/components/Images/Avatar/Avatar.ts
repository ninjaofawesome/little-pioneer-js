//todo: extend this way to other components

export class AvatarComponent extends HTMLElement {
    altText: string;

    constructor(altText: string) {
        super();
        this.altText = altText;
    }

    connectedCallback() {
        this.render();
        console.log('Avatar has mounted to page');
    }

    requiredAttributes() {
        this.setAttribute('role', 'image');
        this.setAttribute('alt', this.altText);
    }

    render() {
        const avatar = document.createElement('avtar-component');
        this.requiredAttributes();
        return avatar;
    }
}

customElements.define('avatar-component', AvatarComponent);

