export class TemplateComponent {
    templateId: string;

    constructor(templateId: string) {
        this.templateId = templateId;
    }

    connectedCallback() {
        console.log(`the template is ${this.templateId}`);
        this.render();
    }

    render() {
        const templateEl = document.createElement('template');
        templateEl.setAttribute('id', this.templateId);
        templateEl.setAttribute('data-testid', this.templateId);
        return(templateEl)

    }
};

