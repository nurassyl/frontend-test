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
	gutil = require('gulp-util');

	dir = {
		html: {
			in: ['./src/*.pug', './src/**/*.pug'],
			out: './dist/'
		},
		css: {
			in: './src/css/*.less',
			out: './dist/css/'
		},
		js: {
			in: './src/js/*.coffee',
			out: './dist/js/'
		}
	};

gulp.task('html', function() {
	return gulp.src(dir.html.in)
		.pipe(pug())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(dir.html.out));
});
gulp.task('css', function() {
	return gulp.src(dir.css.in)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(gulp.dest(dir.css.out));
});
gulp.task('js', function() {
	return gulp.src(dir.js.in)
		.pipe(coffee())
		.pipe(uglify())
		.pipe(gulp.dest(dir.js.out));
});

gulp.task('watch', ['html', 'css', 'js'], function() {
	browserSync.reload();
	gutil.log('Browser reloaded!');
})

gulp.task('default', ['html', 'css', 'js'], function() {
	gulp.watch(dir.html.in, ['watch']);
	gulp.watch(dir.css.in, ['watch']);
	gulp.watch(dir.js.in, ['watch']);

	browserSync.init({
		server: {
			baseDir: './dist',
			codeSync: false
		}
	});

	gutil.log('Gulp is running!');
});
