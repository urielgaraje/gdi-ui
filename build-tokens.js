import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import {
  transformGroups,
  logBrokenReferenceLevels,
  logWarningLevels,
  logVerbosityLevels,
} from 'style-dictionary/enums';

StyleDictionary.registerTransform({
  name: 'value/add-global-prefix',
  type: 'value',
  transitive: true,
  filter: function (token) {
    debugger;
    console.log({ token });
    return typeof token.value === 'string' && token.value.includes('{') && !token.value.includes('{global.');
  },
  transform: function (token) {
    // Agrega "global." a las referencias de color, space y radius
    return token.value.replace(/{(color|space|radius)/g, '{global.$1');
  },
});

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

const sd = new StyleDictionary({
  // make sure to have source match your token files!
  // be careful about accidentally matching your package.json or similar files that are not tokens
  source: ['src/themes/**/*.json'],
  preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
  platforms: {
    css: {
      transformGroup: 'tokens-studio', // <-- apply the tokens-studio transformGroup to apply all transforms
      transforms: ['name/kebab', 'value/add-global-prefix'], // <-- add a token name transform for generating token names, default is camel
      buildPath: 'src/themes/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
  log: {
    warnings: logWarningLevels.warn,
    verbosity: logVerbosityLevels.verbose,
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw,
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
