import {screen} from '@testing-library/dom';
import TemplateComponent from "./Template";

describe('templates', () => {
    test('it should have an id', ()=> {
       const template = TemplateComponent('test');
        expect(template.id).toBe('test');
    })
});