'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('event: ', JSON.stringify(event));
  callback(new Error('my error'));
};
