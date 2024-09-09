import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { Footer } from './footer';

describe('Footer', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <Footer />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
