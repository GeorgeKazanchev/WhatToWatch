import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { Logo } from '../index';

describe('Logo', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <Logo
                    isMainPage={true}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
