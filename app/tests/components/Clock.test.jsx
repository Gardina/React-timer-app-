const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
	it('should exist', () => {
		expect(Clock).toExist();
	});

	describe('render', () => {
		it('should render clock output', () => {
			let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={63}/>);
			let $el = $(ReactDOM.findDOMNode(clock));
			let actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:03')
		});
	})

	describe('formatSeconds', () => {
		it('should format seconds', () => {
			let clock = TestUtils.renderIntoDocument(<Clock/>);
			let seconds = 615;
			let expected = '10:15';
			let actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});

	describe('formatSeconds', () => {
		it('should format seconds', () => {
			let clock = TestUtils.renderIntoDocument(<Clock/>);
			let seconds = 61;
			let expected = '01:01';
			let actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});

});
