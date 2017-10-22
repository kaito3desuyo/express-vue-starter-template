import nodeExternals from 'webpack-node-externals';

module.exports = {
	//entry: {
	//	'main': './src/views/main.js'
	//},
	output: {
		//path: `${__dirname}/dist/views/javascripts`,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: 'babel-loader'
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				//exclude: /node_modules/,
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	//target: 'node',
	//externals: [nodeExternals()],
	//externals: /^(?!^\.\/)/,
}