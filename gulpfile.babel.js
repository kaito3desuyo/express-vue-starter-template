import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import named from 'vinyl-named';

const $ = gulpLoadPlugins();

//nodemon起動
gulp.task('nodemon', (cb) => {
	let called = false;
	return $.nodemon({
		script: './bin/www',
		watch: ['app.js']
	})
	.on ('start', function onStart(){
		if(!called){cb();}
		called = true;
	})
	.on('restart', function onRestart(){
		setTimeout(function reload(){
			browserSync.reload({
				stream: false
			});
		}, 500);
	});
});

//browser-sync起動
gulp.task('browser-sync', ['nodemon'], () => {
	browserSync.init({
		proxy: 'http://localhost:3000',
		port: 4000,
	});
});

//routes jsファイルビルド（単純コピー）
gulp.task('route-js', () => {
	return gulp.src([
		'./src/routes/**/*.js',
	], {
		base: './src'
	})
	.pipe($.plumber())
	//.pipe(named())
	//.pipe(webpackStream(webpackConfig))
	.pipe(gulp.dest('./dist'));
});

//views ejsファイルビルド（単純コピー）
gulp.task('view-ejs', () => {
	return gulp.src([
		'./src/views/**/*.ejs'
	], {
		base: './src'
	})
	.pipe($.plumber())
	.pipe(gulp.dest('./dist'));
});

//views jsファイルビルド
gulp.task('view-js', () => {
	return gulp.src([
		'./src/views/**/*.js',
	])
	.pipe($.plumber())
	.pipe(named())
	.pipe(webpackStream(webpackConfig))
	.pipe(gulp.dest('./dist/views/javascripts'));
});

//cssファイル
gulp.task('css', () => {
  return gulp.src('public/**/*.css')
	.pipe($.plumber())
    .pipe(browserSync.reload({ stream: true }));
});

//browser-syncリロード
gulp.task('bs-reload', () => {
	browserSync.reload();
});

gulp.task('default', ['browser-sync'], () => {
	gulp.watch('src/routes/**/*.js', ['route-js', browserSync.reload]);
	gulp.watch('src/views/**/*.js', ['view-js', browserSync.reload]);
	gulp.watch('src/views/**/*.vue', ['view-js', browserSync.reload]);
	gulp.watch('public/**/*.css',  ['css', browserSync.reload]);
	gulp.watch('src/views/**/*.ejs', ['ejs', browserSync.reload]);
});