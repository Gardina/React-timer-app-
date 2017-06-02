const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should be on 0 ans stopped on stopped status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('stopped');

      expect(timer.state.count).toBe(0);
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      }, 2001);
    });

    it('should start counting on started status', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('started');

      expect(timer.state.count).toBe(0);
      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        done();
      }, 2001);
    });

    it('should pause timer on paused status ', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(2);
      }, 2001);
      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        done(); 
      }, 2001);
    });
  });
});
