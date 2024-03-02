export class TemplateComponent extends HTMLElement {
    templateId: string;

    constructor(templateId: string) {
        super();
        this.templateId = templateId;
    }

    connectedCallback() {
        console.log(`the template is ${this.templateId}`);
        this.render();
    }

    render() {
        const templateEl = document.createElement('template-element');
        templateEl.setAttribute('id', this.templateId);
        templateEl.setAttribute('data-testid', this.templateId);
        return(templateEl)
    }
};


customElements.define('template-element', TemplateComponent);