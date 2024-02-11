import { addTextToElement } from "../../../utils";

describe('h tags', () => {

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('a header to be on page with content', () => {
        const page =  document.body;
        const header6 = document.createElement('header6-element');
        addTextToElement(header6, 'hello world header6');
        page.appendChild(header6);

        const text = page.querySelector('header6-element');
        expect(text?.innerHTML).toBe('hello world header6')
      });

      test('multiple headers to be on page with content', () => {
        const page =  document.body;
        const header1 = document.createElement('header1-element');
        const header6 = document.createElement('header6-element');
        addTextToElement(header1, 'hello world header1');
        page.appendChild(header1);
        addTextToElement(header6, 'hello world header6');
        page.appendChild(header6);

        expect(page.childElementCount).toEqual(2)
      });
});