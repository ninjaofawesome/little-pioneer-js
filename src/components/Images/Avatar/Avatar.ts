//todo: extend this way to other components

export class AvatarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        console.log('Avatar has mounted to page');
    }

    render() {
        return (document.createElement('avtar-component'));
    }
}

customElements.define('avatar-component', AvatarComponent);

