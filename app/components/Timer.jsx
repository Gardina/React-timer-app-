const React = require('react');

const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},

	componentDidUpdate: function (prevProps, prevState) {
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer)
					this.timer = undefined;
					break;
			}
		}
	},

	componentWillUnmount: function () {
		clearInterval(this.timer);
	},

	startTimer: function () {
		this.timer = setInterval(() => {
			let newCount = this.state.count + 1;
			this.setState(
				{count: newCount}
			);
		}, 1000);
	},

	handleStatusChange: function (newStatus) {
		this.setState({
			countdownStatus:newStatus
		})
	},

	render: function() {
		let {count, countdownStatus} = this.state;

		return (
      <div>
        <h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
		);
	}
});

module.exports = Timer;
