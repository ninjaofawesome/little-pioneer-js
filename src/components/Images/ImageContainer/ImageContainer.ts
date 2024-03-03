import { unitOfMeasure } from "../../../utils";

export class ImageContainer extends HTMLElement {
    fullWidth?: boolean | undefined;
    width?: number | undefined;
    height: number;

    constructor(height: number, fullWidth?: boolean | undefined, width?: number | undefined) {
        super();
        this.fullWidth = fullWidth;
        this.width = width;
        this.height = height;
    }

    connectedCallback() {
        this.render();
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
        return container;
    }
};

customElements.define('image-container', ImageContainer);