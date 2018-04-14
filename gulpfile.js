const config = {
	src: {
		css: ['./src/css/*.less'],
		js: ['./src/js/*.coffee'],
		img: ['./src/img/*.jpg'],
		html: ['./src/*.pug', './src/**/*.pug']
	},
	dist: {
		css: ['./dist/css/*.css'],
		js: ['./dist/js/*.js'],
		img: ['./dist/img/*.jpg']
	}
}
const
	gulp = require('gulp'),
	pug = require('gulp-pug'),
	less = require('gulp-less'),
	coffee = require('gulp-coffee'),
	minifyCSS = require('gulp-csso'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	gutil = require('gulp-util'),
	plumber = require('gulp-plumber'),
	exec = require('child_process').exec,
	preprocess = require('gulp-preprocess');

gulp.task('css', function() {
	return gulp
		.src(config.src.css)
		.pipe(plumber())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css/'));
});
gulp.task('js', function() {
	return gulp
		.src(config.src.js)
		.pipe(plumber())
		.pipe(coffee())
		.pipe(preprocess({
			context: {
				ENV: gutil.env.env
			}
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});
gulp.task('img', function() {
	return gulp
		.src(config.src.img)
		.pipe(gulp.dest('./dist/img'));
});
gulp.task('html', ['css', 'js', 'img'], function() {
	return gulp
		.src(config.src.html[0])
		.pipe(plumber())
		.pipe(pug())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/'));
});
gulp.task('watch', ['html'], function() {
	browserSync.reload();
	gutil.log('Browser reloaded!');
});
gulp.task('default', ['html'], function() {
	exec('bash ./prebuild.sh');
	if(gutil.env.env === 'development') {
		gulp.watch([...config.src.css, ...config.src.js, ...config.src.img, ...config.src.html], ['watch']);

		browserSync.init({
			server: {
				baseDir: './dist'
			}
		});
		gutil.log('Gulp is running!');
	}
});
