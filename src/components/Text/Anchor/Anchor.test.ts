import {screen} from "@testing-library/dom";
import { AnchorElement } from "./Anchor";
//todo: install testing library to actually check click
describe('a tags', () => {
    test('a link should click to a target if one is provided', () => {
        const page =  document.body;
        const link = new AnchorElement('test', 'https://www.google.com/','blank');
        page.appendChild(link);
        expect(screen.getByRole('link').getAttribute('href')).toEqual('https://www.google.com/');
    });
});