import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
    {
        files: ['**/*.{tsx,ts,jsx,js,mjs,cjs}'],
        plugins: {
            pluginReact
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
            },
            globals: {
                ...globals.browser
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            '@typescript-eslint/consistent-type-definitions': ['error', 'type']
        }
    }
];
