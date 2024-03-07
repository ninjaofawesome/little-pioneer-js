import { SizeProps } from '../../models';
import { iconPaths } from './iconPaths';

type IconSizeProps = Pick<SizeProps, 'sm' | 'md'>;
type PathProps = 'menu' | 'email' | 'google' | 'fb' | 'ig';

export class IconComponent extends HTMLElement {

    size: IconSizeProps;
    path: PathProps;

    constructor(size: IconSizeProps, path: PathProps) {
        super();
        this.size = size;
        this.path = path;
    }

    connectedCallback() {
        this.render();
    };

    // todo, set up viewbox params
    setViewbox() {
        console.log(this.size)
    }

    requiredAttributes() {
        this.setAttribute('role', 'graphics-symbol');
        this.setAttribute('d', this.path);
        this.setViewbox();

    }

    render() {
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.requiredAttributes();

        return icon;
    }

};

customElements.define('icon-component', IconComponent);