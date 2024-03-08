import { iconPaths } from './iconPaths';

type IconSizeProps = 'sm' | 'md';
type PathProps = 'menu' | 'email' | 'google' | 'fb' | 'ig';

export class IconComponent extends HTMLElement {
    size: IconSizeProps;
    path: PathProps;

    constructor(path: PathProps, size: IconSizeProps) {
        super();
        this.size = size || undefined;
        this.path = path;
        console.log('iconic ----->', this.size, this.path)
    }

    connectedCallback() {
        this.render();
    };

    setViewbox() {
        const viewboxAttrs = this.size === 'sm' ? '0 0 24 24' : '0 0 36 36';
        this.setAttribute('viewbox', viewboxAttrs);
    }

    requiredAttributes() {
        this.setAttribute('role', 'graphics-symbol');
        this.setAttribute('d', this.path);
        this.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        this.setViewbox();
    }

    render() {
        // const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const icon = document.createElement('icon-component')
        this.requiredAttributes();
        return icon;
    }

};

customElements.define('icon-component', IconComponent);