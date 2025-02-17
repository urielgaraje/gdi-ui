import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import {
  transformGroups,
  logBrokenReferenceLevels,
  logWarningLevels,
  logVerbosityLevels,
  formats,
} from 'style-dictionary/enums';

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary, {
  excludeParentKeys: true,
});

const sd = new StyleDictionary({
  // make sure to have source match your token files!
  // be careful about accidentally matching your package.json or similar files that are not tokens
  source: ['src/themes/**/*.json'],
  preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
  platforms: {
    css: {
      transformGroups: 'token-studio',
      transforms: ['name/kebab'], // <-- add a token name transform for generating token names, default is camel
      buildPath: 'src/themes/',
      files: [
        {
          destination: 'variables.css',
          format: formats.cssVariables,
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

/* await sd.cleanAllPlatforms();
await sd.buildAllPlatforms(); */
