import {screen} from '@testing-library/dom';
import { SplitParagraph } from "./SplitParagraph";
import contactData from "../../../utils/linkTextDictionary.json";

describe('p tags', () => {

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('a paragraph to be on page with content and links', () => {
        const page =  document.body;
        const paragraph1 = new SplitParagraph(contactData.homepage)
        page.appendChild(paragraph1);

        const text = page.querySelector('split-paragraph-element');
        // check for text
        expect(text!.innerHTML).toContain('Additonal Questions? Email me (Craig Levy)');
        // check that anchor tags exist
        expect(screen.getAllByRole('link').length).toBe(3);
        // check for link text
        expect(text!.innerHTML).toContain('craig@littlepioneer.com'); 
      });
});