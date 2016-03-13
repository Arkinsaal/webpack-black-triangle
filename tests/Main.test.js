var React     = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect    = require('expect');
var Main      = require('../src/components/Main.js');

describe('main', function () {
  it('renders without problems', function () {
    var main = TestUtils.renderIntoDocument(<Main/>);
    expect(main).toExist();
  });
});