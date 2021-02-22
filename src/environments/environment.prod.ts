import { name, version } from '../../package.json';
export const environment = {
  production: true,
  name: name,
  version: version,
  bgapiUrl: 'https://test-bgapi.azurewebsites.net/api/Statistics/Companies?name='
};
