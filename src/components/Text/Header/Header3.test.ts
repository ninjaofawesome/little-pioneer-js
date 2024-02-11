import { addTextToElement } from "../../../utils";

describe('h tags', () => {

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('a header to be on page with content', () => {
        const page =  document.body;
        const header3 = document.createElement('header3-element');
        addTextToElement(header3, 'hello world header3');
        page.appendChild(header3);

        const text = page.querySelector('header3-element');
        expect(text?.innerHTML).toBe('hello world header3')
      });

      test('multiple headers to be on page with content', () => {
        const page =  document.body;
        const header1 = document.createElement('header1-element');
        const header3 = document.createElement('header3-element');
        addTextToElement(header1, 'hello world header1');
        page.appendChild(header1);
        addTextToElement(header3, 'hello world header3');
        page.appendChild(header3);

        expect(page.childElementCount).toEqual(2)
      });
});