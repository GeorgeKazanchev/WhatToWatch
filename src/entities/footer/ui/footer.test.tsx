import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { Footer } from '../index';

describe('Footer', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <Footer
                    isMainPage={true}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
