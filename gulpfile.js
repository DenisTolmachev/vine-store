var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('auto', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 25 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('min', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/'));
});

