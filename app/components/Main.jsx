const React = require('react');

var Navigation = require('Navigation');

const Main = (props) => {
	return (
    <div>
      <div>
        <div>
					<Navigation/>
					<p>Main.jsx renderd</p>
          {props.children}
        </div>
      </div>
    </div>
	);
};

module.exports = Main;
