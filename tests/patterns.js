//lite pattern = https://ru.hexlet.io/code_reviews/1022094
//https://ru.hexlet.io/code_reviews/1022238

//JEST
//example

//npm i --save-dev jest

import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

//NODE_OPTIONS=--experimental-vm-modules npx jest
