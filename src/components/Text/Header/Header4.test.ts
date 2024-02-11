import { addTextToElement } from "../../../utils";

describe('h tags', () => {

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('a header to be on page with content', () => {
        const page =  document.body;
        const header4 = document.createElement('header4-element');
        addTextToElement(header4, 'hello world header4');
        page.appendChild(header4);

        const text = page.querySelector('header4-element');
        expect(text?.innerHTML).toBe('hello world header4')
      });

      test('multiple headers to be on page with content', () => {
        const page =  document.body;
        const header1 = document.createElement('header1-element');
        const header4 = document.createElement('header4-element');
        addTextToElement(header1, 'hello world header1');
        page.appendChild(header1);
        addTextToElement(header4, 'hello world header4');
        page.appendChild(header4);

        expect(page.childElementCount).toEqual(2)
      });
});