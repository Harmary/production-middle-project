import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test.skip('with only first param', () => {
        componentRender(Counter, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test.skip('increment', () => {
        componentRender(Counter, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test.skip('decrement', () => {
        componentRender(Counter, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
