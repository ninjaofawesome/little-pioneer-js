const TemplateComponent = (templateId: string) => {
    const templateEl = document.createElement('template');
    templateEl.id= templateId;
    templateEl.dataset.id = templateId;

    return templateEl;

}

export default TemplateComponent;