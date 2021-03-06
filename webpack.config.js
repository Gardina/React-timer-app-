const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'],
	externals: {
		jQuery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jQuery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Input: 'app/components/Input.jsx',
			Controls: 'app/components/Controls.jsx',
			CountdownForm: 'app/components/CountdownForm.jsx',
			Clock: 'app/components/Clock.jsx',
			CountDown: 'app/components/CountDown.jsx',
			Timer: 'app/components/Timer.jsx',
			Navigation: 'app/components/Navigation.jsx',
			Main: 'app/components/Main.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
	devtool: 'cheap-module-eval-source-map'
};
