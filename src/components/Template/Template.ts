const TemplateComponent = (templateId: string) => {
    const templateEl = document.createElement('template');
    templateEl.setAttribute('id', templateId);
    templateEl.setAttribute('data-testid', templateId);

    return templateEl;

};

export default TemplateComponent;
