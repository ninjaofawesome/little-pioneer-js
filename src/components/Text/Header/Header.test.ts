import '@testing-library/jest-dom'
import{ screen } from '@testing-library/dom';
import {Header1, Header2} from './Header';

describe('h tags', () => {

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('a header to be on page with content', () => {
        const page =  document.body;
        const header1 = new Header1('hello world header1');
        page.appendChild(header1);

        const text = screen.getByText('hello world header1');
        expect(text).toBeInTheDocument();
      });

      test('multiple headers to be on page with content', () => {
        const page =  document.body;
        const header1 = new Header1('hello world header1');
        const header2 = new Header2('hello world header2');
        page.appendChild(header1);
        page.appendChild(header2);

        expect(page.childElementCount).toEqual(2);
      });
});