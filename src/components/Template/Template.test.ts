import {TemplateComponent} from "./Template";

describe('templates', () => {
    test('it should have an id', ()=> {
        const template = new TemplateComponent('test');
        expect(template.templateId).toBe('test');
    })
});