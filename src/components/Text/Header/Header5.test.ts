import { addTextToElement } from "../../../utils";

describe('h tags', () => {

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('a header to be on page with content', () => {
        const page =  document.body;
        const header5 = document.createElement('header5-element');
        addTextToElement(header5, 'hello world header5');
        page.appendChild(header5);

        const text = page.querySelector('header5-element');
        expect(text?.innerHTML).toBe('hello world header5')
      });

      test('multiple headers to be on page with content', () => {
        const page =  document.body;
        const header1 = document.createElement('header1-element');
        const header5 = document.createElement('header5-element');
        addTextToElement(header1, 'hello world header1');
        page.appendChild(header1);
        addTextToElement(header5, 'hello world header5');
        page.appendChild(header5);

        expect(page.childElementCount).toEqual(2)
      });
});