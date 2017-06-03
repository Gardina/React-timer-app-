const React = require('react');

const NumericInput = require('react-numeric-input');

let totalSec = 0;
let secVal = 0;
let minVal = 0;
let hourVal = 0;

const CountdownForm = React.createClass({
  onSubmit: function(e) {
    totalSec = secVal + minVal + hourVal;
    e.preventDefault();
      if(totalSec > 0) {
        this.props.onSetCountdown(totalSec);
      }
      totalSec = 0;
      secVal = 0;
      minVal = 0;
      hourVal = 0;
  },

  getInputHour: function(valueAsNumber) {
    hourVal = valueAsNumber*3600;
  },

  getInputMin: function(valueAsNumber) {
    minVal = valueAsNumber*60;
  },

  getInputSec: function(valueAsNumber) {
    secVal = valueAsNumber;
  },

  render: function () {

    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <div className="numeric-input-group">
            <div className="numeric-input">
              <label>Hours</label>
              <NumericInput className="form-control" min={0} max={100} value={0} onChange={this.getInputHour}/>
            </div>
            <div className="numeric-input">
              <label>Minutes</label>
              <NumericInput className="form-control" min={0} max={100} value={0} onChange={this.getInputMin}/>
            </div>
            <div className="numeric-input">
              <label>Seconds</label>
              <NumericInput className="form-control" min={0} max={100} value={0} onChange={this.getInputSec}/>
            </div>
          </div>
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
