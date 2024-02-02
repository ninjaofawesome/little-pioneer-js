//todo: create service for state in next ticket

export class AvatarComponent extends HTMLElement {
    constructor() {
        super();
        console.log('Avatar --->')
    }

    connectedCallback() {
        this.render();
        console.log('Avatar has mounted to page');
    }

    render() {
        console.log('hello avatar');
        return (document.createElement('avtar-component'));
    }
}

customElements.define('avatar-component', AvatarComponent);

