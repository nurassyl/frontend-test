const
	gulp = require('gulp'),
	pug = require('gulp-pug'),
	less = require('gulp-less'),
	coffee = require('gulp-coffee'),
	minifyCSS = require('gulp-csso'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
	gutil = require('gulp-util'),
	exec = require('child_process').exec,
	preprocess = require('gulp-preprocess');

gulp.task('html', function() {
	return gulp.src('./src/*.pug')
		.pipe(pug())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/'));
});
gulp.task('css', function() {
	return gulp.src('./src/css/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist/css/'));
});
gulp.task('js', function() {
	return gulp.src('./src/js/*.coffee')
		.pipe(coffee())
		.pipe(preprocess({
			context: {
				ENV: gutil.env.env
			}
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', ['html', 'css', 'js'], function() {
	browserSync.reload();
	gutil.log('Browser reloaded!');
})

gulp.task('default', ['html', 'css', 'js'], function() {
	exec('cp -rf ./src/img ./dist/img');
	gulp.watch(['./src/*.pug', './src/**/*.pug'], ['watch']);
	gulp.watch('./src/css/*.less', ['watch']);
	gulp.watch('./src/js/*.coffee', ['watch']);

	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});

	gutil.log('Gulp is running in \''+gutil.env.env+'\' mode!');
});
