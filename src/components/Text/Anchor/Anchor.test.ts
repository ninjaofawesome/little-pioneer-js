import { createAnchorElement } from "./Anchor";
//todo: install testing library to actually check click
describe('a tags', () => {
    test('a link should click to a target if one is provided', () => {
        const page =  document.body;
        const link = createAnchorElement({
            text: 'test',
            url: 'https://www.google.com/',
            target: 'blank'
        });
        page.appendChild(link);
        expect(link.href).toBe('https://www.google.com/');
        expect(link.target).toBe('_blank');
    });
});