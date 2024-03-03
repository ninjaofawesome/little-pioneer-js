import { screen } from '@testing-library/dom';
import { ImageContainer } from "./ImageContainer";

describe('ImageContainer', () => {
;
    const imageContainer= new ImageContainer('hello world', 200, true);

    test('it should return an element', ()=> {
        const bodyEl = document.querySelector('body');
        bodyEl!.appendChild(imageContainer);
        expect(screen.findByText('image-container')).toBeTruthy();
    });

    test('it should return view width if it is provided', () => {
        expect(imageContainer.fullWidth).toBeTruthy();
    });

    test('it should have a set height', () => {
        expect(imageContainer.height).toBe(200);
    });
    
    test('it should have alt text', () => {
        expect(imageContainer.altText).toBe('hello world');
    })
});