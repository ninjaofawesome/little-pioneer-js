const TemplateComponent = (templateId: string) => {
    const templateEl = document.createElement('template');
    templateEl.id= templateId;
    templateEl.setAttribute('data-testid', templateId);

    return templateEl;

}

export default TemplateComponent;