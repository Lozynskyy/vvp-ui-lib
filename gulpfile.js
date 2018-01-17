'use strict';


let  gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    gulp.watch('sass/main.scss', ['sass']);
});
