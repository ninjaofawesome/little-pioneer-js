import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { ButtonComponent } from './Button';

describe('buttons', () => {
    const testFunc = jest.fn();
    const button = new ButtonComponent(testFunc, 'hello world');

    test('a button should not be empty', () => {
        expect(button.content).toBe('hello world');
    })

    test('a button should have an onclick function', async() => {
        const user = userEvent.setup();
        const bodyEl = document.querySelector('body');
        bodyEl!.appendChild(button);

        await user.click(screen.getByRole('button', {name: /hello world/i}))

        expect(testFunc).toHaveBeenCalled();
    });
});