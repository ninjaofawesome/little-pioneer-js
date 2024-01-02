import { addTextToElement } from "../../utils";

describe('h tags', () => {

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('a header to be on page with content', () => {
        const page =  document.body;
        const header1 = document.createElement('header1-element');
        addTextToElement(header1, 'hello world header1');
        page.appendChild(header1);

        const text = page.querySelector('header1-element');
        expect(text?.innerHTML).toBe('hello world header1')
      });

      test('multiple headers to be on page with content', () => {
        const page =  document.body;
        const header1 = document.createElement('header1-element');
        const header2 = document.createElement('header2-element');
        addTextToElement(header1, 'hello world header1');
        page.appendChild(header1);
        addTextToElement(header2, 'hello world header2');
        page.appendChild(header2);

        expect(page.childElementCount).toEqual(2)
      });
});