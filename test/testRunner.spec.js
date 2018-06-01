import {http} from './utils/http';
import smoker from '../smoker.json';
import {expect} from 'chai';

const apis = smoker.apis;

describe('API tests', () => {

  apis.forEach((api) => {
    it(api.name, () => {
      return http(api.url, api.method, api.data, api.headers)
        .then((res) => {
          expect(res.status).to.eq(api.successCode);
        });
    });
  });

});



