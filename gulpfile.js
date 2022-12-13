const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('_site/assets/**/*.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('_site'));
});

gulp.task('minify-js', function() {
  return gulp.src('_site/js/**/*.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('_site'));
});

gulp.task('minify-html', function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site'));
});

gulp.task('default', gulp.series('minify-css', 'minify-js', 'minify-html'));
