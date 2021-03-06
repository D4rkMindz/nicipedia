// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'https://api.roast.li',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    {i18n: 'de-CH', title: 'Deutsch'},
    {i18n: 'en-US', title: 'English'},
  ],
  supportedLanguagesAsStringArray: ['de-CH', 'en-US'],
};
