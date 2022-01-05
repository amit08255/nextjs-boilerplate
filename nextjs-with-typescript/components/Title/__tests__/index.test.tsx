import * as React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Title from '../index';

test('should render title correctly', () => {
    render(
        <Title>Hello World</Title>,
    ); // render component

    // Find heading on document by heading role
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toMatch(/hello\s+world/i);
});
