import {screen} from '@testing-library/dom';
import TemplateComponent from "./Template";

describe('templates', () => {
    test('it should have an id', ()=> {
       const template = TemplateComponent('test');
       const bodyEl = document.querySelector('body');
       bodyEl?.appendChild(template);
       console.log('screen', screen.getByTestId('test'));

        expect(screen.getByTestId('test')).toBeTruthy();
    })
})