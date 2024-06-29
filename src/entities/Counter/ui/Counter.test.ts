import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from '..';

describe('Counter', () => {
    test('with only first param', () => {
        componentRender(
            typeof Counter,
            {
                initialState: {
                    counter: { value: 10 },
                },
            },
        );
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', () => {
        componentRender(
            typeof Counter,
            {
                initialState: {
                    counter: { value: 10 },
                },
            },
        );
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', () => {
        componentRender(
            typeof Counter,
            {
                initialState: {
                    counter: { value: 10 },
                },
            },
        );
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
