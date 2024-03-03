import { unitOfMeasure } from "../../../utils";

export class ImageContainer extends HTMLElement {
    fullWidth?: boolean | undefined;
    width?: number | undefined;
    height: number;
    altText: string;

    constructor(altText: string, height: number, fullWidth?: boolean | undefined, width?: number | undefined) {
        super();
        this.fullWidth = fullWidth;
        this.width = width;
        this.height = height;
        this.altText = altText;
    }

    connectedCallback() {
        this.render();
    }

    requiredAttributes() {
        this.setAttribute('role', 'image');
        this.setAttribute('alt', this.altText);
    }

    containerDimensions() {
        const width = this.fullWidth ? '100vw' : `${unitOfMeasure(this.width!, 'px')}`;
        const height = `${unitOfMeasure(this.height, 'px')}`;
        this.style.width = width;
        this.style.height = height;
    };

    render() {
        const container = document.createElement('image-container');
        this.containerDimensions();
        this.requiredAttributes();
        return container;
    }
};

customElements.define('image-container', ImageContainer);