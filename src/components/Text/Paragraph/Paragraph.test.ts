import { Paragraph } from "./Paragraph";

describe('p tags', () => {

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('a paragraph to be on page with content', () => {
        const page =  document.body;
        const paragraph1 = new Paragraph('Hello world I am a paragraph');
        page.appendChild(paragraph1);

        const text = page.querySelector('paragraph-element');
        expect(text!.innerHTML).toBe('Hello world I am a paragraph');
      });
});