const React = require('react');

var Clock = React.createClass({
	getDefaultProps: function() {
		totalSeconds: 0
	},
	propTypes: {
		totalSeconds: React.PropTypes.number
	},

	formatSeconds: function (totalSeconds) {
		let hours = Math.floor(totalSeconds / 3600);
		let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
		let seconds = totalSeconds - (hours * 3600) - (minutes * 60);
		if (minutes > 60) {
			minutes = minutes%60;
			hours = Math.floor(minutes/60);
		}
		if (seconds < 10) {
			seconds = '0'+seconds;
		}
		if (minutes < 10) {
			minutes = '0'+minutes;
		}
		if (hours < 10) {
			hours = '0'+hours;
		}
		return `${hours}:${minutes}:${seconds}`;
	},

	render: function (){
		let {totalSeconds} = this.props;
		return (
      <div className="clock">
				<span className="clock-text">
					{this.formatSeconds(totalSeconds)}
				</span>
      </div>
		);
	}
});

module.exports = Clock;
