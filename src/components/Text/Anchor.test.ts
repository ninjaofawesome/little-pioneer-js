import {screen} from "@testing-library/dom";
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
        expect(screen.getByText('test').closest('a')?.getAttribute('href')).toEqual('https://www.google.com/');
        expect(screen.getByText('test').closest('a')?.getAttribute('target')).toEqual('_blank');
    });
});