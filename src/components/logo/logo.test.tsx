import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { Logo } from './logo';

describe('Logo', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <Logo />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
