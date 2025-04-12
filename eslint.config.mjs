import { sheriff, tseslint  } from 'eslint-config-sheriff';

const sheriffOptions = {
  "react": false,
  "lodash": false,
  "remeda": false,
  "next": false,
  "astro": false,
  "playwright": false,
  "storybook": true,
  "jest": false,
  "vitest": false
};

export default tseslint.config(sheriff(sheriffOptions));