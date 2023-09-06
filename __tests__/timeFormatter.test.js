const timeFormatter = require('../utils/timeFormatter');

describe('timeFormatter', () => {
  test('should return unix and utc format given time', () => {
    expect(timeFormatter('2015-12-25')).toStrictEqual({
      unix: 1451001600000,
      utc: 'Fri, 25 Dec 2015 00:00:00 GMT'
    });
    expect(timeFormatter('1451001600000')).toStrictEqual({
      unix: 1451001600000,
      utc: 'Fri, 25 Dec 2015 00:00:00 GMT'
    });
  });
});
